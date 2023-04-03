import React, {FC, useEffect, useState} from 'react';
import { Filters } from './Filters';
import { Pokemons } from './Pokemons';
import { Collapse, Typography } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { h1 } from '../../../styles/styles';
import { getPokemons } from '../../services/getPokemons';
import { MainPokemon } from '../../services/models/MainPokemon';

type Props = {
    setIdPokemon: (idPokemon: number) => void;
    setPage: (idPage: number) => void;
};

export const PokemonIndex: FC<Props> = ({setIdPokemon, setPage}) => {

    const [open, setOpen] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<MainPokemon[]>([]);


    const handleOpen = () => {
        if(open) { 
            setOpen(false);
        }
        else setOpen(true);
    };

    useEffect(() => {
        getPokemons({
            type1: null,
            type2: null,
            ability1: null,
            ability2: null,
            ps: null,
            psValue: null,
            attack: null,
            attackValue: null,
            defense: null,
            defenseValue: null,
            spAttack: null,
            spAttackValue: null,
            spDefense: null,
            spDefenseValue: null,
            speed: null,
            speedValue: null
        })
          .then(response => {
            setPokemons(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <>
            <Typography variant="h1" sx={h1}>Pokemon finder</Typography>
            <CollapsableSection text={"Filters"} open={open} onClick={handleOpen}/>
            <Collapse in={open}>
                <Filters/>
            </Collapse>
            <Pokemons setIdPokemon={setIdPokemon} setPage={setPage} list={pokemons}/>
        </>
    )
}