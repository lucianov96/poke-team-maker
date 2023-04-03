export type Pokemon = {
    id: number,
    name: string,
    abilities: string[],
    types: string[],
    stats: Stats,
}

type Stats = {
    ps: number,
    attack: number,
    defense: number,
    sp_attack: number,
    sp_defense: number,
    speed: number,
}