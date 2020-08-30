import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Profile from '../Profile/index';

function Post(props) {
    return (
        <div className={styles.container}>
           <Profile />

            <main className={styles.imagePost}>
                <img src='https://www.w3schools.com/w3css/img_lights.jpg' />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </main>

            <footer>
                <p>
                    <FontAwesomeIcon icon={faHeart} />
                    495 likes
                </p>
                
                <p><a href='#'>Comments</a></p>
            </footer>
        </div>
    )
}

export default Post;