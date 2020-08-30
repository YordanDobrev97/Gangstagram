import React from 'react';
import styles from './style.module.css';

function Profile() {
    return (
        <header className={styles.imageProfile}>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            <p>Pesho Georiev</p>
        </header>
    )
}

export default Profile;