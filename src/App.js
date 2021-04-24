import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Header from './components/Header';


const initialPokemons = [ 
  {
    id: 1,
    name: 'teste',
    done: true
    //image_url: 'http://s2.glbimg.com/KV5eehME-_BD7QEL-W06_2swk4U=/s.glbimg.com/og/rg/f/original/2014/04/03/vemai_marca_1.jpg',
    //number: 'teste',
    //weight: 'teste',
    //height: 'teste',
    //kind: 'teste',
    //created_at: 'teste',
    //updated_at: 'teste'
  }
]

function App() {

  return (
    <div>
      <div className="pageHeader"><Header /></div>
      <BrowserRouter>
          <Route className="Home" exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;