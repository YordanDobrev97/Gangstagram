import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Image from '../Common/logo';
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
                    {/* <Image className={styles.dashboard} /> */}
                </div>

                <button>Create post</button>

                <div className={styles.profile}>
                    <Profile />
                </div>
            </header>
        )
    }
}

export default Header;