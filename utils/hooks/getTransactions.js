import React, { useEffect, useState } from 'react';
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis';

export const getTransactions = async() => {
    const { account } = useMoralisWeb3Api();
    const { chain } = useChain();
    const { account: walletAddress } = useMoralis();
    const [transactions, setTransactions] = useState(null);

    useEffect(async() => {
        await account.getTransactions({ chain: chain.chainId, address: walletAddress }).then(result => {
            setTransactions(result.result);
        }).catch(error => console.log(error, 'error'));
    }, [ chain.chainId, walletAddress  ])

    return transactions
}