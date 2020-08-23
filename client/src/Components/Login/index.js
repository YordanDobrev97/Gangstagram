import React from 'react';
import styles from './style.module.css';

function Login() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles['main-content']} />
                <div className={styles.header}>
                    <img src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className={styles['l-part']}>
                    <input type="text" name='username' placeholder="Username" className={styles['input-1']} />
                <div className={styles['overlap-text']}>
                    <input type="password" name='password' placeholder="Password" className={styles['input-2']} />
                    <a href="#">Forgot?</a>
                </div>
                <input type="button" value="Log in" className={styles.btn} />
            </div>

            <div className={styles['sub-content']}>
                <div className={styles['s-part']}>
                    Don't have an account?<a href="#">Sign up</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;