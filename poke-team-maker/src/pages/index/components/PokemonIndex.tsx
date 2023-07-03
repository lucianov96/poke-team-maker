import React, {FC, useEffect, useState} from 'react';
import { Filters } from './Filters';
import { Pokemons } from './Pokemons';
import { Collapse, Typography } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { h1 } from '../../../styles/styles';
import { getPokemons } from '../../services/getPokemons';
import { MainPokemon } from '../../services/models/MainPokemon';
import { PokemonFilter } from '../models/PokemonFilter';

type Props = {
    setIdPokemon: (idPokemon: number) => void;
    setPage: (idPage: number) => void;
};

export const PokemonIndex: FC<Props> = ({setIdPokemon, setPage}) => {

    const [buttonPressed, setButtonPressed] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<MainPokemon[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [pokemonFilter, setPokemonFilter] = useState<PokemonFilter>({
            name: "",
            type1: "",
            type2: "",
            ability1: "",
            ability2: "",
            ps: "",
            psValue: "",
            attack: "",
            attackValue: "",
            defense: "",
            defenseValue: "",
            spAttack: "",
            spAttackValue: "",
            spDefense: "",
            spDefenseValue: "",
            speed: "",
            speedValue: ""
        }
    );


    const handleOpen = () => {
        if(open) { 
            setOpen(false);
        }
        else setOpen(true);
    };

    useEffect(() => {
        getPokemons({
            name: pokemonFilter.name,
            type1: pokemonFilter.type1,
            type2: pokemonFilter.type2,
            ability1: pokemonFilter.ability1,
            ability2: pokemonFilter.ability2,
            ps: pokemonFilter.ps,
            psValue: pokemonFilter.psValue,
            attack: pokemonFilter.attack,
            attackValue: pokemonFilter.attackValue,
            defense: pokemonFilter.defense,
            defenseValue: pokemonFilter.defenseValue,
            spAttack: pokemonFilter.spAttack,
            spAttackValue: pokemonFilter.spAttackValue,
            spDefense: pokemonFilter.spDefense,
            spDefenseValue: pokemonFilter.spDefenseValue,
            speed: pokemonFilter.speed,
            speedValue: pokemonFilter.speedValue
        })
          .then(response => {
            setPokemons(response.data);
            setError(null);
          })
          .catch(error => {
            setError(error.response.data.message);
          });
      }, [buttonPressed]);

    return (
        <>
            <Typography variant="h1" sx={h1}>Pokemon finder</Typography>
            <CollapsableSection text={"Filters"} open={open} onClick={handleOpen}/>
            <Collapse in={open}>
                <Filters pokemonFilter={pokemonFilter} setPokemonFilter={setPokemonFilter} buttonPressed={buttonPressed} setButtonPressed={setButtonPressed} error={error}/>
            </Collapse>
            <Pokemons setIdPokemon={setIdPokemon} setPage={setPage} list={pokemons}/>
        </>
    )
}