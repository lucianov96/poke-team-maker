import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: "localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }
})