import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <div id="header">
            <h1 id="title">POKEDEX</h1>
            {/* <nav id="nav"> */}
            <div id="nav">
                <ul id="links">
                    <li id="home_link"><Link to="/">Home</Link></li>
                    <li id="pokedex_link"><Link to="/pokedex">Pokedex</Link></li>
                    <li id="login_button"><input type="button" id="login_button" value="Login" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;