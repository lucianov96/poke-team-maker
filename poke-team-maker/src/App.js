import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokemonIndex } from './pages/index/components/PokemonIndex';
import { PokemonStatsIndex } from './pages/pokemon-stats/components/PokemonStatsIndex';
import { block } from './styles/styles';


function App() {
  return (
    <div className="App">
      <NavBar/>
        <div style={block}>
          {/*<PokemonIndex/>*/}
          {/*<PokemonStatsIndex/>*/}
          <PokemonIndex/>
        </div>
    </div>
  );
}

export default App;
