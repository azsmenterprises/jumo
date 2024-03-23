import React from 'react';
import Footer from '../components/Footer';

const WebLayout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default WebLayout;
