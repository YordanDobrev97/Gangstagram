import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Input from '../Input/input';
import styles from '../Common/style.module.css';
import Image from '../Common/logo';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    register = () => {
       const email = this.state.email;
       const username = this.state.username;
       const password = this.state.password;
       const repeatPassword = this.state.repeatPassword;
    
       if (password !== repeatPassword) {
           return;
       }

       const data = JSON.stringify({
            email, 
            username, 
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

       fetch('https://localhost:5001/api/users/Register', requestOptions)
       .then(res => res.json())
       .catch(err => {
           console.log(err)
       })
       .then(data => {
           console.log(data);
       })
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
                    <Image className={styles.form}/>
                    
                    <div className={styles['l-part']}>
                        <Input type='text' name='email' placeholder="Email" style={styles['input-1']} onChange={this.getInputValue.bind(this)}/>

                        <Input type='text' name='username' placeholder="Username" style={styles['input-1']} onChange={this.getInputValue.bind(this)}/>

                        <div className={styles['overlap-text']}>
                            <Input type="password" name='password' placeholder="Password" style={styles['input-2']} onChange={this.getInputValue.bind(this)}/>
                        </div>
                        <div className={styles['overlap-text']}>
                            <Input type="password" name='repeatPassword' placeholder="repeatPassword" style={styles['input-2']} onChange={this.getInputValue.bind(this)} />
                        </div>

                        <Link to='/login'>
                            <button type='submit' className={styles.btn} onClick={this.register}>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;