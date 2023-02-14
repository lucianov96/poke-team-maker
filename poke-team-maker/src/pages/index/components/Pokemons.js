import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import { Pokemon } from './Pokemon';

export const Pokemons = () => {

    const pokemonList = [
        {id: 1, name: "Bulbassaur"},
        {id: 2, name: "Bulbassaur"},
        {id: 6, name: "Bulbassaur"},
        {id: 28, name: "Bulbassaur"},
        {id: 180, name: "Bulbassaur"},
        {id: 381, name: "Bulbassaur"},
    ]

    return (
        <>
            <Grid container>
                {pokemonList.map((pokemon) => {
                    return <Pokemon id={pokemon.id} name={pokemon.name}></Pokemon>
                })}
            </Grid>
        </>
    )
}