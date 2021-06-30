import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContextProvider'

const AdminRoute = ({children}) => {
    const {isAuthStateReady, user} = useContext(AuthContext);
    let history = useHistory()
    useEffect(() => {
      if(isAuthStateReady){
          if(!user) {
            history.push("/login")
          }
          if(user && user.role === "USER"){
            history.push("/")
          }
      } 
    }, [isAuthStateReady, user,history])
    return (
        <div>
            {isAuthStateReady && user && user.role === "ADMIN" && children}
        </div>
    )
}

export default AdminRoute
