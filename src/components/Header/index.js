import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import PageHeader from './PageHeader';

import './styles.css';

const Header = () => {
// export default function Header () {
    return (
        <div id="header">
            <h1 id="title">POKEDEX</h1>
            {/* <nav id="nav"> */}
            <div id="nav">
                <ul id="links">
                    <button id="home_link" >
                        <Link className="button" to="/">
                            Home
                        </Link>
                    </button>
                    <button id="pokedex_link">
                        <Link className="button" to="/pokedex">
                            Pokedex
                        </Link>
                    </button>

                    <form>
                        <input placeholder="Usuário"></input>
                        <button className="button" type="submit">Logar</button>
                    </form>
                </ul>
            </div>
        </div>
    );
};

export default Header;