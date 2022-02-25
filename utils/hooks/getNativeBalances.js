import { useState, useEffect } from "react"
import { useChain, useMoralis, useMoralisWeb3Api } from "react-moralis";

export const getNativeBalances = async() => {
    const [balances, setBalances] = useState();

    const { account } = useMoralisWeb3Api();
    const { account: walletAddress } = useMoralis();
    const { chain } = useChain();

    const fetchBalance = async() => {
        account.getNativeBalance({ chain: chain?.chainId, address: walletAddress }).then(result => {
            setBalances(result.balance);
        }).catch(error => {
            console.log(error, 'error')
        });
    };

    useEffect(() => {
        fetchBalance()
    }, [ chain.chainId, walletAddress ]);

    return balances;
}