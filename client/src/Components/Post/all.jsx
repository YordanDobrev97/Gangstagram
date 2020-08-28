import React, { useState, useEffect, Component } from 'react';
import Post from './index';

function Posts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(response => {
                setData(response.json());
            })
    }, [data]);

    return (
        <div>
            <h1>All Posts...</h1>

            {data.length > 0 && data.map(post => <Post post={post}/>)}
        </div>
    )
}

export default Posts;