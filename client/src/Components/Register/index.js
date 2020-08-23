import React, { Component } from 'react';
import Input from '../Input/input';
import styles from '../Common/style.module.css';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    register = () => {
       const username = this.state.username;
       const password = this.state.password;
       const repeatPassword = this.state.repeatPassword;
    
    //    if (password !== repeatPassword) {
    //        return;
    //    }

       fetch('http://localhost:3001/create', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          mode: 'cors',
          cache: "no-cache",
          body: JSON.stringify(
               { username, 
                 password,
                 profileImg: "https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png",
                 followers: 0,
                 followed: 0
               })
       }).then(res => res.json())
         .then(result => {
             console.log(result);
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
                    <div className={styles.header}>
                        <img src="https://i.imgur.com/zqpwkLQ.png" />
                    </div>
                    <div className={styles['l-part']}>
                        <Input type='text' name='username' placeholder="Username" style={styles['input-1']} onChange={this.getInputValue.bind(this)}/>

                        <div className={styles['overlap-text']}>
                            <Input type="password" name='password' placeholder="Password" style={styles['input-2']} onChange={this.getInputValue.bind(this)}/>
                        </div>
                        <div className={styles['overlap-text']}>
                            <Input type="password" name='repeatPassword' placeholder="repeatPassword" style={styles['input-2']} onChange={this.getInputValue.bind(this)} />
                        </div>

                        <button type='submit' className={styles.btn} onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;