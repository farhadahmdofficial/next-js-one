
'use client'
import React, { useState } from 'react';




const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div>

            <h2 className="text-2xl font-bold">Counter : {count}</h2>


            <button className='btn  btn-success w-60 font-boldp-8 bg-amber-300 mt-3 rounded-2xl text-green-900' onClick={()=> setCount(count + 1)}>
                Add Count
            </button>
        </div>
    );
};

export default Counter;