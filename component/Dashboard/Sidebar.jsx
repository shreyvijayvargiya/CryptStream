import React from 'react';
import UserProfile from './UserProfile';
import { useRouter } from 'next/router';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';
import { Divider, Button, makeStyles } from '@material-ui/core';


const Sidebar = () => {

    const styles = useStyles();
    const router = useRouter();

    return (
        <div style={{ position: 'relative' }}>
            <p className="font-bold text-indigo-800 p-4 underline">
                <a href="/">CryptStream</a>
            </p>
            <Divider />
            <div className="my-10">
                <Button onClick={() => router.push("/dashboard?type=transfers")}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    startIcon={<AiOutlineTransaction size={18} />}
                    style={{ textTransform: 'none', marginTop: 10, marginBottom: 10, border: 'none' }}
                >
                    Transactions
                </Button>
                <br />
                <Button onClick={() => router.push("/dashboard?type=balances")}
                    variant="outlined"
                    color="success"
                    fullWidth
                    startIcon={<MdAccountBalance size={18} />}
                    style={{ textTransform: 'none', marginTop: 10, marginBottom: 10, border: 'none' }}
                >
                    Balances
                </Button>
                <br />
                <Button onClick={() => router.push("/dashboard?type=network")}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<FaNetworkWired size={18} />}
                    style={{ textTransform: 'none', marginTop: 10, marginBottom: 10, border: 'none' }}
                >
                    Network
                </Button>
            </div>
            <div className={styles.profile}>
                <Divider />
                <UserProfile />
                <Divider />
            </div>
        </div>
    );
};
export default Sidebar;

const useStyles = makeStyles(theme => ({
    profile: {
        position: 'fixed',
        bottom: 0,
    }
}))