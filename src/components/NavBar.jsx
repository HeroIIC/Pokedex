const NavBar = ({ pokemonList,setPokemonIndex}) => {
if (!pokemonList || pokemonList.length === 0) {
  return ;
}
  return (
    <div className="navigation-buttons">
      {pokemonList.map((pokemon, index) => (
        <div key={index} >
          <button onClick={()=> setPokemonIndex(index)}> {pokemon.name}</button>
        </div>
      ))} 
    </div>
    )
  }

export default NavBar;
