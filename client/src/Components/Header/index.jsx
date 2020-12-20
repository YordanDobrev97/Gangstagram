import React from 'react'
import { Link, Router } from 'react-router-dom';
import history from '../../history';
import Search from '../Search/index';

import styles from './style.module.css'

class Header extends React.Component{
    render(){
        return(
           <header>
               <nav className="navigation">
                    <div className={styles["navigation-logo"]}>
                        <img src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/logo.png" />
                    </div>
                    <Search />
                </nav>

                <div className="profile-container">
                    <Router history={history}>
                        <Link to='profile'>My Profile</Link>
                    </Router>
                </div>
           </header>
        )
    }
}


export default Header;