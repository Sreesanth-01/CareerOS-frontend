import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    const login = (token,email,name) =>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
        localStorage.setItem("userName",name);
        setIsAuthenticated(true);
        setUserEmail(email);
        setUserName(name);
    }

    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setIsAuthenticated(false);
        setUserEmail("");
        navigate("/login");
    }

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout,userEmail,userName}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
