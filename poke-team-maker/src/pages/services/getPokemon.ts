import { pokemonApi } from "../api/pokemon";
import { Pokemon } from "./models/Pokemon";

export const getPokemon = async (id: number ) => {
    return pokemonApi.get<Pokemon>(`/pokemon/${id}`)
}