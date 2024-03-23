
// context.js
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sweetAlert } from './auth';
import { useEffect } from 'react';

const AuthContext = createContext();

const userRoles = {
    "2": "Buyer",
    "3": "Seller",
    "4": "Dealer",
};

const AuthProvider = ({ children }) => {
    const authToken = localStorage.getItem("accessToken") || '';
    const defaultLogin = authToken ? true : false;
    const [token, setToken] = useState(authToken);
    const [isLoginned, setLogin] = useState(defaultLogin);
    const [roleName, setRoleName] = useState("User");
    const [userData, setProfile] = useState([]);
    const navigate = useHistory();


    const login = (tokenData, userData, type) => {
        localStorage.setItem("accessToken", tokenData);
        setToken(tokenData);
        setProfile(userData);
        setLogin(true);
        sweetAlert("success", "Success", type ? "Login Successful" : "Registration Successfull");
        navigate.push("/panel/");
    };

    const getRoleName = (role) => {
        const newrole = userRoles[role];
        setRoleName(newrole || "User");
    }

    useEffect(()=>{
        if (userData){
            getRoleName(userData.user_type);
        }
    }, [userData])

    const logout = (error=null) => {
        setToken(null);
        setProfile(null);
        setLogin(false);
        localStorage.clear();
        sweetAlert(error ? "error" : "success", error ? "Error" : "Success", error ? error: "Logout Successful");
        navigate.push("/");
    };

    return (
        <AuthContext.Provider value={{ token, isLoginned, userData, roleName, login, logout  }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };