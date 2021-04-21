import Header from '../components/Header';
// import PageHeader from '../components/PageHeader';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '..//components/Pokemon';
import Home from '../pages/home';
import PageNav from '../components/PageNav';
// import NavButton from '../components/NavButton';
import './styles.css';

export default function Pokedex () {
    
  const [pokemons, setPokemons] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  // const [counter, setCounter] = useState(1);
  const [error, setError] = useState("");
  const [pageIndexers, setPageIndexers] = useState([]);
  const pageIndexes = [];

  
  useEffect(() => {
    
    
    async function fetchPokemons() {
      // for (let i = 1; i <= 3; i++) {
        // console.log(pokemons);
      try {  
        let i = 1;
        // const response = [];
        // for (let i = 1; i <= 33; i++) {
          const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + i);
        // }
        
        // const fetchedPokemons = [];
        // const allFetchedPokemons = [];

        // for (let i = 0; i < 33; i++) {
          const fetchedPokemons = response.data.data;
          setPageIndex(response.data.next_page);
          // for (let j = 0; j < response[i].data.size; j++) 
            // allFetchedPokemons.push(fetchedPokemons[i][j]);
          // console.log(allFetchedPokemons);
        // }
        
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

        setPokemons(fetchedPokemons);
        // setPageIndex(pageIndexer);

        

        // console.log(Object.getOwnPropertyNames(pokemons.length).sort());
      } catch (error) {
        setError(error.response.data);
      }

        // }
    }
    
    console.log(pokemons);

    const checkPage = () => {
      if (pageIndex != null) { 
          setPageIndex(pageIndex - 1);
      } else {
          setPageIndex(33);
      }   
    };


    const runNav = () => {
      // const pagePreIndexes = [], pageMidIndexes = [], pagePosIndexes = [];

      checkPage();

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
    
  }, []);

  


    return <div id="pokedex">
      {/* <PageHeader /> */}
      <div className="pageHeader"><Header /></div>
      {/* <h1>Pokedex!</h1> */}
      {/* <div className="App"> */}
        {/* <h1>{error}</h1> */}
        {/* <Input addPokemon={addPokemon} /> */}
      <div id="pokemonPortrait">
        {pokemons.map(pokemon => (
          // <Pokemon key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} togglePokemon={togglePokemon}/>
          <Pokemon pokemon={pokemon}/>
        ))}
      </div>
      <div className="pageSelector">
        {/* <span className="selected"></span> */} 
        {/* {pageIndexers.map(pageIndexer => ( */}
        {pageIndexers.map(pageIndexer => (
          <PageNav pageIndex={pageIndexer} />      
        ))}
        {/* ))} */}
      </div>
      {/* </div> */}
      {/* <div> */}
        {/* <NavButton /> */}
      {/* </div> */}
    </div>
}

