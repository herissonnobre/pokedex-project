import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';
import Pokedex from './pages/pokedex';
import PokemonView from './components/PokemonView';
import Login from './components/Login';

import './routes.css';

const Routes = () => {
    
    let location = useLocation();

    let background = location.state && location.state.background;

    return (
        <div id="routes">
            <div className="pageHeader"><Header/></div>
            <Switch>
                <Route className="Home" exact path="/" component={Home} />
                <Route className="Pokedex" exact path="/pokedex" component={Pokedex} />
            </Switch>

            {background && <Route path="/pokedex/:id" component={PokemonView} />}
            {background && <Route path="/login" component={Login} />}
        </div> 
    )
}

export default Routes;