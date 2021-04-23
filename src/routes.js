import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Pokedex from './pages/pokedex';

import './routes.css';

export const Routes = () => {
    return (
        <div id="routes">
            <div className="pageHeader"><Header /></div>
            <Switch>
                <Route className="Home" exact path="/" component={Home} />
                <Route className="Pokedex" exact path="/pokedex" component={Pokedex} />
            </Switch>
        </div> 
    )
}