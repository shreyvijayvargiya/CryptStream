import React, { useEffect, useState } from 'react';
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis';

export const getTransactions = async() => {
    const { account } = useMoralisWeb3Api();
    const { chain } = useChain();
    const { account: walletAddress } = useMoralis();
    const [transaction, setTransaction] = useState(null);

    const fetchTransactions = async() => {
        await account.getTransactions({ chain: chain.chainId, address: walletAddress }).then(result => {
            result.result
        })
        .catch(error => console.log(error, 'error in fetching transactions'))
    };

    useEffect(async() => {
        fetchTransactions().then(data => setTransaction(data))
    }, [ chain.chainId, walletAddress  ])

    return transaction;
}