import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokemonIndex } from './pages/index/components/PokemonIndex';
import { PokemonStatsIndex } from './pages/pokemon-stats/components/PokemonStatsIndex';
import { block } from './styles/styles';


function App() {

  const [page, setPage] = React.useState(1);

  return (
    <div className="App">
      <NavBar setPage={setPage}/>
        <div style={block}>
          {page == 1 && <PokemonIndex/>}
          {page == 2 && <PokemonStatsIndex/>}   
        </div>
    </div>
  );
}

export default App;
