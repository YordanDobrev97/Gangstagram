import React,{ Component } from 'react';
import Header from '../Header/index';
import Posts from '../Post/all';
import Users from './users';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <Header />
                <Posts />
                <Users />
            </div>
        )
    }
}

export default Dashboard;