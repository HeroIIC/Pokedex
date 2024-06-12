function PokemonCard({Pokemon}) {
return (
<figure className="card">
{Pokemon.imgSrc ?(<img src={Pokemon.imgSrc} alt={Pokemon.name} className="card-img" />)
: (<p>???</p>) }
    
    
            <figcaption>{Pokemon.name}</figcaption>
     
        </figure>
    )
}


export default PokemonCard
