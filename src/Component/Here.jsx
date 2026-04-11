





import Image from 'next/image';
import React from 'react';

const Here = () => {
    return (
        <div className=' w-11/12  mt-10 flex flex-col justify-center items-center mx-auto'> 


     
         <h1 className='text-4xl text-green-600 font-extrabold mb-3 mt-5'>Here is Food  </h1>
        <h4 className='text-4xl text-[#6ae11b] font-extrabold  text-center mb-3 mt-5 '>Discover Your Next Favorite Meal Today Order Now and Experience Culinary Perfection.</h4>
    


         
            <Image className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYd_Dklw7PMUKDzpgHTGdy4P1BBWdPT9NfVQ&s"
                alt='paris'
                width={800}
                height={300}
            />
            
        </div>
    );
};

export default Here;
