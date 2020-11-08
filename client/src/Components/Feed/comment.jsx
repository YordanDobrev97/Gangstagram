import React, { Fragment } from 'react';
import './style.css';

function Comment() {
    return (
        <Fragment>
            <li class="photo__comment">
                <span class="photo__comment-author">serranoarevalo</span> love this!
            </li>
            <span class="photo__time-ago">2 hours ago</span>
        </Fragment>
    )
}

export default Comment;