import React, { useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Pokedex from './pages/pokedex';
import ModalView from './components/ModalView';
import PokemonView from './components/PokemonView';
// import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import isAuthenticated from './components/Authentication';

import './routes.css';



// const PrivateRoute = ({ component: Component, ...rest }) => (  
    
//     <Route 
//         {...rest}
//         // render={props => ( 
//         render={ props  => (
//             isAuthenticated() 
//             ? (
//                 // <Children {...props} />
//                 <Component {...props} />
//             )
//             : (
//                 // <Redirect to={{ pathname: '/pokedex', state: { from: props.location } }} />
//                 <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//             )
//         )
//     }/>
// );  

const Routes = () => {
    // const [token, setToken] = useState();

    // const [login, setLogin] = useState({
    //     status: false
    // })
    
    let location = useLocation();

    let background = location.state && location.state.background;

    // if(!token) {
    //     return <Login setToken={setToken} />
    // }

    return (
        <div id="routes">
            <div className="pageHeader"><Header /></div>
            <Switch>
                <Route className="Home" exact path="/" component={Home} />
                <Route className="Pokedex" exact path="/pokedex" component={Pokedex} />
                {/* <Route className="PokemonInfo" path="/pokedex/:id" component={PokemonView} /> */}
                <Route className="Login" path="/login" component={Login} />
                {/* <PrivateRoute className="AuthRoute" path="/logged" component={() => <h1>Você está logado!</h1>} /> */}
            </Switch>

            {background && <Route path="/pokedex/:id" component={ModalView} />}
            {/* {background && <Route path="/login" component={Login} />} */}
        </div> 
    )
}

export default Routes;