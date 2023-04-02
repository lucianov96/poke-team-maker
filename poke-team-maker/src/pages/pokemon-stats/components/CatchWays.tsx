import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableHeader, tableHeaderCell, tableRow } from '../../../styles/styles';

type Props = {
    rows: any;
}

export const CatchWays: FC<Props> = ({rows}) => {
    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead sx={tableHeader}>
                <TableRow>
                    <TableCell sx={tableHeaderCell}>Pokemon version</TableCell>
                    <TableCell sx={tableHeaderCell}>Area</TableCell>
                    <TableCell sx={tableHeaderCell}>Way</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row: any) => (
                    <TableRow sx={tableRow}>
                    <TableCell component="th" scope="row">
                        {row.pokemonVersion}
                    </TableCell>
                    <TableCell>{row.area}</TableCell>
                    <TableCell>{row.way}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    )
}