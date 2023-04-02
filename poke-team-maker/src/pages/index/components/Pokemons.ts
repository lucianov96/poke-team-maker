import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import { Pokemon } from './Pokemon';

type Props = {
    list: PokemonRequest[]
}

export const Pokemons = (list) => {

    const pokemonList = list;

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