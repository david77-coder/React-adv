import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { routes } from './routes';
import logo from '../logo.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from  './01-lazyload/pages/';
import {  Suspense } from 'react';


export const Navigation = () => {
  return (
  <Suspense fallback={ null}> 

  
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map( ({ to, path,namespace }) => (
                <li key={ path }>
                  <NavLink to={ path } activeClassName="nav-active" exact>{ namespace }</NavLink>
                </li>
              ))  
            }
         
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         {
              routes.map( (route) => (
                <Route 
                key={route.path} 
                path={ route.path }
                render={ () => <route.Component /> }
                
                />
              ))  
            }

        </Switch>
      </div>
    </Router>

    </Suspense>
  );
}