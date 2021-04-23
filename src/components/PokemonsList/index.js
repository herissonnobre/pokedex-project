import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-router-pagination';
import Pokemon from '../Pokemon';
// import Home from '../views/home';
// import PageNav from '../components/PageNav';
// import NavButton from '../components/NavButton';
// import './styles.css';

const PokemonsList = ({ match }) => {

    const [pokemons, setPokemons] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    // const [counter, setCounter] = useState(1);
    const [error, setError] = useState("");
    const [pageIndexers, setPageIndexers] = useState([]);
  
    // console.log(match.url);
  
    useEffect(() => {
      async function fetchPokemons() {
        try {  

            const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + match.params.pageId);
            
            // const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + page);

            const fetchedPokemons = response.data.data;
            setPageIndex(response.data.next_page);
  
          setPokemons(fetchedPokemons);
          // setPageIndex(pageIndexer);
  
          
  
          // console.log(Object.getOwnPropertyNames(pokemons.length).sort());
        } catch (error) {
          setError(error.response.data);
        }
  
          // }
      }
      
      console.log(pageIndex);
      
      const checkPage = () => {
        if (pageIndex != null) { 
          setPageIndex(pageIndex - 1);
        } else {
          setPageIndex(33);
        }
  
      };
      
      console.log(pokemons);
  
      const runNav = () => {
        // const pagePreIndexes = [], pageMidIndexes = [], pagePosIndexes = [];
  
        checkPage();
        // console.log(pageIndex);
  
        const pageIndexes = [];
  
        if (pageIndex <= 4) {
            for (let i = 1; i <= 5; i++) {
                pageIndexes.push(i);
            }
            pageIndexes.push("...")
            pageIndexes.push(33);
        } else {
            if (pageIndex > 4 && pageIndex < 30) {
                pageIndexes.push(1);
                pageIndexes.push("...")
                pageIndexes.push(pageIndex - 1);
                pageIndexes.push(pageIndex);
                pageIndexes.push(pageIndex + 1);
                pageIndexes.push("...");
                pageIndexes.push(33);
                // pageMidIndexes[1] = pageIndex;
                // pageMidIndexes[2] = pageIndex + 1;
                // pagePosIndexes[0] = 33;
            } else {
                if (pageIndex >= 30) {
                    pageIndexes.push(1);
                    pageIndexes.push("...");
                    for (let i = 29; i <= 33; i++) {
                        pageIndexes.push(i);
                    }
                }
            }
        }
  
        // if (pageMidIndexes.length !== 0) {
        //     pageIndexes.push(pagePreIndexes);
        //     pageIndexes.push("...");
        //     pageIndexes.push(pageMidIndexes);
        //     pageIndexes.push("...");
        //     pageIndexes.push(pagePosIndexes);
        // } else {
        //     pageIndexes.push(pagePreIndexes);
        //     pageIndexes.push("...");
        //     pageIndexes.push(pagePosIndexes);
        // }
  
  
        pageIndexes.unshift("<");
        pageIndexes.push(">");
        console.log(pageIndexes);
        setPageIndexers(pageIndexes);
      }
  
      // }          
      // }, []);
      // for (let i=1; i<=33; i++)
      fetchPokemons();
      runNav();
      console.log(pokemons);
      console.log(pageIndexers);
      console.log(pageIndex);
  
  
      // console.log(pageIndexes);
  
      
  
      // console.log(pokemons.map(pokemon => ({name: pokemon.name})));    
      // if (counter < 33) {
      //   setCounter(counter + 1);
      // };
  
      // let  grassPokemons = pokemons.filter(pokemon => pokemon.kind === "grass;poison");
      // console.log(grassPokemons);
      
      // let a = pokemons.map(pokemon => pokemon.name);
      // console.log(a[5]);
      
    }, [match.params.pageId]);
  
    
  
  
      return (
        <div id="pokedex">        
          <div id="pokemonPortrait">
            {pokemons.map(pokemon => (
              // <Pokemon key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} togglePokemon={togglePokemon}/>
              <Pokemon pokemon={pokemon}/>
            ))}
          </div>
        
          <Pagination 
            totalPages={33} 
            match={
              {
                path: '/pokedex/:pageNumber'
              }
            }
            
            spread={5}
          // format="center"
          />
        </div>
      );
  };
  
  export default PokemonsList;