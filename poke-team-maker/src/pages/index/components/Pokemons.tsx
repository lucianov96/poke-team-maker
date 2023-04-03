import React, {FC, useState} from 'react';
import { Grid } from '@mui/material';
import { Pokemon } from './Pokemon';
import { MainPokemon } from '../../services/models/MainPokemon';

type Props = {
    list: MainPokemon[],
    setIdPokemon: (idPokemon: number) => void;
    setPage: (idPage: number) => void;
}

export const Pokemons: FC<Props> = ({setIdPokemon, setPage, list}) => {

    return (
        <>
            <Grid container>
                {list.map((pokemon: { id: number; name: string; }) => {
                    return <Pokemon id={pokemon.id} name={pokemon.name} setIdPokemon={setIdPokemon} setPage={setPage}></Pokemon>
                })}
            </Grid>
        </>
    )
}