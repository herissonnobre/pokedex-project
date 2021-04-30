import { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from 'react-paginate';
import { useHistory, Link, useLocation } from 'react-router-dom';

import Pokemon from '../components/Pokemon';
import FavImg from '../icons/HeartIcon_WB.svg';
import NoFavImg from '../icons/HeartIcon_WOB.svg';

import './styles.css';

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [favPokemons, setFavPokemons] = useState([]);
  const [fetchedFavPokemons, setFetchedFavPokemons] = useState([]);
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    user: {
      username: localStorage.username
    },
    pokemons: []
  });

  const [username, setUsername] = useState(localStorage.username);
  
  let newFavPokemons = [];

  let location = useLocation();

  let history = useHistory();

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
    fetchPokemons();
  }, [currentPage]);

  useEffect(() => {
    async function fetchFavPokemons() {
      if (username) {
        try {  
          const response = await axios.get('https://pokedex20201.herokuapp.com/users/' + username);
          setFetchedFavPokemons(response.data.pokemons);
          setCurrentUser(response.data.user);
        } catch (error) {
          setError(error.response.data);
        }
      }
    }
    fetchFavPokemons();
  }, [username, favPokemons]);

  useEffect(() => {
    const handleUserChange = () => {
      setUsername(localStorage.username);
    }
    handleUserChange(); 
  }, [localStorage.username]);

  const checkFavorite = ( pokemonId ) => {
    const favItem = fetchedFavPokemons.find(element => element.id === pokemonId);
    if (username && favItem !== undefined)
      return true;
  }

  const handleFavorite = (pokemon, flag) => {
    if (flag) {
      axios.delete('https://pokedex20201.herokuapp.com/users/'.concat(username, '/starred/', pokemon.name))
        .then(() => setFavPokemons(favPokemons.filter((favPokemon) => favPokemon.id !== pokemon.id)))
        .catch(error => {
          setError(error);
        });
    } else {
      axios.post('https://pokedex20201.herokuapp.com/users/'.concat(username, '/starred/', pokemon.name))
        .then(response => response.data)
        .then(favoritedPokemon => setFavPokemons([...favPokemons, favoritedPokemon]))
        .catch(error => {
          setError(error);
        });
    }
  }

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
            </Link>
            { username && (        
                checkFavorite(pokemon.id) 
                ? <button id="favButton" onClick={() => handleFavorite(pokemon, true)}><img src={FavImg} alt="favImg" /></button> 
                : <button id="favButton" onClick={() => handleFavorite(pokemon, false)}><img src={NoFavImg} alt="noFavImg" /></button>
              )
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
        previousLinkClassName={"paginationLink"}
        nextLinkClassName={"paginationLink"}
        disabledClassName={"paginationLinkDisabled"}
        activeClassName={"paginationLinkActive"}
      />
    </div>
    );
};

export default Pokedex;