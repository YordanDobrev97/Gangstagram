import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Image from '../Common/image';
import styles from './style.module.css';

class Header extends Component {
    render() {
        return(
            <header className={styles.wrapper}>
                <div className={styles.camera}>
                    <FontAwesomeIcon icon={faCamera} />
                </div>

                <div className={styles.image}>
                    <Image className={styles.dashboard}/>
                </div>
            </header>
        )
    }
}

export default Header;