import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import { Pokemon } from './Pokemon';
import { Pokemon as PokemonModel} from '../../services/models/Pokemon';


type Props = {
    list: PokemonModel[]
}

export const Pokemons: FC<Props> = ({list}) => {

    return (
        <>
            <Grid container>
                {list.map((pokemon: { id: number; name: string; }) => {
                    return <Pokemon id={pokemon.id} name={pokemon.name}></Pokemon>
                })}
            </Grid>
        </>
    )
}