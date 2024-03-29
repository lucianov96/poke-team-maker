import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TypePicture } from '../../../components/TypePicture';
import { MovementTypePicture } from '../../../components/MovementTypePicture';
import { tableHeader, tableHeaderCell, tableRowCell } from '../../../styles/styles';

type Props = {
    rows: any;
}

export const Movements: FC<Props> = ({rows}) => {
    return (
        <TableContainer sx={{marginBottom: "48px"}}>
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
                {rows.map((row: any) => (
                    <TableRow>
                    <TableCell sx={tableRowCell}>{row.name}</TableCell>
                    <TableCell sx={tableRowCell}><TypePicture name={row.type}/></TableCell>
                    <TableCell sx={tableRowCell}><MovementTypePicture name={row.movement_type}/></TableCell>
                    <TableCell sx={tableRowCell}>{row.points}</TableCell>
                    <TableCell sx={tableRowCell}>{row.accuracy}</TableCell>
                    <TableCell sx={tableRowCell}>{row.priority > 0 && row.priority}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    )
}