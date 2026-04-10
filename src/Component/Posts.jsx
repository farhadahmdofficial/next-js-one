
'use client'
import React, { use } from 'react';

const Posts = ({postPromise}) => {

    const posts = use(postPromise)
    console.log(posts);
    return (
        <div>

            <h1 className='text-5xl'> Posts {posts.length}</h1>
            
        </div>
    );
};

export default Posts;