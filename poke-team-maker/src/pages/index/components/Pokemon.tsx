import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import {pokemonImage, pointerImage} from "../../../styles/styles"

type Props = {
    id: number;
    name: string;
    setIdPokemon: (idPokemon: number) => void;
    setPage: (idPage: number) => void;
  };
  

export const Pokemon: FC<Props> = ({id, name, setIdPokemon, setPage}) => {

    const setPokemon = (idPokemon: number) => {
        setIdPokemon(idPokemon);
        setPage(2)
    }

    return (
        <>
            <Grid item md={4} sm={6} xs={12} sx={pokemonImage}>
                <img style={pointerImage} src={`pokemon/${id}.png`} onClick={() => setPokemon(id)}/>
                <div>{name}</div>
            </Grid>
        </>
    )
}