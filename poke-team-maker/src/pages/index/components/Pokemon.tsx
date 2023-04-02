import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import {pokemonImage, pointerImage} from "../../../styles/styles"

type Props = {
    id: number;
    name: string;
  };
  

export const Pokemon: FC<Props> = ({id, name}) => {

    return (
        <>
            <Grid item md={4} sm={6} xs={12} sx={pokemonImage}>
                <img style={pointerImage} src={`pokemon/${id}.png`}/>
                <div>{name}</div>
            </Grid>
        </>
    )
}