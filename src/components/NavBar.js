import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    backgroud: tomato;
`

export default function NavBar () {
    return <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
    </StyledNav>;
}