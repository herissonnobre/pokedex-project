import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './components/Pokemon';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Pokedex from './pages/pokedex';
import Input from './components/Input';
import './App.css';

const initialPokemons = [ 
  {
    id: 1,
    name: 'teste',
    done: true
    //image_url: 'http://s2.glbimg.com/KV5eehME-_BD7QEL-W06_2swk4U=/s.glbimg.com/og/rg/f/original/2014/04/03/vemai_marca_1.jpg',
    //number: 'teste',
    //weight: 'teste',
    //height: 'teste',
    //kind: 'teste',
    //created_at: 'teste',
    //updated_at: 'teste'
  }
]

function App() {
  // const [pokemons, setPokemons] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   async function fetchPokemons() {
  //     try {  
  //       const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=1');

  //       const fetchedPokemons = response.data.data;
  //       setPokemons(fetchedPokemons.map(pokemon => ({
  //         id: pokemon.id,
  //         name: pokemon.name,
  //         image_url: pokemon.image_url,
  //         number: pokemon.number,
  //         weight: pokemon.weight,
  //         height: pokemon.height,
  //         kind: pokemon.kind,
  //         created_at: pokemon.created_at,
  //        updated_at: pokemon.updated_at
  //       })));
  //     } catch (error) {
  //       setError(error.response.data);
  //     }
  //   }
  //   fetchPokemons();
  // }, []);

  // useEffect ( () => {
  //   async function fetchPokemons() {
  //     const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=1');
  //     console.log(response);
    
  //     const fetchedPokemons = response.data;
  //     setPokemons(fetchedPokemons.map(pokemon => ({
  //       id: pokemon.id,
  //       name: pokemon.name,
  //       image_url: pokemon.image_url,
  //       number: pokemon.number,
  //       weight: pokemon.weight,
  //       height: pokemon.height,
  //       kind: pokemon.kind,
  //       created_at: pokemon.created_at,
  //       updated_at: pokemon.updated_at
  //     })))
  //   }
    
  //   fetchPokemons();
  // });
  
  // const addPokemon = text => {
  //   const pokemon = {
  //     name: text,
  //     id: Math.random() * 1000,
  //     done: false
  //   }
  //   axios.post('https://jsonplaceholder.typicode.com/todos', pokemon)
  //     .then(response => response.data)
  //     .then(createdPokemon => setPokemons([...pokemons, createdPokemon]));
  // }

  // const removePokemon = (id) => {
  //   axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
  //     .then(() => setPokemons(pokemons.filter((pokemon) => 
  //       pokemon.id !== id
  //     )))
  //     .catch(error => {
  //       setError(error.response.data);
  //     });
  // };

  // const togglePokemon = (id, newState) => {
  //   axios
  //     .patch('https://jsonplaceholder.typicode.com/todos/' + id, {
  //       completed: newState,
  //     })
  //     .then(() => {
  //       setPokemons(pokemons.map(pokemon => {
  //         if (pokemon.id === id) {
  //           pokemon.done = newState;
  //         }
  //         return pokemon;
  //       }));
  //     });
  // };



  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokedex">
          <Pokedex />
            {/* <div className="App"> */}
              {/* <h1>{error}</h1> */}
              {/* <Input addPokemon={addPokemon} /> */}
              {/* <div className="Pokedex"> */}
                {/* {pokemons.map(pokemon => ( */}
                  {/* // <Pokemon key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} togglePokemon={togglePokemon}/> */}
                  {/* <Pokemon key={pokemon.id} pokemon={pokemon}/> */}
                {/* ))} */}
              {/* </div> */}
            {/* </div> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
