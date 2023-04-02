import React, {useEffect, useState} from 'react';
import { Filters } from './Filters';
import { Pokemons } from './Pokemons';
import { Collapse, Typography } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { h1 } from '../../../styles/styles';
import { getPokemons } from '../../services/getPokemons';
import { Pokemon } from '../../services/models/Pokemon';

export const PokemonIndex = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


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
            <h1>Pokemon finder</h1>
            <CollapsableSection text={"Filters"} open={open} onClick={handleOpen}/>
            <Collapse in={open}>
                <Filters/>
            </Collapse>
            <Pokemons list={pokemons}/>
        </>
    )
}