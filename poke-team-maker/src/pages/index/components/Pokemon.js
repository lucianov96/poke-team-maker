import React, {useState} from 'react';
import { Grid } from '@mui/material';
import {pokemonImage, pointerImage} from "../../../styles/styles"

type Props = {
    id: string;
    name: string;
  };
  

export const Pokemon = ({id, name}) => {

    return (
        <>
            <Grid item xs={4} sx={pokemonImage}>
                <img style={pointerImage} src={`pokemon/${id}.png`}/>
                <div>{name}</div>
            </Grid>
        </>
    )
}