import React, {useState} from 'react';
import { Stat } from './Stat';
import { Grid } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { effectiveTitle } from '../styles/styles';
import { Separator } from '../../../components/Separator';
import { h1, h2 } from '../../../styles/styles';
import { TypePicture } from '../../../components/TypePicture';

export const PokemonStatsIndex = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if(open) { setOpen(false); }
        else setOpen(true);
    };

    return (
        <>
            <h1 style={h1}>Pokemon's settings</h1>
            <Grid container>
                <Grid item xs={1.5} style={{textAlign: "center"}}>
                    <div>
                        <img src="pokemon/448.png"/>
                    </div>
                    <div style={{fontSize: "1.2em"}}>
                        <h2 style={h2}>Lucario</h2>
                    </div>
                    <TypePicture name={"grass"}/>
                    <TypePicture name={"electric"}/>
                </Grid>
                <Grid item xs={10.5}>
                    <Stat name={"PS:"} value={200}/>
                    <Stat name={"Attack:"} value={180}/>
                    <Stat name={"Defense:"} value={160}/>
                    <Stat name={"Sp. Attack:"} value={140}/>
                    <Stat name={"Sp. Defense:"} value={120}/>
                    <Stat name={"Speed:"} value={100}/>
                </Grid>
            </Grid>
            <Separator/>
            <Grid container>
                <Grid item xs={12} md sx={effectiveTitle}>
                    Inmune
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    Hard weakness
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    Weakness
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    Hard resistance
                </Grid>
                <Grid item xs={12} md sx={effectiveTitle}>
                    Resistance
                </Grid>
            </Grid>
            <Separator/>
            <CollapsableSection text={"Movements"} open={open} onClick={handleOpen}/>
            <CollapsableSection text={"Catch ways"} open={open} onClick={handleOpen}/>
        </>
    )
}