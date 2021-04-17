import { useState } from "react";
import * as Styled from './styles';

export default function Input({ addPokemon }) {
    const [value, setValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        addPokemon(value);
        setValue('');
    }

    return <form onSubmit={handleSubmit}>
        <Styled.Input className="input" value={value} onChange={(event) => setValue(event.target.value)} />
        <Styled.Button className="button" type="submit">+</Styled.Button>
    </form>  
}