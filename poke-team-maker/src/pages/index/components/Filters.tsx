import React, {FC, useState} from 'react';
import { Grid, FormControl, TextField, Button, InputLabel, MenuItem, Select } from '@mui/material';
import {button, secondaryButton, block} from "../../../styles/styles"
import { TypePicture } from '../../../components/TypePicture';
import { PokemonFilter } from '../models/PokemonFilter';

type Props = {
    pokemonFilter: PokemonFilter;
    setPokemonFilter: (pokemonFilter: PokemonFilter) => void;
    buttonPressed: boolean; 
    setButtonPressed: (buttonPressed: boolean) => void;
}

export const Filters: FC<Props> = ({pokemonFilter, setPokemonFilter, buttonPressed, setButtonPressed}) => {

    const handleChangeName = (event: any) => {
        setPokemonFilter({...pokemonFilter, name: event.target.value});
    };

    const handleChangeAbility1 = (event: any) => {
        setPokemonFilter({...pokemonFilter, ability1: event.target.value});
    };

    const handleChangeAbility2 = (event: any) => {
        setPokemonFilter({...pokemonFilter, ability2: event.target.value});
    };
    
    const handleChangeType = (event: any) => {
        setPokemonFilter({...pokemonFilter, type1: event.target.value});
    };

    const handleChangeType2 = (event: any) => {
        setPokemonFilter({...pokemonFilter, type2: event.target.value});
    };

    const handleChangePsCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, ps: event.target.value});
    };

    const handleChangeAttackCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, attack: event.target.value});
    };

    const handleChangeDefenseCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, defense: event.target.value});
    };

    const handleChangeSpAttackCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, spAttack: event.target.value});
    };

    const handleChangeSpDefenseCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, spDefense: event.target.value});
    };

    const handleChangeSpeedCondition = (event: any) => {
        setPokemonFilter({...pokemonFilter, speed: event.target.value});
    };

    const handleChangePsValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, psValue: event.target.value});
    };
    
    const handleChangeAttackValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, attackValue: event.target.value});
    };
    
    const handleChangeDefenseValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, defenseValue: event.target.value});
    };
    
    const handleChangeSpAttackValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, spAttackValue: event.target.value});
    };
    
    const handleChangeSpDefenseValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, spDefenseValue: event.target.value});
    };
    
    const handleChangeSpeedValue = (event: any) => {
        setPokemonFilter({...pokemonFilter, speedValue: event.target.value});
    };

    const search = () => {
        if(buttonPressed) setButtonPressed(false); 
        else setButtonPressed(true); 
    }

    const textFieldList = [
        {name: "Name", onChange: handleChangeName},
        {name: "Ability 1", onChange: handleChangeAbility1},
        {name: "Ability 2", onChange: handleChangeAbility2}, 
    ]

    const selectTypeList = [
        {label: "Type 1", onChange: handleChangeType, value: pokemonFilter.type1 },
        {label: "Type 2", onChange: handleChangeType2, value: pokemonFilter.type2 }
    ]

    const selectConditionList = [
        {labelSelect: "PS condition", labelTextField: "PS value", onChangeCondition: handleChangePsCondition, onChangeValue: handleChangePsValue, condition: pokemonFilter.ps},
        {labelSelect: "Attack condition", labelTextField: "Attack value", onChangeCondition: handleChangeAttackCondition, onChangeValue: handleChangeAttackValue, condition: pokemonFilter.attack},
        {labelSelect: "Defense condition", labelTextField: "Defense value", onChangeCondition: handleChangeDefenseCondition, onChangeValue: handleChangeDefenseValue, condition: pokemonFilter.defense},
        {labelSelect: "Sp attack condition", labelTextField: "Sp attack value", onChangeCondition: handleChangeSpAttackCondition, onChangeValue: handleChangeSpAttackValue, condition: pokemonFilter.spAttack},
        {labelSelect: "Sp defense condition", labelTextField: "Sp defense value", onChangeCondition: handleChangeSpDefenseCondition, onChangeValue: handleChangeSpDefenseValue, condition: pokemonFilter.spDefense},
        {labelSelect: "Speed condition", labelTextField: "Speed value", onChangeCondition: handleChangeSpeedCondition, onChangeValue: handleChangeSpeedValue, condition: pokemonFilter.speed}
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
        {value: "LESS_THAN", text: "Less than"},
        {value: "GREATER_THAN", text: "Greater than"},
        {value: "EQUAL", text: "Equal"},
    ]

    return (
        <div style={block}>
            <Grid container spacing={2}>
                {textFieldList.map((textField) => {
                    return <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField  type="text" label={textField.name} onChange={textField.onChange} />
                        </FormControl>
                    </Grid>
                })}
                {selectTypeList.map((selectType) => {
                    return <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>{selectType.label}</InputLabel>
                            <Select
                            
                            value={selectType.value}
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
                                
                                value={selectCondition.condition}
                                label={selectCondition.labelSelect}
                                onChange={selectCondition.onChangeCondition}
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
                                <TextField  type="number" label={selectCondition.labelTextField} onChange={selectCondition.onChangeValue} />
                            </FormControl>
                        </Grid>
                    </>
                })}
                <Grid item xs={12}>
                    <Button sx={button} onClick={() => search()}>
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