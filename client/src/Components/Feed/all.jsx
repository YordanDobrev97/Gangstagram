import React, { Component } from 'react';

import './style.css';
import Avatar from './avatar';
import PhotoAction from './action';
import Comments from './comments';

class Feed extends Component{
    render() {
        return (
            <div class="photo">
                <Avatar />
                <img src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/feedPhoto.jpg" />
                
                <div class="photo__info">
                    <PhotoAction />
                    <Comments />
                </div>
            </div>
        )
    }
}

export default Feed;