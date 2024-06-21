import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PokemonList from './PokemonList';
// import PokemonDetails from './PokemonDetails';
import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard'

const PokemonList = [
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
  const [PokemonIndex, setPokemonIndex] = useState(0)

  const handlePrevious = () => {
    if (PokemonIndex > 0) {
      setPokemonIndex(PokemonIndex - 1);
    }
  };

  const handleNext = () => {
    if (PokemonIndex < PokemonList.length - 1) {
      setPokemonIndex(PokemonIndex + 1);
    }
  };
  return (

    // <Router>
      <div>
        <h1>Pokédex</h1>
        <NavBar 
          handlePrevious={handlePrevious} 
          handleNext={handleNext} 
          PokemonListLength={PokemonList.length}
          PokemonIndex={PokemonIndex}
          // showPrevious={PokemonIndex > 0} 
          // showNext={PokemonIndex < PokemonList.length - 1} 
        />
        {/* <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes> */}
        <div>
        <PokemonCard Pokemon={PokemonList[PokemonIndex]}/>
       </div>
      </div>
    // </Router>
    
  );
}


  //   return (
//     <>
//     <div>
//       <PokemonCard Pokemon={pokemonList[0]}/>
//       </div>
//     </>
//   )
// }

export default App


