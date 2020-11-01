import React from 'react'

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
           </header>
        )
    }
}


export default Header;