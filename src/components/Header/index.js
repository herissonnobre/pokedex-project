import { React, useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Login from '../Login';
import './styles.css';

const Header = () => {
    const [username, setUsername] = useState(localStorage.username);

    let location = useLocation();
    let history = useHistory();
    
    useEffect(() => {
        const handleUserChange = () => {
            setUsername(localStorage.username);
        }
        handleUserChange();
    }, [localStorage.username]);
      
    const handleLogout = event => {
        localStorage.clear();
        setUsername(localStorage.username);
        history.go(0);
    };

    return (
        <div id="header">
            <h1 id="title">POKEDEX</h1>
            <ul id="nav">
                <li id="homeLinkLi"><Link id="homeLink" to="/">Home</Link></li>
                <li id="pokedexLinkLi">
                    <Link
                        id="pokedexLink"
                        to={{
                            pathname: "/pokedex",
                            state: { user: username }
                        }}
                    >
                        Pokedex
                    </Link>
                </li>
                <li id="userLinkLi">
                    { (username !== undefined && username !== null)
                        ?   <button id="logoutButton" onClick={handleLogout}>Logout</button>
                        :   <Link
                                id="loginLink"
                                to ={{
                                    pathname:"/login",
                                    state: { background: location }
                                }}
                            >
                                <button id="loginButton">Login</button>
                            </Link>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;