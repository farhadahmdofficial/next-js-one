

import FoodCrad from '@/Component/FoodCrad';
import React from 'react';

const Foodpage =async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')

    const data = await res.json()
   const foods = data.data

  

   


    
    return (
        <div>
            <h2 className=' my-5 text-4xl text-center font-bold text-gray-300'>  Total Foods : {foods.length} </h2>

            <div className='grid grid-cols-3 gap-3 mt-5'>
                {foods.map(food => <FoodCrad key={food.id} food={food} />)}   
            </div>
        </div>
    );
};

export default Foodpage;