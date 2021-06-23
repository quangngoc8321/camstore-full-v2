import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContextProvider'

const UserRoute = ({children}) => {
    const {isAuthStateReady, user} = useContext(AuthContext);
    let history = useHistory()
    useEffect(() => {
      if(isAuthStateReady){
          if(!user) {
            history.push("/login")
          }
      } 
    }, [isAuthStateReady, user,history])
    return (
        <div>
            {isAuthStateReady && user && children}
        </div>
    )
}

export default UserRoute
