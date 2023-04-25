import { pokemonApi } from "../api/pokemon";
import { MainPokemon } from "./models/MainPokemon";

export type PokemonRequest = {
    name: string | null,
    type1: string | null,
    type2: string | null,
    ability1: string | null,
    ability2: string | null,
    ps: string | null,
    psValue: string | null,
    attack: string | null,
    attackValue: string | null,
    defense: string | null,
    defenseValue: string | null,
    spAttack: string | null,
    spAttackValue: string | null,
    spDefense: string | null,
    spDefenseValue: string | null,
    speed: string | null,
    speedValue: string | null
}

export const getPokemons = async (request: PokemonRequest ) => {
    return pokemonApi.get<MainPokemon[]>(`/pokemon?${buildParams(request)}`)
}

const buildParams = (params: PokemonRequest) => {
    const urlParams = new URLSearchParams();
    if (params.name) urlParams.append("name", params.name);
    if (params.type1) urlParams.append("type1", params.type1);
    if (params.type2) urlParams.append("type2", params.type2);
    if (params.ability1) urlParams.append("ability1", params.ability1);
    if (params.ability2) urlParams.append("ability2", params.ability2);
    if (params.ps) urlParams.append("ps", params.ps);
    if (params.psValue) urlParams.append("psValue", params.psValue);
    if (params.attack) urlParams.append("attack", params.attack);
    if (params.attackValue) urlParams.append("attackValue", params.attackValue);
    if (params.defense) urlParams.append("defense", params.defense);
    if (params.defenseValue) urlParams.append("defenseValue", params.defenseValue);
    if (params.spAttack) urlParams.append("spAttack", params.spAttack);
    if (params.spAttackValue) urlParams.append("spAttackValue", params.spAttackValue);
    if (params.spDefense) urlParams.append("spDefense", params.spDefense);
    if (params.spDefenseValue) urlParams.append("spDefenseValue", params.spDefenseValue);
    if (params.speed) urlParams.append("speed", params.speed);
    if (params.speedValue) urlParams.append("speedValue", params.speedValue);
    return urlParams;
}