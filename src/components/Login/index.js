import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import isAuthenticated from '../Authentication';
import './styles.css';

const Login = () => {
    
    // const [login, setLogin] = useState("");

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

    const [loggedUser, setLoggedUser] = useState("");

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

    console.log(user);
    
    async function handleUser ( username ) {
        // await setUser({ ...user, user: { 'username': document.getElementById('username').value }});
        setUser({ ...user, user: { 'username': username }});
        console.log(user);
    }
    
    const handleChange = async event => {
        // setUsername(event.target.value, setUser({ ...user, user: { 'username': username }}));
        setUser({ ...user, user: { 'username': event.target.value }});
        // console.log(user);
        // handleUser(username);
    };

    
    // async function handleLogin ( login ) {
    //     await setLogin(login);
    //     console.log(login);
    // }

    async function tryLogin ( ) {
        
        // console.log(username);
        // await setUser({ ...user, user: { 'username': username }});
        // await handleUser(username);
        console.log(user);
        
        try {  
            const response = await axios.post('https://pokedex20201.herokuapp.com/users/', user);
            //   const fetchedPokemons = response.data.data;
            //   setPokemons(fetchedPokemons);
            console.log(response);

            // handleLogin({
            //     ...login,
            //     status: true,
            //     method: response.statusText, 
            //     userId: response.data.user.id
            // });
            // return login;
        } catch (error) {
            setError(error.response.data);
            try {
                const response = await axios.get('https://pokedex20201.herokuapp.com/users/' + user.user.username);
                console.log(response);
                // handleLogin({
                //     ...login,
                //     status: true,
                //     method: response.statusText, 
                //     userId: response.data.user.id
                // });
                // return login;
            } catch {
                setError(error.response.data);
                // handleLogin({
                //     ...login,
                //     status: true,
                // });
                // return login;
            }
        }
        
    }

    // useEffect(() => {
    //     console.log(username);
    //     async function handleUser ( ) {
    //         await setUser({ ...user, user: { 'username': document.getElementById('username').value }});
    //         // setUser({ ...user, user: { 'username': username }});
    //     }
    //     handleUser();
    // }, [username]);

    const handleSubmit = async event => {
        event.preventDefault();
        tryLogin();
        
        localStorage.setItem('username', user.user.username);
        console.log(localStorage.user);
    }

    useEffect(() => {
        
        const loggedInUser = localStorage.getItem("username");
        console.log(loggedInUser);
        if (loggedInUser) {
            console.log(loggedInUser);

        //   const foundUser = JSON.parse(loggedInUser);
        // const foundUser = loggedInUser;
        //   console.log(foundUser);
            // setLoggedUser({...loggedUser, user: { 'username': loggedInUser}});
            setLoggedUser(...loggedUser, loggedInUser);
        }
    }, [loggedUser]);

    console.log(localStorage);
    console.log(loggedUser);

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

    if (loggedUser !== "null" && loggedUser !== "" && loggedUser != null) {
        return <div>{loggedUser} is loggged  in</div>;
    }

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