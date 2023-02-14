import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TypePicture } from '../../../components/TypePicture';
import { MovementTypePicture } from '../../../components/MovementTypePicture copy';
import { tableHeader, tableHeaderCell, tableRow } from '../../../styles/styles';



export const Movements = ({rows}) => {
    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead sx={tableHeader}>
                <TableRow>
                    <TableCell sx={tableHeaderCell}>Name</TableCell>
                    <TableCell sx={tableHeaderCell}>Type</TableCell>
                    <TableCell sx={tableHeaderCell}>Movement type</TableCell>
                    <TableCell sx={tableHeaderCell}>Points</TableCell>
                    <TableCell sx={tableHeaderCell}>Accuracy</TableCell>
                    <TableCell sx={tableHeaderCell}>Priority</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow sx={tableRow}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell><TypePicture name={row.type}/></TableCell>
                    <TableCell><MovementTypePicture name={row.movementType}/></TableCell>
                    <TableCell>{row.points}</TableCell>
                    <TableCell>{row.accuracy}</TableCell>
                    <TableCell>{row.priority}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    )
}