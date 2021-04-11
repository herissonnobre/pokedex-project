import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Pokedex from './pages/pokedex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
