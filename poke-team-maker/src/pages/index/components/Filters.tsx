import React, {useState} from 'react';
import { Grid, FormControl, TextField, Button, InputLabel, MenuItem, Select } from '@mui/material';
import {button, secondaryButton, block} from "../../../styles/styles"
import { TypePicture } from '../../../components/TypePicture';

export const Filters = () => {

    const [type, setType] = useState('');
    const [type2, setType2] = useState('');
    const [psCondition, setPsCondition] = useState('');
    const [attackCondition, setAttackCondition] = useState('');
    const [defenseCondition, setDefenseCondition] = useState('');
    const [spAttackCondition, setSpAttackCondition] = useState('');
    const [spDefenseCondition, setSDefenseCondition] = useState('');
    const [speedCondition, setSpeedCondition] = useState('');

    const handleChangeType = (event: any) => {
        setType(event.target.value);
    };

    const handleChangeType2 = (event: any) => {
        setType2(event.target.value);
    };

    const handleChangePsCondition = (event: any) => {
        setPsCondition(event.target.value);
    };

    const handleChangeAttackCondition = (event: any) => {
        setAttackCondition(event.target.value);
    };

    const handleChangeDefenseCondition = (event: any) => {
        setDefenseCondition(event.target.value);
    };

    const handleChangeSpAttackCondition = (event: any) => {
        setSpAttackCondition(event.target.value);
    };

    const handleChangeSpDefenseCondition = (event: any) => {
        setSDefenseCondition(event.target.value);
    };

    const handleChangeSpeedCondition = (event: any) => {
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
        {value: "bug"},
        {value: "dark"},
        {value: "dragon"},
        {value: "electric"},
        {value: "fairy"},
        {value: "fighting"},
        {value: "fire"},
        {value: "flying"},
        {value: "ghost"},
        {value: "grass"},
        {value: "ground"},
        {value: "ice"},
        {value: "normal"},
        {value: "poison"},
        {value: "psychic"},
        {value: "rock"},
        {value: "steel"},
        {value: "water"},
    ]

    const conditionList = [
        {value: "less_than", text: "Less than"},
        {value: "greater_than", text: "Greater than"},
        {value: "equal", text: "Equal"},
    ]

    return (
        <div style={block}>
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
                                    return <MenuItem value={type.value}>
                                        <TypePicture name={type.value}/>
                                    </MenuItem>
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
                    <Button sx={secondaryButton}>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}