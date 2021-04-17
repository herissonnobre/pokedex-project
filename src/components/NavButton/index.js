import { useState } from "react";
import * as Styled from './styles';
import { NavLink } from 'react-router-dom';


// export default function NavButton({ addPokemon }) {
export default function NavButton () {
    const [value, setValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        // addPokemon(value);
        setValue('');
    }

    // return <form onSubmit={handleSubmit}>
        // <Styled.Input className="input" value={value} onChange={(event) => setValue(event.target.value)} />
        // <Styled.Button className="button" type="submit">+</Styled.Button>
    // </form>  
    return <div>
        <nav id="nav">
            <ul>
                
            </ul>
        </nav>    
    </div>
}