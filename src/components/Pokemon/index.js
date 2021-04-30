import './styles.css';

const Pokemon = ({ pokemon }) => { 
    
    return (
        <div className="pokemonToten">
            <img id="pokemonImg" src={pokemon.image_url} alt={pokemon.name} />
            <p id="pokemonName">{pokemon.name}</p>
        </div>
    )
}

export default Pokemon;