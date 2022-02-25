
import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '@material-ui/core';
import router from 'next/router';

const Login = () => {
	

	const { isAuthenticated, user, authenticate, authError } = useMoralis();
	const[disabled, setDisabled] = useState(false);


	async function login(){
        setDisabled(true);
        if(!isAuthenticated){
            authenticate({ onComplete: () => {
                console.log("Authenticated");
                setDisabled(false);
                router.push("/dashboard?type=transfers");
            }, onError: (error) =>{
                console.log("Error in connecting wallet", error);
                console.log(authError, 'authError');
                alert("Error in connecting metamask")
                setDisabled(false);
            }});
        }else {
            router.push("/dashboard?type=transfers");
        }
	};


    useEffect(() => {
        if(isAuthenticated){
            setDisabled(true);
            router.push("/dashboard?type=transfers");
        }
    }, []);

	return (
		<div className="flex justify-center items-center relative flex-col h-screen" style={{ background: 'linear-gradient(90deg, rgba(106, 133, 182, 0.5) 0%, rgba(186, 200, 224, 0.5) 100%)' }}>
            <div className="text-center p-4">
                <h2 className="text-2xl font-bold">CrytpStream</h2>
                <p className="my-2"> All crytpo streams at once place</p>
                <p className="text-xs">Cross Compatible accross blockhain networks</p>
                <br />
                <Button onClick={login} size="small" color="primary" variant="contained" disabled={disabled}
                    style={{ backgroundColor: 'black', color: 'white', minWidth: '300px' }}
                >
                    Connect <img src="/metamasklogo.svg" className="mx-2 my-2"  /> Wallet
                </Button>
            </div>
		</div>
	)
};
export default Login
