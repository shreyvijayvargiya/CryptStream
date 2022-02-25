import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import router from 'next/router';
import Sidebar from './Sidebar';
import Body from './Body';
import { Divider } from '@material-ui/core';
import NavbarComponent from './Navbar';

const Dashboard = () => {

    const { isAuthenticated, user } = useMoralis();
    
    useEffect(() => {
        if(!isAuthenticated) router.push("/login")
    }, [ isAuthenticated ]);

    return (
        <div>
            <NavbarComponent />
            <Body />
        </div>
    );
};
export default Dashboard;
