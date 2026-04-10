

import Posts from '@/Component/Posts';
import React, { Suspense } from 'react';

const  Postpage = () => {


    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())


    return (
        <div className='w-11/12 mx-auto mt-10'>
            <Suspense fallback={<h2>Loading...</h2>}>
            <Posts postPromise={postPromise}></Posts>

            </Suspense>
        </div>
    );
};

export default  Postpage;