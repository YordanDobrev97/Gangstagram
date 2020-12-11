import React, { Component } from 'react';
import StatusPosts from './statusPosts';
import StatusFollowers from './statusFollowers';
import StatusFollowing from './statusFollowing';

class ProfileStatus extends Component {
    render() {
        return (
            <ul>
                <StatusPosts />
                <StatusFollowers />
                <StatusFollowing />
            </ul>
        )
    }
}

export default ProfileStatus;