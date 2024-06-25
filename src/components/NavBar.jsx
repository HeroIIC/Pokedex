import React from 'react';

const NavBar = ({ pokemonList, setPokemonIndex }) => {
  const handleClick = (index, name) => {
    setPokemonIndex(index);
    if (name.toLowerCase() === 'pikachu') {
      alert('pika pikachu !!!');
    }
  };
  return (
    <div className="navigation-buttons">
      {pokemonList.map((pokemon, index) => (
          <button 
          key={index}
          onClick={()=> handleClick(index,pokemon.name)}
          > 
          
          {pokemon.name}</button>
        
      ))} 
    </div>
    )
  }

export default NavBar;
