

import React from 'react';

const Name = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todes = await data.json()


    return (


        <div className=' w-11/12 mx-auto mt-10'>

            {todes.length}

            {todes.map(tode => (
                <div key={tode.id}>
                    <h2>{tode.title}</h2>
                </div>
            ))}

        </div>
    );
};

export default Name;