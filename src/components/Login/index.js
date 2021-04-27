import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import isAuthenticated from '../Authentication';
import './styles.css';

const Login = () => {
    
    const [login, setLogin] = useState("");

    // console.log(status.status);

    const [user, setUser] = useState({
        user: {
            id: null,
            username: null,
            created_at: null,
            updated_at: null
        },
        pokemons: []
    });

    const [username, setUsername] = useState("");

    const [error, setError] = useState("");

    // console.log(user);
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: "",
    //         registrationErrors: ""
    //     };

    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }

    const handleChange = ( event ) => {
        setUsername(event.target.value);
    };

    
    async function handleLogin ( login ) {
        await setLogin(login);
        console.log(login);
    }

    async function tryLogin( user ) {
        try {  
            const response = await axios.post('https://pokedex20201.herokuapp.com/users/', user);
            //   const fetchedPokemons = response.data.data;
            //   setPokemons(fetchedPokemons);
            console.log(response);
            handleLogin({
                ...login,
                status: true,
                method: response.statusText, 
                userId: response.data.user.id
            });
            return login;
        } catch (error) {
            setError(error.response.data);
            try {
                const response = await axios.get('https://pokedex20201.herokuapp.com/users/' + user.user.username);
                console.log(response);
                handleLogin({
                    ...login,
                    status: true,
                    method: response.statusText, 
                    userId: response.data.user.id
                });
                return login;
            } catch {
                setError(error.response.data);
                handleLogin({
                    ...login,
                    status: true,
                });
                return login;
            }
        }
        
    }

    useEffect(() => {
        console.log(username);
        async function handleUser ( ) {
            await setUser({ ...user, user: { 'username': document.getElementById('username').value }});
            // setUser({ ...user, user: { 'username': username }});
        }
        handleUser();
    }, [username]);

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const tempLogin = tryLogin(user);
        localStorage.setItem('user', user.user.username);
        console.log(localStorage.user);
    }


    // let history = useHistory();
    
    // let back = e => {
    //     e.stopPropagation();
    //     history.goBack();
    // }; 
    
    // const button = document.getElementById("loginButton");
    //         const paragraph = document.querySelector('p');

    //         button.addEventListener('click', updateButton);

    //         function updateButton() {
    //             if (button.value === 'Start machine') {
    //                 button.value = 'Stop machine';
    //                 paragraph.textContent = 'The machine has started!';
    //             } else {
    //                 button.value = 'Start machine';
    //                 paragraph.textContent = 'The machine is stopped.';
    //             }
    //         }
    // )

    return (
        // <div id = "loginDiv" onClick={back}>
        // <div id="modal">
            <div id = "loginWrapper">
                {/* <form action="https://pokedex20201.herokuapp.com/users/" method="get"> */}
                <form id="loginForm" onSubmit={handleSubmit}>
                {/* <form id="loginForm" method="post"> */}
                    <p>Treinador pokemon, como se chama?</p>
                    <label>
                        <input
                            type="text"
                            id="username"
                            onChange={handleChange}
                            // value="digite aqui"
                            // onChange={this.handleChange}
                            required
                        />
                    </label>
                    {/* <div id="loginButtonDiv"> */}
                    <button type="submit" id="loginButton">Login</button>
                    {/* </div> */}
                    {/* <button type="button" onClick={back}>
                        Fechar janela
                    </button> */}
                </form>
                {/* </form>   */}
            </div>
        // </div>
    )
}

export default Login;