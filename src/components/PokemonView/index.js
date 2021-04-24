import { useLocation, useParams } from 'react-router-dom';

const PokemonView = () => {
    let { id } = useParams();
    let states = useLocation();

    const pokemonArray = states.state.pokemonArray;
    const index = parseInt(id, 10);
    
    const clickedPokemon = pokemonArray.find(pokemon => pokemon.id === index);
    
    if (!clickedPokemon)
        return <div>Pokemon not found</div>;

    return (
        <div>
            <h1>{clickedPokemon.name}</h1>
            <img src={clickedPokemon.image_url} alt={clickedPokemon.name}/>
        </div>
    );
};

export default PokemonView;