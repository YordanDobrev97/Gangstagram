import React from 'react';
import Input from '../Input/input';
import styles from '../Common/style.module.css';

function Login() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles['main-content']} />
                <div className={styles.header}>
                    <img src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className={styles['l-part']}>
                    <Input type='text' name='username' placeholder="Username" style={styles['input-1']}/>

                    <div className={styles['overlap-text']}>
                        <Input type="password" name='password' placeholder="Password" style={styles['input-2']} />
                    </div>
                    <input type="button" value="Log in" className={styles.btn} />
                </div>
            </div>
        </div>
    )
}

export default Login;