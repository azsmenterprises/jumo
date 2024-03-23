import React from 'react';
import AuthData from "./AuthData";

const AdminLayout = ({ children }) => {
    return (
        <>
                <AuthData />
                {children}
        </>
    );
};

export default AdminLayout;
