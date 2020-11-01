import React,{ Component } from 'react';
import Header from '../Header/index';
import './style.css';
import Footer from '../Footer/index';
import Feed from './all';

class Feeds extends Component {
    render(){
        return(
            <div>
                <Header />
                
                <main id="feed">
                    <Feed></Feed>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Feeds;