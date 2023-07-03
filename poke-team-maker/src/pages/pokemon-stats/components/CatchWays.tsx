import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableHeader, tableHeaderCell, tableRowCell } from '../../../styles/styles';
import { NoResultsMessage } from '../../../components/NoResultsMessage';
import { Catch } from '../../services/models/Catch';

type Props = {
    rows: Catch[];
}

export const CatchWays: FC<Props> = ({rows}) => {
    return (
        <>
            { rows.length == 0 
                ? <NoResultsMessage message={"No catch ways found"}/> 
            : <TableContainer>
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
                        <TableRow>
                        <TableCell sx={tableRowCell}>
                            {row.pokemon_version}
                        </TableCell>
                        <TableCell sx={tableRowCell}>{row.location}</TableCell>
                        <TableCell sx={tableRowCell}>{row.way}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </>
    )
}