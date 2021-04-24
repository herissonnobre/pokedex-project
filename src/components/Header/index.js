import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../Login';
import './styles.css';

const Header = () => {
    let location = useLocation();
    
    return (
        <div id="header">
            <h1 id="title">POKEDEX</h1>
            {/* <nav id="nav"> */}
            <div id="nav">
                <ul id="links">
                    <li id="home_link"><Link to="/">Home</Link></li>
                    <li id="pokedex_link"><Link to="/pokedex">Pokedex</Link></li>
                    <li id="login">
                        <Link
                            key="login"
                            to ={{
                                pathname:"/login",
                                state: { background: location }
                            }}
                        >
                            <input type="button" id="login_button" value="Login" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;