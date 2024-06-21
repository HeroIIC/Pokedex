import PropTypes from "prop-types";



function PokemonCard({Pokemon}) {
return (
<figure className="card">
{Pokemon.imgSrc ?(<img src={Pokemon.imgSrc} alt={Pokemon.name} className="card-img" />)
: (<p>???</p>) }

            <figcaption>{Pokemon.name}</figcaption>
        </figure>
    )
}
PokemonCard.propTypes = {
    Pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        }).isRequired 
   
};


export default PokemonCard
