import React, {useState} from 'react';
import { Stat } from './Stat';
import { Grid } from '@mui/material';
import { CollapsableSection } from '../../../components/CollapsableSection';
import { effectiveTitle } from '../styles/styles';
import { Separator } from '../../../components/Separator';
import { h1 } from '../../../styles/styles';

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
                        Lucario
                    </div>
                    <div>
                        Fighting
                    </div>
                    <div>
                        Steel
                    </div>
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