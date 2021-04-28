import { useState } from "react";
import * as Styled from './styles';
import { NavLink } from 'react-router-dom';
import './styles.css';


// export default function NavButton({ addPokemon }) {
export default function FavButton () {
    
    // const [state, setState] = useState(false);
    // let button_url = "";

    // let handleLike = () => {  
    //     setState(!state);
    //     handleButton();
    // };

    // let handleButton = () => {
    //     if (state === true) {
    //        button_url = "./icons/HeartIcon_WB";
    //     } else {
    //         button_url = "./icons/HeartIcon_WOB";
    //     }      
    // }
    
    // const [value, setValue] = useState("");

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // addPokemon(value);
    //     setValue('');
    // }

    // return <form onSubmit={handleSubmit}>
        // <Styled.Input className="input" value={value} onChange={(event) => setValue(event.target.value)} />
        // <Styled.Button className="button" type="submit">+</Styled.Button>
    // </form>  
    return <div >
        <input className="fav" type="button" value="fav"/>
        
    </div>
    
    // <input type="button" onClick={handleLike} value={button_url}> <img src={button_url} alt="Like" height="50px" width="50px" />
    // </button>
}