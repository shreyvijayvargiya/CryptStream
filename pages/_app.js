
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import 'tailwindcss/tailwind.css';
import '../global.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {

    return (
        <MoralisProvider appId={process.env.appId} serverUrl={process.env.serverUrl}>
            {/* <Head>
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
            </Head> */}
            <Component {...pageProps} />
        </MoralisProvider>
    );
};
export default MyApp;
