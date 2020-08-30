import React, { Component } from 'react';
import { Link, Route, Switch, Router, Redirect } from 'react-router-dom'
import Login from '../Login/index';
import Register from '../Register/index';
import history from '../../history';
import Footer from '../Footer/index';
import Dashboard  from '../Dashboard/index';

class Home extends Component {
    
    render() {
        return (
            <Router history={history}>
                <Link to='/login'/>
                <Link to='/register'/>
                <Link to='/posts'/>
                <Link to='dashboard' />
                
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
        )
    }
}

export default Home;