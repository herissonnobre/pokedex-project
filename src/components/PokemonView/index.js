import { match, useParams, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

    
const PokemonView = () => {
    
    let history = useHistory();
    let { id } = useParams();
    
    let states = useLocation();
    const pokemonArray = states.state.pokemonArray;
    const index = parseInt(id, 10);
    const clickedPokemon = pokemonArray.find(pokemon => pokemon.id === index);

    if (!clickedPokemon)
        return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div id="divContainer" onClick={back}>
            <div id="pokemonView">
                <h1>{clickedPokemon.name}</h1>
                <img src={clickedPokemon.image_url} alt={clickedPokemon.name} />
                <p>Tipo: {clickedPokemon.kind}</p>
                <p>Número: {clickedPokemon.number}</p>
                <p>Peso: {clickedPokemon.weight}</p>
                <p>Altura: {clickedPokemon.height}</p>
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PokemonView;