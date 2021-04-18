import * as Styled from './styles';
import './styles.css';

// export default function Pokemon ({ pokemon, removePokemon, togglePokemon }) {
export default function Pokemon ({ pokemon }) { 
    // const handleCheckbox = event => {
    //     togglePokemon(pokemon.id, event.target.checked);
    // }

    return <figure className="pokemon_toten">
        {/* <Styled.Label done={pokemon.done}> */}
        
        {/* <label> */}
            {/* <input type="checkbox" onChange={handleCheckbox} checked={pokemon.done}/> */}
            {/* {pokemon.name} */}
        {/* </label> */}
        
            <img src={pokemon.image_url} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
        
        // {/* <Styled.Button onClick={() => removePokemon(pokemon.id)}>x</Styled.Button> */}
}