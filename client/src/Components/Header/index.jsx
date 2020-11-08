import React from 'react'
import { Link, Router } from 'react-router-dom';
import history from '../../history';
import Search from '../Search/index';

class Header extends React.Component{
    render(){
        return(
           <header>
               <nav class="navigation">
                    <div class="navigation__column">
                        <a href="feed.html">
                            <img src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/logo.png" />
                        </a>
                    </div>
                    <Search />
                </nav>
            
               <Router history={history}>
                   <Link to='profile'>My Profile</Link>
               </Router>
           </header>
        )
    }
}


export default Header;