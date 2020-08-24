import React, { Component } from 'react';
import { Link, Route, Switch, Router, BrowserRouter, Redirect } from 'react-router-dom'
import Login from '../Login/index';
import Register from '../Register/index';
import styles from './style.module.css';
import history from '../../history';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClickRegister: false
        }
    }

    registerForm = () => {
        this.setState({
            isClickRegister: true
        });
    }

    render() {
        const isClickRegister = this.state.isClickRegister;

        return (
            <Router history={history}>
                <Redirect from= '/' to='/login' />
                <Link to='/login'/>
                <Link to='/register'/>

                {/* <div>
                    { isClickRegister ? <Route path='/register' component={ Register }/> :
                    (
                        <div>
                            <Login />
                        </div>
                    )}
                </div> */}

                <Switch>
                    <Route path='/login'>
                        <Login />

                        <div className={styles['sub-content']}>
                            <div className={styles['s-part']}>
                                Don't have an account?

                                <Link to='/register'>
                                    <button onClick={this.registerForm} className={styles['signupbtn']}>Sign up</button>
                                </Link>
                            </div>
                        </div>
                    </Route>

                    <Route path='/register'>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Home;