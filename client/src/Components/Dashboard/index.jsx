import React,{ Component } from 'react';
import Header from '../Header/index';
import Posts from '../Post/all';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <Header />
                <Posts />
            </div>
        )
    }
}

export default Dashboard;