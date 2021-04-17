import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '..//components/Pokemon';
import Home from '../pages/home';
import Input from '../components/Input';
import './styles.css';

export default function Pokedex () {
    
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPokemons() {
        try {  
            const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=1');

            const fetchedPokemons = response.data.data;
            setPokemons(fetchedPokemons.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            image_url: pokemon.image_url,
            number: pokemon.number,
            weight: pokemon.weight,
            height: pokemon.height,
            kind: pokemon.kind,
            created_at: pokemon.created_at,
            updated_at: pokemon.updated_at
            })));
        } catch (error) {
            setError(error.response.data);
        }
        }
        fetchPokemons();
    }, []);
    
    return <div>
        {/* <PageHeader /> */}
        <Header />
        {/* <h1>Pokedex!</h1> */}
        <div className="App">
              {/* <h1>{error}</h1> */}
              {/* <Input addPokemon={addPokemon} /> */}
              <div className="Pokedex">
                {pokemons.map(pokemon => (
                  // <Pokemon key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} togglePokemon={togglePokemon}/>
                  <Pokemon key={pokemon.id} pokemon={pokemon}/>
                ))}
              </div>
            </div>
    </div>
}

