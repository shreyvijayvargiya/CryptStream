
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '@material-ui/core';
import { Login } from '../component';
import Head from 'next/head';

const LoginPage = () => {
	

	const { isAuthenticated, user, authenticate, logout } = useMoralis();
	

	async function login(){
		authenticate({ onComplete: () => console.log("Authenticated"), onError: (error) => console.log("Error in connecting wallet")});
	};

	async function logoutUser(){
		logout()
	};


	return (
		<div>
			<Head>
                <title>CrytpStream</title>
            </Head>
			<Login />
		</div>
	)
};
export default LoginPage;
