
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
				<title>CryptStream</title>
                <meta name="title" content="CrytpStream" />
                <meta name="description" content="All crytpo streams at one place from NFT to tokens" />
                <meta property="image" content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Company%2Fbanner.png?alt=media&token=d027a34e-dc55-45b4-be52-6fc1503cb511" />
                <meta name="keywords" content="React, Node JS,Frontend, Backend, Blockhain" />
                <meta name="author" content="shrey vijayvargiya" />

                <meta name="twitter:title" content="iHateReading" />
                <meta name="twitter:description" content="All crytpo streams at one place from NFT to tokens"  />
                <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Company%2Fbanner.png?alt=media&token=d027a34e-dc55-45b4-be52-6fc1503cb511" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="CryptStream | All crytpo streams at one place from NFT to tokens" />
            </Head>
			<Login />
		</div>
	)
};
export default Home
