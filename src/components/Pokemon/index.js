import './styles.css';
import FavButton from '../FavButton/';

const Pokemon = ({ pokemon }) => { 
    
    return (
        <div className="pokemonToten">
            <img id="pokemonImg" src={pokemon.image_url} alt={pokemon.name} />
            <p id="pokemonName">{pokemon.name}</p>
            {/* <FavButton id="favIcon"/> */}
        </div>
    )
}

export default Pokemon;