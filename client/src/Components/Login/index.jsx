import React, { Component } from 'react';
import Input from '../Input/input';
import styles from '../Common/style.module.css';
import Cookies from 'universal-cookie';
import Image from '../Common/logo';
import Feeds from '../Feed/index'
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLooged: false
        };
    }

    login = () => {
        const email = this.state.email;
        const password = this.state.password;

        const data = JSON.stringify({
           email,
           password
        });
       const requestOptions = {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true
           },
           body: data
       };

       fetch('https://localhost:5001/api/users/Login', requestOptions)
       .then(res => {
           return res.json()
       })
        .then(userId => {
            const cookie = new Cookies();
            cookie.set('user', userId);
            this.setState({
                isLooged: true
            })
        });
    }
    
    getInputValue = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const isLooged = this.state.isLooged;
       
        if (isLooged) {
            return (
                <React.Fragment>
                    <Redirect to='/feeds'/>
                    <Feeds />
                </React.Fragment>
            )
        }

        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles['main-content']} />
                    <Image className={styles.form}/>
                    <div className={styles['l-part']}>
                        <Input type='text' name='email' placeholder="Email" style={styles['input-1']} onChange={this.getInputValue.bind(this)} />

                        <div className={styles['overlap-text']}>
                            <Input type="password" name='password' placeholder="Password" style={styles['input-2']} onChange={this.getInputValue.bind(this)} />
                        </div>
                        <input type="button" value="Log in" className={styles.btn} onClick={this.login} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;