
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {

    return (
        <MoralisProvider appId={process.env.appId} serverUrl={process.env.serverUrl}>
            <Component {...pageProps} />
        </MoralisProvider>
    );
};
export default MyApp;
