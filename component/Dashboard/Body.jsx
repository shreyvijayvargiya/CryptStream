import React, { useState } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { Avatar } from '@material-ui/core';
import axios from 'axios';
import { getERC20Transfers } from '../../utils/hooks/getERC20Transfers';
import { getERC20Balances } from '../../utils/hooks/getERC20Balances';
import { getNetworkName } from '../../utils/hooks/getNetworkName';
import NetworksPage from './Network';
import TransactionsPage from './TransfersPage';
import WalletPage from './Wallet';
import { useRouter } from 'next/router';
import NavbarComponent from './Navbar';

const Body = () => {
    const router = useRouter();

    return (
        <div className="p-20 flex justify-center items-center">
            {router.query.type === "network" && <NetworksPage />}
            {router.query.type === "balances" && <WalletPage />}
            {router.query.type === "transfers" && <TransactionsPage />}
        </div>
    );
};
export default Body;