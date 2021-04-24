import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../Authentication';

// const PrivateRoute = ({ component: Component, ...rest }) => {
const PrivateRoute = ({ component: Component, ...rest }) => (  

    <Route 
        {...rest}
        // render={props => ( 
        render={ props  => (
            isAuthenticated() 
            ? (
                // <Children {...props} />
                
                <Component {...props} />
            )
            : (
                // <Redirect to={{ pathname: '/pokedex', state: { from: props.location } }} />
                
                <Redirect to={{ pathname: '/pokedex', state: { from: props.location } }} />
            )
        )
    }/>
);    

export default PrivateRoute;