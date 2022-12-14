import React, {useState} from 'react';
import { progressBar, progressBarContainer, statValue } from '../styles/styles';
import { Grid } from '@mui/material';

type Props = {
    name: string;
    value: number;
}

export const Stat = ({name, value}) => {

    return (
        <>
            <Grid container sx={progressBarContainer}>
                <Grid item xs={1}>
                    {name}
                </Grid>
                <Grid item xs={1} sx={statValue}>
                    {value}
                </Grid>
                <Grid item xs={10}>
                    <div style={progressBar(value)}/>
                </Grid>
            </Grid>
        </>
    )
}