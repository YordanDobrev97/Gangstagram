import React, { Component } from 'react';
import styles from './style.module.css';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const data = await fetch('http://localhost:3001/user/all').then(r => r.json()); 
        this.setState({
            users: data
        })
    }

    render() {
        const users = this.state.users.map(user => {
            return (
                <div className={styles['aside-container']}>
                    <div>
                        <img src={user.profileImg} />
                    </div>
                    <button className={styles.user}>View profile</button>
                </div>
            )
        })
        return (
            <div className={styles.container}>
                {users}
            </div>
        )
    }
}

export default Users;