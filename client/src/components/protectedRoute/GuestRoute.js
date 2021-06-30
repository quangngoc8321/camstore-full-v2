import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContextProvider";

const GuestRoute = ({ children }) => {
  const { isAuthStateReady, user } = useContext(AuthContext);
  let history = useHistory();
  useEffect(() => {
    if (isAuthStateReady) {
      if (user) {
        history.push("/");
      }
    }
  }, [isAuthStateReady, user, history]);
  return <div>{!user && children}</div>;
};

export default GuestRoute;
