
const NavBar = ({ PokemonIndex, handlePrevious, handleNext, PokemonListLength }) => {
  return (
    <div className="navigation-buttons">
      {PokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {PokemonIndex < PokemonListLength -1 && <button onClick={handleNext}>Suivant</button>}
    </div>
  );
};

export default NavBar;
