import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Grid, FormControl, TextField, Button } from '@mui/material';
import {button} from "../../../styles/styles"

export const Filters = () => {

    const [type, setType] = React.useState('');
    const [type2, setType2] = React.useState('');
    const [psCondition, setPsCondition] = React.useState('');
    const [attackCondition, setAttackCondition] = React.useState('');
    const [defenseCondition, setDefenseCondition] = React.useState('');
    const [spAttackCondition, setSpAttackCondition] = React.useState('');
    const [spDefenseCondition, setSDefenseCondition] = React.useState('');
    const [speedCondition, setSpeedCondition] = React.useState('');

    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    const handleChangeType2 = (event: SelectChangeEvent) => {
        setType2(event.target.value);
    };

    const handleChangePsCondition = (event: SelectChangeEvent) => {
        setPsCondition(event.target.value);
    };

    const handleChangeAttackCondition = (event: SelectChangeEvent) => {
        setAttackCondition(event.target.value);
    };

    const handleChangeDefenseCondition = (event: SelectChangeEvent) => {
        setDefenseCondition(event.target.value);
    };

    const handleChangeSpAttackCondition = (event: SelectChangeEvent) => {
        setSpAttackCondition(event.target.value);
    };

    const handleChangeSpDefenseCondition = (event: SelectChangeEvent) => {
        setSDefenseCondition(event.target.value);
    };

    const handleChangeSpeedCondition = (event: SelectChangeEvent) => {
        setSpeedCondition(event.target.value);
    };

    const textFieldList = [
        "Name", "Ability 1", "Ability 2"
    ]

    const selectTypeList = [
        {label: "Type 1", onChange: handleChangeType, useState: type },
        {label: "Type 2", onChange: handleChangeType2, useState: type2 }
    ]

    const selectConditionList = [
        {labelSelect: "PS condition", labelTextField: "PS value", onChange: handleChangePsCondition, useState: psCondition },
        {labelSelect: "Attack condition", labelTextField: "Attack value", onChange: handleChangeAttackCondition, useState: attackCondition },
        {labelSelect: "Defense condition", labelTextField: "Defense value", onChange: handleChangeDefenseCondition, useState: defenseCondition },
        {labelSelect: "Sp attack condition", labelTextField: "Sp attack value", onChange: handleChangeSpAttackCondition, useState: spAttackCondition },
        {labelSelect: "Sp defense condition", labelTextField: "Sp defense value", onChange: handleChangeSpDefenseCondition, useState: spDefenseCondition },
        {labelSelect: "Speed condition", labelTextField: "Sp defense value", onChange: handleChangeSpeedCondition, useState: speedCondition }
    ]

    const typesList = [
        {value: "bug", text: "Bug"},
        {value: "dark", text: "Dark"},
        {value: "dragon", text: "Dragon"},
        {value: "electric", text: "Electric"},
        {value: "fairy", text: "Fairy"},
        {value: "fighting", text: "Fighting"},
        {value: "fire", text: "Fire"},
        {value: "flying", text: "Flying"},
        {value: "ghost", text: "Ghost"},
        {value: "grass", text: "Grass"},
        {value: "ground", text: "Ground"},
        {value: "ice", text: "Ice"},
        {value: "normal", text: "Normal"},
        {value: "poison", text: "Poison"},
        {value: "psychic", text: "Psychic"},
        {value: "rock", text: "Rock"},
        {value: "steel", text: "Steel"},
        {value: "water", text: "Water"},
    ]

    const conditionList = [
        {value: "less_than", text: "Less than"},
        {value: "greater_than", text: "Greater than"},
        {value: "equal", text: "Equal"},
    ]

    return (
        <>
            <Grid container spacing={2}>
                {textFieldList.map((textField) => {
                    return <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField  type="text" label={textField}  />
                        </FormControl>
                    </Grid>
                })}
                {selectTypeList.map((selectType) => {
                    return <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>{selectType.label}</InputLabel>
                            <Select
                            
                            value={selectType.useState}
                            label={selectType.label}
                            onChange={selectType.onChange}
                            sx={{width: "100%"}}
                            >
                                {typesList.map((type) => {
                                    return <MenuItem value={type.value}>{type.text}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                })}
                {selectConditionList.map((selectCondition) => {
                    return <>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>{selectCondition.labelSelect}</InputLabel>
                                <Select
                                
                                value={selectCondition.useState}
                                label={selectCondition.labelSelect}
                                onChange={selectCondition.onChange}
                                sx={{width: "100%"}}
                                >
                                    {conditionList.map((condition) => {
                                        return <MenuItem value={condition.value}>{condition.text}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField  type="number" label={selectCondition.labelTextField}  />
                            </FormControl>
                        </Grid>
                    </>
                })}
                <Grid item xs={12}>
                    <Button sx={button}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}