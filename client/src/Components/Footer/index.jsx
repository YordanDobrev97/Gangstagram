import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/style.module.css';

function Footer(props) {
    return (
        <div className={styles['sub-content']}>
            <div className={styles['s-part']}>
                {props.message}

                <Link to={props.link}>
                    {props.action}
                </Link>
            </div>
        </div>
    )
}

export default Footer;