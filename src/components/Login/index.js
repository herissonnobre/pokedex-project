import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './styles.css';

const Login = () => {
    
    let history = useHistory();
    
    const [user, setUser] = useState({
        user: {
            id: null,
            username: null,
            created_at: null,
            updated_at: null
        },
        pokemons: []
    });

    const [loggedUser, setLoggedUser] = useState("");

    const [error, setError] = useState("");

    
    const handleChange = async event => {
        setUser({ ...user, user: { 'username': event.target.value }});
    };

    async function tryLogin ( ) {     
        try {  
            const response = await axios.post('https://pokedex20201.herokuapp.com/users/', user);
        } catch (error) {
            setError(error.response.data);
            try {
                const response = await axios.get('https://pokedex20201.herokuapp.com/users/' + user.user.username);
            } catch {
                setError(error.response.data);
            }
        } 
    }

    const handleSubmit = event => {
        event.preventDefault();
        tryLogin();
        localStorage.setItem('username', user.user.username);
        history.goBack();
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            setLoggedUser(loggedInUser);
        }
    }, [loggedUser]);

    if (loggedUser !== "null" && loggedUser !== "" && loggedUser != null) {
        return <div>{loggedUser} is loggged  in</div>;
    }

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div id="divContainer">
            <div id="loginContainer">
                <div id="loginWrapper">
                    <div id="buttonContainer">
                        <button id="closeBbutton" onClick={back}>
                            X
                        </button>
                    </div>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <label id="usernameInput">
                            <p>Treinador pokemon, como se chama?</p>
                            <input
                                type="text"
                                id="username"
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit" id="loginButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;