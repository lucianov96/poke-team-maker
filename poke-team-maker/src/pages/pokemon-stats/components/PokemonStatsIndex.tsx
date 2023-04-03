import React, {FC, useState} from 'react';
import { Stat } from './Stat';
import { Grid, Typography } from '@mui/material';
import { effectiveTitle } from '../styles/styles';
import { Separator } from '../../../components/Separator';
import { h1, button } from '../../../styles/styles';
import { TypePicture } from '../../../components/TypePicture';
import { Collapse, Button } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { Movements } from './Movements';
import { CatchWays } from './CatchWays';
import { Pokemon } from '../../services/models/Pokemon';

type Props = {
    pokemon: Pokemon;
}

export const PokemonStatsIndex: FC<Props> = ({pokemon}) => {

    const movements = [
        { name: "Sword dance", type: "normal", movementType: "status", points: "80", accuracy: "100", priority: "0"},
        { name: "Flamethrower", type: "fire", movementType: "special", points: "100", accuracy: "80", priority: "1"},
        { name: "Lighting bolt", type: "electric", movementType: "special", points: "80", accuracy: "100", priority: "0"},
        { name: "Surf", type: "water", movementType: "special", points: "80", accuracy: "100", priority: "0"},
        { name: "Close combat", type: "fighting", movementType: "physical", points: "80", accuracy: "100", priority: "0"},
        { name: "Ice punch", type: "ice", movementType: "physical", points: "80", accuracy: "100", priority: "0"}
    ]

    const catchWays = [
        { pokemonVersion: "Gold", area: "Route 1", way: "walk"},
        { pokemonVersion: "Blue", area: "Route 1", way: "walk"},
        { pokemonVersion: "Rubi", area: "Route 1", way: "gift"}
    ]

    const [movementsOpen, setMovementsOpen] = useState(false);

    const handleMovementsOpen = () => {
        if(movementsOpen) { setMovementsOpen(false); }
        else setMovementsOpen(true);
    };

    const [catchWaysOpen, setCatchWaysOpen] = useState(false);

    const handleCatchWaysOpen = () => {
        if(catchWaysOpen) { setCatchWaysOpen(false); }
        else setCatchWaysOpen(true);
    };

    return (
        <>
            <Typography variant="h1" sx={h1}>{pokemon.name}'s settings</Typography>
            <Grid container>
                <Grid item xs={12} md={1.5} style={{textAlign: "center"}}>
                    <div>
                        <img src={`pokemon/${pokemon.id}.png`}/>
                    </div>
                    <TypePicture name={pokemon.types[0]}/>
                    {pokemon.types.length > 1 && <TypePicture name={pokemon.types[1]}/>}
                    <div style={{padding: "4px 16px 16px 16px"}}>
                        <Button sx={button}>
                            Add to team
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={10.5}>
                    <Stat name={"PS:"} value={pokemon.stats.ps}/>
                    <Stat name={"Attack:"} value={pokemon.stats.attack}/>
                    <Stat name={"Defense:"} value={pokemon.stats.defense}/>
                    <Stat name={"Sp. Attack:"} value={pokemon.stats.sp_attack}/>
                    <Stat name={"Sp. Defense:"} value={pokemon.stats.sp_defense}/>
                    <Stat name={"Speed:"} value={pokemon.stats.speed}/>
                </Grid>
            </Grid>
            <Separator/>
            <Grid container>
                <Grid item xs={12} md sx={effectiveTitle}>
                    <div style={{padding: "16px"}}>Inmune</div>
                    <TypePicture name={"grass"}/>
                    <TypePicture name={"electric"}/>
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    <div style={{padding: "16px"}}>Hard weakness</div>
                    <TypePicture name={"fighting"}/>
                    <TypePicture name={"dark"}/>
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    <div style={{padding: "16px"}}>Weakness</div>
                    <TypePicture name={"water"}/>
                    <TypePicture name={"psychic"}/>
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    <div style={{padding: "16px"}}>Hard resistance</div>
                    <TypePicture name={"ice"}/>
                    <TypePicture name={"fire"}/>
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    <div style={{padding: "16px"}}>Resistance</div>
                    <TypePicture name={"ghost"}/>
                    <TypePicture name={"fairy"}/>
                </Grid>
            </Grid>
            <Separator/>
            <CollapsableSection text={"Movements"} open={movementsOpen} onClick={handleMovementsOpen}/>
                <Collapse in={movementsOpen}>
                    <Movements rows={movements}/>
                </Collapse>
            <CollapsableSection text={"Catch ways"} open={catchWaysOpen} onClick={handleCatchWaysOpen}/>
                <Collapse in={catchWaysOpen}>
                    <CatchWays rows={catchWays}/>
                </Collapse>
        </>
    )
}