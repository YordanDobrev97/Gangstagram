import React, { Fragment } from 'react';
import ProfileImage from './profileImage';
import ProfileSettings from './profileSettings';
import ProfileStatus from './profileStatus';
import Bio from './profileBio';
import Posts from '../Post/all';
import './style.css';

function Profile(props) {
    return (
        <Fragment>
            <header>
                <div class="container">
                    <div class="profile">
                        <ProfileImage />
                        <ProfileSettings />
                        <ProfileStatus />
                    </div>
                    <Bio />
                </div>
            </header>

            <Posts />
    </Fragment>
    );
}

export default Profile;