import React, { useEffect, useState } from 'react';
import { useMoralis, useChain } from 'react-moralis';
import { getNetworkName } from '../../utils/hooks/getNetworkName';
import { switchNetwork } from '../../utils/hooks/switchNetwork';
import { Select, MenuItem, Snackbar, Card, Divider } from '@material-ui/core';
import { BsRecordCircle } from 'react-icons/bs';

const NetworksPage = () => {

    const { user, web3, enableWeb3, isWeb3Enabled } = useMoralis();
    const { switchNetwork, chain } = useChain();
    const [networkName, setNetworkName] = useState(chain.networkId);
    const [chainNetwork, setChainNetwork] = React.useState(1);
    const [snackbar, setSnackbar] = useState({ open: false, message: ''});
    const networks = {
        1: "Ethereum Mainnet",
        4: "Ethereum Rinkeby",
        97: "Binance Smart Chain Testnet",
        80001: "Polygon Mumbai Testnet",
    };

    // check is web is enabled or not
    if(!isWeb3Enabled){
        enableWeb3(1)
    }

    // change the network bu calling the switchNetwork method provided by useChain hook
    const handleChange = (event) => {
        setChainNetwork(event.target.value);
        switchNetwork(event.target.value);
    };
    
    useEffect(() => {
        setSnackbar({ open: true, message: `Network changed to ${networks[networkName]}`});
    }, [ networkName ])

    // provide the provider to the web3 to enable the swithcing between the networks
    const web3Provider = web3?.setProvider(
        web3?.givenProvider || 'http://localhost:3000'
    );

    // getting the active network chainId and processing the function to get the
    // web3.eth.net.getId().then(data => {
    //     const name = getNetworkName(data);
    //    setNetworkName(name);
    // }).catch(e => console.log(e, 'e'));

   

    return (
        <div className="p-10">
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ message: "", open: false })}
                message={snackbar.message}
                style={{ color: 'white' }}
                color="white"
            />
            <div className="p-8" >
                <h2>Networks</h2>
                <Card variant="outlined">
                    <p>Current Network</p>
                    <Divider />
                    <p className="text-xs text-green-600 p-4 flex gap-2 items-center"><BsRecordCircle size={18} />{networks[networkName]}</p>

                </Card>
                <br />
                <Card variant="outlined">
                    <p>Select the network</p>
                    <Divider />
                    <Select
                        labelId="select-active-network-id"
                        id="select-active-network"
                        variant="outlined"
                        value={chainNetwork}
                        label="Network"
                        style={{ margin: 20 }}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Ethereum Mainnet</MenuItem>
                        <MenuItem value={4}>Ethereum Rinkeby</MenuItem>
                        <MenuItem value={97}>Binance Smart Chain Testnet</MenuItem>
                        <MenuItem value={80001}>Polygon Mumbai Testnet</MenuItem>
                    </Select>
                </Card>
            </div>
        </div>
    );
};
export default NetworksPage;
