

import FoodCrad from '@/Component/FoodCrad';
import React from 'react';

const Foodpage =async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')

    const data = await res.json()
   const foods = data.data

   console.log(foods);

   


    
    return (
        <div>
            <h2 className=' text-4xl'> Foods Leanght  {foods.length} </h2>

            <div className='grid grid-cols-3 gap-3 mt-5'>
                {foods.map(food => <FoodCrad key={food.id} food={food} />)}   
            </div>
        </div>
    );
};

export default Foodpage;