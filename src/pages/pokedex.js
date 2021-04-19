import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '..//components/Pokemon';
import Home from '../pages/home';
import NavButton from '../components/NavButton';
import './styles.css';

export default function Pokedex () {
    
  const [pokemons, setPokemons] = useState([]);
  // const [counter, setCounter] = useState(1);
  const [error, setError] = useState("");
  
  useEffect(() => {
    
    
    async function fetchPokemons() {
      // for (let i = 1; i <= 3; i++) {
        // console.log(pokemons);
        try {  
          const response = [];
          for (let i = 1; i <= 33; i++) {
            response[i-1] = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + i);
          }
          // console.log(response[0].data);
          // console.log(response.data.data[2]);

          const fetchedPokemons = [];
          const allFetchedPokemons = [];

          for (let i = 0; i < 33; i++) {
            fetchedPokemons[i]= response[i].data.data;
            // console.log(fetchedPokemons[i]);
            for (let j = 0; j < response[i].data.size; j++) 
              allFetchedPokemons.push(fetchedPokemons[i][j]);
            console.log(allFetchedPokemons);
          }
          
          // console.log(fetchedPokemons);
          // pokemons.push(fetchedPokemons.map(pokemon => ({
          
          // const mappedPokemons =  fetchedPokemons.map(pokemon => ({
          //   id: pokemon.id,
          //   name: pokemon.name,
          //   image_url: pokemon.image_url,
          //   number: pokemon.number,
          //   weight: pokemon.weight,
          //   height: pokemon.height,
          //   kind: pokemon.kind, 
          //   created_at: pokemon.created_at,
          //   updated_at: pokemon.updated_at
          // }));

          // console.log(mappedPokemons);
          
          // var joined = this.state.pokemons.concat(mappedPokemons);
          // this.setState({ pokemons: joined });
          
          // console.log(pokemons);

          // const pokemonTotal = pokemons.concat(mappedPokemons);

          setPokemons(allFetchedPokemons);

          // console.log(pokemons);

          // console.log(Object.getOwnPropertyNames(pokemons.length).sort());
        } catch (error) {
          setError(error.response.data);
        }
      // }
    }
    // }          
    // }, []);
    // for (let i=1; i<=33; i++)
    fetchPokemons();
    

    // console.log(pokemons.map(pokemon => ({name: pokemon.name})));    
    // if (counter < 33) {
    //   setCounter(counter + 1);
    // };

    // let  grassPokemons = pokemons.filter(pokemon => pokemon.kind === "grass;poison");
    // console.log(grassPokemons);
    
    // let a = pokemons.map(pokemon => pokemon.name);
    // console.log(a[5]);
    
  }, []);


    return <div>
      {/* <PageHeader /> */}
      <Header />
      {/* <h1>Pokedex!</h1> */}
      {/* <div className="App"> */}
        {/* <h1>{error}</h1> */}
        {/* <Input addPokemon={addPokemon} /> */}
      <div className="Pokedex">
        
        {pokemons.map(pokemon => (
          // <Pokemon key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} togglePokemon={togglePokemon}/>
          <Pokemon pokemon={pokemon}/>
        ))}
      </div>
      {/* </div> */}
      <div>
        {/* <NavButton /> */}
      </div>
    </div>
}

