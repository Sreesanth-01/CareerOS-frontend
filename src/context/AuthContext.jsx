import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [userEmail, setUserEmail] = useState("");

    const login = (token,email) =>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
        setIsAuthenticated(true);
        setUserEmail(email);
    }

    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setIsAuthenticated(false);
        setUserEmail("");
    }

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout,userEmail}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
