import React, { Component } from 'react';
import { Link, Route, Switch, Router, BrowserRouter, Redirect } from 'react-router-dom'
import Login from '../Login/index';
import Register from '../Register/index';
import styles from './style.module.css';
import history from '../../history';
import Posts from '../Post/all';

class Home extends Component {
    
    render() {
        return (
            <Router history={history}>
                <Redirect from= '/' to='/login' />
                <Link to='/login'/>
                <Link to='/register'/>
                <Link to='/posts'/>
                
                <Switch>
                    <Route path='/login'>
                        <Login />

                        <div className={styles['sub-content']}>
                            <div className={styles['s-part']}>
                                Don't have an account?

                                <Link to='/register'>
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </Route>
                    
                    <Route path='/register'>
                        <Register />

                        <div className={styles['sub-content']}>
                            <div className={styles['s-part']}>
                                Back to Login?
                                <Link to='/login'>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </Route>

                    <Route path='/posts'>
                        <Posts />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Home;