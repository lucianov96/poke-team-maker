import React, {useState} from 'react';
import { Filters } from './Filters';
import { Pokemons } from './Pokemons';
import { Collapse, Typography } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { h1 } from '../../../styles/styles';


export const PokemonIndex = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if(open) { 
            setOpen(false);
        }
        else setOpen(true);
    };

    const pokemonList = []

    return (
        <>
            <h1 style={h1}>Pokemon finder</h1>
            <CollapsableSection text={"Filters"} open={open} onClick={handleOpen}/>
            <Collapse in={open} out={open}>
                <Filters/>
            </Collapse>
            <Pokemons pokemonList={pokemonList}/>
        </>
    )
}