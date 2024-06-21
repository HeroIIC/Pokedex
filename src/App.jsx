import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PokemonList from './PokemonList';
// import PokemonDetails from './PokemonDetails';
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    //
  }
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  return (
      <div>
        <h1>Pokédex</h1>
          <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}/>
        <div>
          <PokemonCard Pokemon={pokemonList[pokemonIndex]}/>
        </div>
      </div>
  );
}

export default App


