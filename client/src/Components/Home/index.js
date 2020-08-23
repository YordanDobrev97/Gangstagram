import React, { Component } from 'react';
import Login from '../Login/index';
import Register from '../Register/index';
import styles from './style.module.css';

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
        const isRegister = this.state.isClickRegister;

        return (
            <div>
                {isRegister ? 
                <Register /> : 
                
                (
                    <div>
                        <Login />
                        <div className={styles['sub-content']}>
                            <div className={styles['s-part']}>
                                Don't have an account?
                                <button onClick={this.registerForm} className={styles['signupbtn']}>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;