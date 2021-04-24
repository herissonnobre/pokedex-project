import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon";
import Pagination from "./pagination";
import "./styles.css";


const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  // const [counter, setCounter] = useState(1);
  const [error, setError] = useState("");
  const [pageIndexers, setPageIndexers] = useState([]);


  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${pageIndex}`)
      .then((response) => setPokemons(response.data.data))
      .catch((error) => setError(error.response.data));
    console.log(pageIndex, "PageIndex")
   
  }, [pageIndex]);

  return (
    <div id="pokedex">
      <div id="pokemonPortrait">
        {pokemons.map((pokemon) => (
         
          <Pokemon pokemon={pokemon} />
        ))}
      </div>

      <Pagination number={pageIndex} onNumberChange={setPageIndex}/>
    </div>
  );
};

export default PokemonsList;
