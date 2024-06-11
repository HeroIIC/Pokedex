function PokemonCard({Pokemon}) {
   
    
    return (
        <><figure>
  {Pokemon.imgSrc ?(<img src={Pokemon.imgSrc} alt={Pokemon.name} />)
  : (<p>???</p>) }
    
    
            <figcaption>{Pokemon.name}</figcaption>
     
        </figure><img className="Bulbasaur" /></>
    )
}


export default PokemonCard
