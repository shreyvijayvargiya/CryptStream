import React, { useState } from 'react';
import NetworksPage from './Network';
import TransactionsPage from './TransfersPage';
import WalletPage from './Wallet';
import { useRouter } from 'next/router';
import { Card } from '@material-ui/core';
import TokensPage from './Tokens';
import NftsPage from './NFTs';

const Body = () => {
    const router = useRouter();

    return (
        <div className="p-20 flex justify-center items-center">
            <Card variant="outlined" style={{ padding: 10, minWidth: '50%', minHeight: '50vh' }}>
                {router.query.type === "network" && <NetworksPage />}
                {router.query.type === "balances" && <WalletPage />}
                {router.query.type === "tokens" && <TokensPage />}
                {router.query.type === "nfts" && <NftsPage />}
                {router.query.type === undefined || router.query.type === "transfers" && <TransactionsPage />}
            </Card>
        </div>
    );
};
export default Body;