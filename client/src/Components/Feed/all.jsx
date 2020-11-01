import React, { Component } from 'react';
import './style.css';

class Feed extends Component{
    render() {
        return (
            <div class="photo">
                <header class="photo__header">
                    <img src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" class="photo__avatar" />
                        <div class="photo__user-info">
                            <span class="photo__author">inthetiger</span>
                            <span class="photo__location">Bestechung</span>
                        </div>
                </header>
                <img src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/feedPhoto.jpg" />
                
                <div class="photo__info">
                    <div class="photo__actions">
                        <span class="photo__action">
                            <i class="fa fa-heart-o fa-lg"></i>
                        </span>
                        <span class="photo__action">
                            <i class="fa fa-comment-o fa-lg"></i>
                        </span>
                    </div>
                    <span class="photo__likes">45 likes</span>
                        <ul class="photo__comments">
                            <li class="photo__comment">
                                <span class="photo__comment-author">serranoarevalo</span> love this!
                            </li>
                            <li class="photo__comment">
                                <span class="photo__comment-author">serranoarevalo</span> love this!
                            </li>
                            <li class="photo__comment">
                                <span class="photo__comment-author">serranoarevalo</span> love this!
                            </li>
                            <li class="photo__comment">
                                <span class="photo__comment-author">serranoarevalo</span> love this!
                            </li>
                        </ul>
                        <span class="photo__time-ago">2 hours ago</span>
                            <div class="photo__add-comment-container">
                                <textarea name="comment" placeholder="Add a comment..."></textarea>
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                </div>
            </div>
        )
    }
}

export default Feed;