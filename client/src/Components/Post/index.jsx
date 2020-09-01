import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Profile from '../Profile/index';

function Post(props) {
    return (
        <div className={styles.container}>

            <Profile username={props.username} profileImg={props.profileImg}/>

            <main className={styles.imagePost}>
                {props.postData.map(data => {
                   return <div>
                        <img src={data.imageUrl} />
                        <p>{data.description}</p> 
                   </div>
                })}

            </main>

            <footer>
                <p>
                    <FontAwesomeIcon icon={faHeart} />
                     {props.likes}
                </p>
                
                <p><a href='#'>Comments</a></p>
            </footer>
        </div>
    )
}

export default Post;