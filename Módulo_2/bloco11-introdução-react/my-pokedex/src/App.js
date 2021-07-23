import './App.css';
import pokemons from './data';
import Poke from './components/arquivo1';

function App() {
  return (
  <div className="pokeCard">
    <Poke infos={pokemons}/>
  </div>
  );
}

export default App;
