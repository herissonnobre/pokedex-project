import { match, useParams, useHistory, useLocation } from 'react-router-dom';

    
const ModalView = () => {
    
    let history = useHistory();
    let { id } = useParams();
    
    let states = useLocation();
    const pokemonArray = states.state.pokemonArray;
    const index = parseInt(id, 10);
    const clickedPokemon = pokemonArray.find(pokemon => pokemon.id === index);

    console.log(id);
    console.log(history);

    if (!clickedPokemon)
        return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
            className="modal"
            style={{
                position: "absolute",
                background: "#fff",
                top: 25,
                left: "10%",
                right: "10%",
                padding: 15,
                border: "2px solid #444"
            }}
            >
                <h1>{clickedPokemon.name}</h1>
                <img src={clickedPokemon.image_url} alt={clickedPokemon.name} />
                <p>Tipo: {clickedPokemon.kind}</p>
                <p>Número: {clickedPokemon.number}</p>
                <p>Peso: {clickedPokemon.weight}</p>
                <p>Altura: {clickedPokemon.height}</p>
            <button type="button" onClick={back}>
                Close
            </button>
            </div>
        </div>
    );
};

export default ModalView;