import { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from 'react-paginate';
import { useHistory, useParams, Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Pokemon from '../components/Pokemon';

import FavImg from '../icons/HeartIcon_WB.svg';
import NoFavImg from '../icons/HeartIcon_WOB.svg';
import './styles.css';

const Pokedex = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [favPokemons, setFavPokemons] = useState([]);
  const [error, setError] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({});

  let location = useLocation();

  console.log(localStorage.username);


  const handlePageChange = ({ selected: selectedPage}) => {
    const temp = selectedPage + 1;
    setCurrentPage(temp);
  }
  
  const handleActivePage = ({ selected: selectedItem }) => {
    const temp = selectedItem + 1;
    setCurrentPage(temp);
  }

  useEffect(() => {
    async function fetchPokemons() {
      try {  
        const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + currentPage);
        const fetchedPokemons = response.data.data;
        setPokemons(fetchedPokemons);  
      } catch (error) {
        setError(error.response.data);
      }
    }

    async function fetchFavPokemons() {
      try {  
        const userResponse = await axios.get('https://pokedex20201.herokuapp.com/users/' + localStorage.username);
        const favoritedPokemons = userResponse.data.pokemons;
        setFavPokemons(favoritedPokemons);
        setUser({user: userResponse.data.user});
      } catch (error) {
        setError(error.response.data);
      }
    }
    
    fetchPokemons();
    fetchFavPokemons();
  }, [currentPage]);
  
  function checkFavorite ( pokemonId ) {
    // const newRepositories = repositories.map(repo => {
    //   return repo.id === id ? { ...repo, favorite: true } : repo
    // });
    // setRepositories(newRepositories);

    const favItem = favPokemons.find(element => element.id ===  pokemonId);

    if (localStorage && favItem !== undefined)
      return true;

  }

  // useEffect(() => {
    
  //   axios.put('https://pokedex20201.herokuapp.com/users/')

  //   setUser({user: userResponse.data.user})
      
  // }, [newFavPokemons]);

  const handleFavorite = ( pokemon ) => {
    const newFavPokemons = [];

    if (checkFavorite) {
      const newFavPokemons = favPokemons.filter( favPokemon => favPokemon.id !== pokemon.id);
    } else {
      const newFavPokemons = favPokemons;
      newFavPokemons.push(pokemon);
    }
    setFavPokemons(newFavPokemons);

    

    
    // axios.delete('https://pokedex20201.herokuapp.com/users/')
  }

  // if (localStorage.user != "true" && localStorage.user != "") {
  //   document.getElementById('favoriteButton').style.visibility = "visible"; 
  // } else {
  //   document.getElementById('favoriteButton').style.visibility = "hidden"; 
  // }

  // console.log(document.getElementById('favoriteButton').value);

  // console.log(login.status);

  return (
    <div id="pokedex">
      <div id="pokemonPortrait">
        {pokemons.map(pokemon => (
          <div id="pokemonToten">
            <Link
              key={pokemon.id}
              to ={{
                pathname:`/pokedex/${pokemon.id}`,
                state: { background: location, pokemonArray: pokemons }
              }}
            >
              <Pokemon pokemon={pokemon}/>
              {/* {localStorage.username && <button id="favButton" onClick={() => handleFavorite(pokemon.id)}>{'<3'}</button> } */}
              
            </Link>
            { checkFavorite(pokemon.id) 
              ? <button id="favButton" onClick={() => handleFavorite(pokemon.id)}><img src={FavImg} alt="favImg" /></button> 
              : <button id="favButton" onClick={() => handleFavorite(pokemon.id)}><img src={NoFavImg} alt="noFavImg" /></button>
            }
          </div> 
        ))}
      </div>
      
      <Paginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={33}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        onPageActive={handleActivePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      </div>
    );
};

export default Pokedex;