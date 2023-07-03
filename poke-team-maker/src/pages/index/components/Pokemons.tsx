import React, {FC} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Pokemon } from './Pokemon';
import { MainPokemon } from '../../services/models/MainPokemon';
import { NoResultsMessage } from '../../../components/NoResultsMessage';

type Props = {
    list: MainPokemon[],
    setIdPokemon: (idPokemon: number) => void;
    setPage: (idPage: number) => void;
}

export const Pokemons: FC<Props> = ({setIdPokemon, setPage, list}) => {

    return (
        <>
            <Grid container>
                {list.length == 0 
                ? <NoResultsMessage message={"No results found"}/>
                : list.map((pokemon: { id: number; name: string; }) => {
                    return <Pokemon id={pokemon.id} name={pokemon.name} setIdPokemon={setIdPokemon} setPage={setPage}></Pokemon>
                })}
            </Grid>
        </>
    )
}