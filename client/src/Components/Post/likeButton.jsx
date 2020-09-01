import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css';

class LikeButton extends Component {
    render() {
        return (
            <button>
                <div className={styles['like-cnt']}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </div>
            </button>
        )
    }
}

export default LikeButton;