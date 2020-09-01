import React from 'react';
import styles from './style.module.css';

function Profile(props) {
    return (
        <header className={styles.imageProfile}>
            <img src={props.profileImg} />
            <p>{props.username}</p>
        </header>
    )
}

export default Profile;