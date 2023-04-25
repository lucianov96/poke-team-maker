import { pokemonApi } from "../api/pokemon";
import { Catch } from "./models/Catch";
import { Movement } from "./models/Movement";
import { Pokemon } from "./models/Pokemon";

export const getPokemon = async (id: number ) => {
    return pokemonApi.get<Pokemon>(`/pokemon/${id}`)
}

export const getPokemonMovements = async (id: number ) => {
    return pokemonApi.get<Movement[]>(`/pokemon/${id}/movements`)
}

export const getPokemonCatch = async (id: number ) => {
    return pokemonApi.get<Catch[]>(`/pokemon/${id}/catch`)
}