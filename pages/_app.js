
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import '../global.css';

const MyApp = ({ Component, pageProps }) => {

    return (
        <MoralisProvider appId={process.env.appId} serverUrl={process.env.serverUrl}>
            <Component {...pageProps} />
        </MoralisProvider>
    );
};
export default MyApp;
