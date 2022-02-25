import React, { useEffect, useState } from 'react';
import { useChain, useMoralis, useMoralisQuery, useMoralisWeb3Api, useMoralisWeb3ApiCall, useWeb3Transfer } from 'react-moralis';
import { getTransactions } from '../../utils/hooks/getTransactions';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState({
        loading: false,
        data: []
    });
    const transactionData = getTransactions();

    // useEffect(async() => {
    //     setTransactions({ loading: true, data: [] })
    //     const data = await transactionData;
    //     setTransactions({ data, loading: false } );
    // }, [  ]);

    return (
        <div>
            Transfers 
            {transactions.loading ?<p>Fetching transactions...</p>:<Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>To Address</TableCell>
                    <TableCell align="left">From Address</TableCell>
                    <TableCell align="left">Hash</TableCell>
                    <TableCell align="left">Value</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {transactions?.data?.map((row) => (
                    <TableRow
                    key={row.block_hash}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        <p className="text-xs ellipsis">
                            {row.to_address}
                        </p>
                    </TableCell>
                    <TableCell align="left">
                        <p className="text-xs ellipsis">{row.from_address}</p>
                    </TableCell>
                    <TableCell align="left">
                        <p className="text-xs ellipsis">
                            {row.block_hash}
                        </p>
                    </TableCell>
                    <TableCell align="left">
                        <p className="text-xs ellipsis">
                            {row.value}
                        </p>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>}
        </div>
    );
};
export default TransactionsPage;
