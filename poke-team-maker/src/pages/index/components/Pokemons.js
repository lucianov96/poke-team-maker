import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import { Pokemon } from './Pokemon';

export const Pokemons = () => {

    const pokemonList = [
        {id: 1, name: "Bulbassaur"},
        {id: 1, name: "Bulbassaur"},
        {id: 1, name: "Bulbassaur"},
        {id: 1, name: "Bulbassaur"},
        {id: 1, name: "Bulbassaur"},
        {id: 1, name: "Bulbassaur"},
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