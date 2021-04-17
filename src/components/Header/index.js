import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import PageHeader from './PageHeader';
import './styles.css';

export default function Header () {
    return <div>
        <div id="header">
            <h1>POKEDEX</h1>
            <nav id="nav">
                <ul>
                    <li id="home_link"><NavLink to="/">Home</NavLink></li>
                    <li id="pokedex_link"><NavLink to="/pokedex">Pokedex</NavLink></li>
                    <li id="login_button"><button id="login">Login</button></li>
                </ul>
            </nav>
        </div>
    </div>
    
    
}