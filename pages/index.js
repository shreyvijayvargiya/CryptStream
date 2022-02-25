
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '@material-ui/core';
import { Login } from '../component';
import Head from 'next/head';

const Home = () => {
	

	const { isAuthenticated, user, authenticate, logout } = useMoralis();
	

	async function login(){
		authenticate();
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
export default Home
