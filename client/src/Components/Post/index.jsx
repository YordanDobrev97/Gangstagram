import React from 'react';

function Post(props) {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>
            <img src={props.post.imageUrl} />
        </div>
    )
}

export default Post;