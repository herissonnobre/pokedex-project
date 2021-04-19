import * as Styled from './styles';
import './styles.css';
import FavButton from '../FavButton/';

// export default function Pokemon ({ pokemon, removePokemon, togglePokemon }) {
export default function Pokemon ({ pokemon }) { 
    // const handleCheckbox = event => {
    //     togglePokemon(pokemon.id, event.target.checked);
    // }

    return <div>
            <figure className="pokemon_toten">
        {/* <Styled.Label done={pokemon.done}> */}
        
        {/* <label> */}
            {/* <input type="checkbox" onChange={handleCheckbox} checked={pokemon.done}/> */}
            {/* {pokemon.name} */}
        {/* </label>  */}
                <img src={pokemon.image_url} alt={pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
            </figure>
            <input type="checkbox"/>
            {/* <FavButton /> */}
            {/* <input type="image" src="../icons/HeartIcon_WB.svg" alt="Like" width="48" height="48"/> */}
        </div>
        {/* <Styled.Button onClick={() => removePokemon(pokemon.id)}>x</Styled.Button> */}
}