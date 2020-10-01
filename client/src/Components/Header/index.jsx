import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css';
import Profile from '../Profile/index';

class Header extends Component {
    render() {
        return(
            <header className={styles.wrapper}>
                <div className={styles.camera}>
                    <FontAwesomeIcon icon={faCamera} />
                </div>

                <div className={styles['name-logo']}>
                    Gangstagram
                </div>

                <div className={styles.profile}>
                    <Profile />
                </div>
            </header>
        )
    }
}

export default Header;