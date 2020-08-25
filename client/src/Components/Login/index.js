import React, { Component } from 'react';
import Input from '../Input/input';
import styles from '../Common/style.module.css';
import Cookies from 'universal-cookie';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    login = () => {
        const email = this.state.email;
        const password = this.state.password;

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*'
           },
           mode: 'cors',
           body: JSON.stringify({
                email,
                password
           })
        }).then(response => response.json())
        .then(userId => {
            const cookie = new Cookies();
            cookie.set('user', userId);
        });
    }

    getInputValue = (name, value) => {
        this.setState({
           [name]: value
        })
    }

    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles['main-content']} />
                    <div className={styles.header}>
                        <img src="https://i.imgur.com/zqpwkLQ.png" />
                    </div>
                    <div className={styles['l-part']}>
                        <Input type='text' name='email' placeholder="Email" style={styles['input-1']} onChange={this.getInputValue.bind(this)}/>

                        <div className={styles['overlap-text']}>
                            <Input type="password" name='password' placeholder="Password" style={styles['input-2']} onChange={this.getInputValue.bind(this)} />
                        </div>
                        <input type="button" value="Log in" className={styles.btn} onClick={this.login}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;