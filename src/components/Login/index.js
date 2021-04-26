import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import isAuthenticated from '../Authentication';
import './styles.css';

const Login = () => {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( event ) {
        this.setState({
            [event.target.name]: event.target.value;
        });
    }

    handleSubmit( event ) {
        const { username } = this.state;

        axios.post ("")
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
                <h1>Por favor, informe seu nome</h1>
                <form id="loginForm" onSubmit={this.handleSubmit}>
                    <label for="ulsernameLabe">
                        <p>Nome de usuário</p>
                        <input
                            type="text"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
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