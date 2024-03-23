
// context.js
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authToken = localStorage.getItem("authToken") || '';
    const defaultLogin = authToken ? true : false;
    const [token, setToken] = useState(authToken);
    const [isLoginned, setLogin] = useState(defaultLogin);
    const [userData, setProfile] = useState([]);
    const navigate = useHistory();


    const login = (tokenData, userData) => {
        setToken(tokenData);
        setProfile(userData);
        setLogin(true);
        localStorage.setItem("authToken", tokenData);
    };
  
 
    const logout = () => {
        setToken(null);
        setProfile(null);
        setLogin(false);
        localStorage.clear();
        navigate.push("/");
    };

    return (
        <AuthContext.Provider value={{ token, isLoginned, userData, login, logout  }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };