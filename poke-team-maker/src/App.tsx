import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokemonIndex } from './pages/index/components/PokemonIndex';
import { PokemonStatsIndex } from './pages/pokemon-stats/components/PokemonStatsIndex';
import { getPokemon, getPokemonCatch, getPokemonMovements } from './pages/services/getPokemon';
import { Catch } from './pages/services/models/Catch';
import { Movement } from './pages/services/models/Movement';
import { Pokemon } from './pages/services/models/Pokemon';
import { block } from './styles/styles';


function App() {

  const [page, setPage] = React.useState(1);
  const [idPokemon, setIdPokemon] = React.useState<number>(1)
  const [pokemon, setPokemon] = React.useState<Pokemon>({
    id: 1,
    name: "",
    abilities: ["", ""],
    types: ["", ""],
    stats: {
      ps: 0,
      attack: 0,
      defense: 0,
      sp_attack: 0,
      sp_defense: 0,
      speed: 0,
    },
  })
  const [movements, setMovements] = React.useState<Movement[]>([])
  const [catchWays, setCatchWays] = React.useState<Catch[]>([])


  useEffect(() => {
    getPokemon(idPokemon)
      .then(response => {
        setPokemon(response.data);
        getPokemonMovements(idPokemon)
          .then(response => {
            setMovements(response.data)
          })
        getPokemonCatch(idPokemon)
          .then(response => {
            setCatchWays(response.data)
        })

      })
      .catch(error => {
        console.log(error);
      });
  }, [idPokemon]);


  return (
    <div className="App">
      <NavBar setPage={setPage}/>
        <div style={block}>
          {page == 1 && <PokemonIndex setIdPokemon={setIdPokemon} setPage={setPage}/>}
          {page == 2 && <PokemonStatsIndex pokemon={pokemon} movements={movements} catchWays={catchWays}/>}   
        </div>
    </div>
  );
}

export default App;
