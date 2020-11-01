import React from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import Login from './Components/Login/index';
import Register from './Components/Register/index';
import history from './history';
import Footer from './Components/Footer/index';
import Dashboard  from './Components/Feed/index';
import Home from './Components/Home/index';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router history={history}>
                <Link to='/login'/>
                <Link to='/register'/>
                <Link to='/posts'/>
                <Link to='dashboard' />
                
                <Home />

                <Switch>
                    <Route path='/login'>
                        <Login />
                        <Footer message={'Don\'t have an account?'} link='/register' action='Sign up'/>                        
                    </Route>
                    
                    <Route path='/register'>
                        <Register />
                        <Footer message={'Back to Login?'} link='/login' action='Login'/>
                    </Route>

                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;
