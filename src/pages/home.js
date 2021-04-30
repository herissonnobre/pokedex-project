import React from 'react';
// import FavImg from '../icons/HeartIcon_WB.svg';
import './styles.css';

const Home = props => {
    console.log(localStorage.username);
    
    return (
        <div id="home">
            <h1 id="pokemonSong">Pelo mundo viajarei<br />Tentando encontrar<br />Um Pokémon e com o seu poder<br />Tudo transformar<br />(...)<br />POKEMON!</h1>
        </div>
    );
};

export default Home;