import React from 'react';
import { AuthProvider } from "../app/context";

const AuthLayout = ({ children }) => {
    return (
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    );
};

export default AuthLayout;
