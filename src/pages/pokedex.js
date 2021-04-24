import { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from 'react-paginate';
import { useHistory, useParams, Link, useLocation } from 'react-router-dom';
import Pokemon from '../components/Pokemon';
import './styles.css';

const Pokedex = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState("");

  let location = useLocation();

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

  return (
    <div id="pokedex">
      <div id="pokemonPortrait">
          {pokemons.map(pokemon => (
            <Link
              key={pokemon.id}
              to ={{
                pathname:`/pokedex/${pokemon.id}`,
                state: { background: location, pokemonArray: pokemons }
              }}
            >
              <Pokemon pokemon={pokemon}/>
            </Link>
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