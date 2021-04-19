import * as Styled from './styles';
import './styles.css';
import FavButton from '../FavButton/';

// export default function Pokemon ({ pokemon, removePokemon, togglePokemon }) {
export default function Pokemon ({ pokemon }) { 
    // const handleCheckbox = event => {
    //     togglePokemon(pokemon.id, event.target.checked);
    // }

    return <div id="pokemonPortraitInside">
        <div className="pokemonToten">
        {/* <Styled.Label done={pokemon.done}> */}
        
        {/* <label> */}
            {/* <input type="checkbox" onChange={handleCheckbox} checked={pokemon.done}/> */}
            {/* {pokemon.name} */}
        {/* </label>  */}
            <img id="pokemonImg" src={pokemon.image_url} alt={pokemon.name} />
            <p id="pokemonName">{pokemon.name}</p>
            {/* <input id="favIcon" type="checkbox"/> */}
            <FavButton id="favIcon"/>
        </div>    {/* <input type="image" src="../icons/HeartIcon_WB.svg" alt="Like" width="48" height="48"/> */}
    </div>
    // {/* <Styled.Button onClick={() => removePokemon(pokemon.id)}>x</Styled.Button> */}
}