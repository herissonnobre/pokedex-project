import Header from '../components/Header';
// import PageHeader from '../components/PageHeader';
import './styles.css';

export default function Home () {
    return <div id="home">
        {/* <PageHeader /> */}
        <div className="pageHeader"><Header /></div>
        <h1 id="pokemonSong">Pelo mundo viajarei<br />Tentando encontrar<br />Um Pokémon e com o seu poder<br />Tudo transformar<br />(...)<br />POKEMON!</h1>
    </div>
}