import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../Login';
import './styles.css';

const Header = () => {
    let location = useLocation();
    
    // const [loggedUser, setLoggedUser] = useState(localStorage.getItem("username"));

    const handleLogout = () => {
        localStorage.clear();
    };

    console.log(localStorage.username);

    return (
        <div id="header">
            <h1 id="title">POKEDEX</h1>
            {/* <nav id="nav"> */}
            <ul id="nav">
                <li id="homeLinkLi"><Link id="homeLink" to="/">Home</Link></li>
                <li id="pokedexLinkLi"><Link id="pokedexLink" to="/pokedex">Pokedex</Link></li>
                <li id="userLinkLi">
                    { (localStorage.username === undefined)
                        ?   <Link
                                id="loginLink"
                                to ={{
                                    pathname:"/login",
                                    state: { background: location }
                                }}
                            >
                                <button id="loginButton">Login</button>
                            </Link>
                        :   <button id="logoutButton" onClick={handleLogout}>logout</button>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;