import React, { Component } from 'react';

class ProfileSettings extends Component {
    render() {
        return (
            <div class="profile-user-settings">
                <h1 class="profile-user-name">janedoe_</h1>
                <button class="btn profile-edit-btn">Edit Profile</button>
                <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default ProfileSettings;