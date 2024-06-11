function PokemonCard() {
    const Pokemon = PokemonList[0];
    return (
        <><figure>
  {Pokemon.imgSrc ?(<img src={Pokemon.imgSrc} alt={Pokemon.name} />)
  : (<p>???</p>) }
    
    
            <figcaption>{Pokemon.name}</figcaption>
     
        </figure><img className="Bulbasaur" /></>
    )
}
const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
export default PokemonCard
