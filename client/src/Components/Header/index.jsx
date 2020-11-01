import React from 'react'
import Profile from '../Profile/index';

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
                    <div class="navigation__column">
                        <i class="fa fa-search"></i>
                        <input type="text" placeholder="Search" />
                    </div>
                </nav>

               <a href='#'>My Profile</a>
           </header>
        )
    }
}


export default Header;