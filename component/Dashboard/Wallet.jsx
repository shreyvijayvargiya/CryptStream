import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { getNativeBalances } from '../../utils/hooks/getNativeBalances';
import { Card, Divider } from '@material-ui/core';
import { getTokenBalances  } from '../../utils/hooks/getTokenBalances';
import { getTokenTransfers } from '../../utils/hooks/getTokenTranfers';
import { getNfts } from '../../utils/hooks/getNft';
import { getNFTTransfers } from '../../utils/hooks/getNftTransfers';

const WalletPage = () => {

    const [data, setData] = useState({
        balance: '',
        tokenBalances: ''
    });
    const tokenTransfers = getTokenTransfers();
    const nativeBalance = getNativeBalances();
    const tokenBalances = getTokenBalances();
    const nftsTransfers = getNFTTransfers();
    const nfts = getNfts();

    // nativeBalance.then(data => setData(prevState => ({ ...prevState, balances: data }))).catch(error => console.log(error));
    // tokenBalances.then(data => setData(prevState => ({ ...prevState, tokenBalances: data }))).catch(error => console.log(error));


    return (
        <div>
            Wallet
            <Card variant="outlined">
                <p>Native Balance</p>
                <Divider />
                <p>{data.balance}</p>
            </Card>
            <Card variant="outlined">
                <p>Token Balances</p>
                <Divider />
                <p>{data.tokenBalances}</p>
            </Card>
        </div>
    );
};
export default WalletPage;
