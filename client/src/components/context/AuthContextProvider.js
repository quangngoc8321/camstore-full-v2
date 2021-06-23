import React, { useEffect, useState } from 'react'
import axios from "axios";
import { notification } from 'antd';
import { useHistory } from 'react-router';
export const AuthContext = React.createContext();
const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        isAuthStateReady: false,
        user: null,
    })
    let history = useHistory();
    const login = async (userData,redirect) => {
        try {
            setLoading(true);
            const option = {
                url: "/api/v1/auth/login",
                method: "post",
                data:userData
            }
            const { data } = await axios(option);
            const {user, token} = data
            localStorage.setItem("token",token)
            setState({...state, user})
            if(redirect){
                history.push(`/${redirect}`)
            }else {
                history.push("/")
            }
        } catch (error) {
            setLoading(false);
            notification.error({
                message: <strong> Error</strong>,
                duration: 3,
                description: error.response.data.message,
                style: {
                  width: 400,
                  textTransform: 'capitalize'
                }
              });
        }
    }
    const register = async (userData,redirect) => {
        try {
             setLoading(true);
            const option = {
                url: "/api/v1/auth/register",
                method: "post",
                data:userData
            }
            const { data } = await axios(option);
            const {user, token} = data
            localStorage.setItem("token",token)
            setState({...state, user})
            if(redirect){
                history.push(`/${redirect}`)
            }else {
                history.push("/")
            }
            
        } catch (error) {
            setLoading(false);
            notification.error({
                message: <strong> Error</strong>,
                duration: 3,
                description: error.response.data.message,
                style: {
                  width: 400,
                  textTransform: 'capitalize'
                }
              });
        }
    }
    const signOut = async () => {
        localStorage.removeItem("token");
        setState({...state, user:null})
    }

    useEffect(()=>{
        const getCurrentUser = async () =>{
            try {
                const token = localStorage.getItem("token");
                if(!token){
                    setState((s)=> ({...s,isAuthStateReady: true, user: null}))
                    return;
                }
                const option = {
                    url: "/api/v1/auth/",
                    method: "get",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                };
                const { data } = await axios(option);
                const {user} = data
                setState((s)=> ({...s,isAuthStateReady: true, user}))
            } catch (error) {
                setState((s)=> ({...s,isAuthStateReady: true, user: null}))
               
            }
        }
        return getCurrentUser();
    },[])

    return (
        <AuthContext.Provider value={{...state,register,login,signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
