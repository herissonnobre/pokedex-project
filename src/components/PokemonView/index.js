import { useEffect, useState } from 'react';
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
        <div id="divPokemonViewContainer">
            <div id="pokemonViewContainer">
                <div id="buttonContainer">
                    <button id="closeButton" onClick={back}>X</button>
                </div>
                <h1 id="pokemonName">{clickedPokemon.name}</h1>
                <img id="pokemonImg" src={clickedPokemon.image_url} alt={clickedPokemon.name} />
                <p id="pokemonType">Tipo: {clickedPokemon.kind}</p>
                <p id="pokemonNumber">Número: {clickedPokemon.number}</p>
                <p id="pokemonWeight">Peso: {clickedPokemon.weight}</p>
                <p id="pokemonHeight">Altura: {clickedPokemon.height}</p>
            </div>
        </div>
    );
};

export default PokemonView;