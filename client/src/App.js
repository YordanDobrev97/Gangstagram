import React from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import Login from './Components/Login/index';
import Register from './Components/Register/index';
import history from './history';
import Footer from './Components/Footer/index';
import Feeds  from './Components/Feed/index';
import Home from './Components/Home/index';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router history={history}>
                <Link to='/login'/>
                <Link to='/register'/>
                <Link to='/posts'/>
                <Link to='feeds' />
                
                <Home />

                <Switch>
                    <Route path='/login'>
                        <Login />
                        <Footer />
                        Don't have an account?
                        <Link to='/register'>
                            Sign up
                        </Link>                  
                    </Route>
                    
                    <Route path='/register'>
                        <Register />
                        <Footer message={'Back to Login?'} link='/login' action='Login'/>
                        Back to login?
                        <Link to='/login'>
                           Login
                        </Link>   
                    </Route>

                    <Route path='/feeds'>
                        <Feeds />
                    </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;
