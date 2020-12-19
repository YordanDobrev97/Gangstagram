import React, { Component } from 'react'
import Input from '../Input/input'
import styles from '../Common/style.module.css'
import Cookies from 'universal-cookie'
import Feeds from '../Feed/index'
import { Redirect } from "react-router-dom"

import '../Common/input.css'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLooged: false,
            errorEmail: '',
            errorPassword: '',
            validUser: '',
        };
    }

    login = () => {
        const email = this.state.email;
        const password = this.state.password;

        if (!email) {
            this.setState({
               errorEmail: 'email is required',
               email: ''
            });
            return false;
        }
        
        if (!password) {
            this.setState({
                errorPassword: 'password is required',
                password: ''
             });
            return false;
        }

        const data = JSON.stringify({
           email,
           password
        });
        console.log(data);

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
        }).catch(result => {
            this.setState({
                validUser: 'not valid data'
            })
        });

        return true;
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
                    <div className={styles['l-part']}>
                        <Input type='text' className="input-field" name='email' placeholder="Email" onChange={this.getInputValue.bind(this)} />                       
                        
                        {this.state.errorEmail ?
                            <div style={{color: "red"}} >{this.state.errorEmail}
                            </div> :
                        null}
                        
                        <Input type="password" className="input-field" name='password' placeholder="Password" onChange={this.getInputValue.bind(this)} />
                        {this.state.errorPassword ?
                            <div style={{color: "red"}} >{this.state.errorPassword}
                            </div> :
                        null}
                        
                         {this.state.validUser ?
                            <div style={{color: "red"}} >{this.state.validUser}
                            </div> :
                        null}

                        <input type="button" className="standart-btn" value="Log in" onClick={this.login} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;