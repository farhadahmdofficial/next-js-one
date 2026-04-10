

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCrad = ({ food }) => {

    const { dish_name, image_link, category, price,id } = food;
    return (
        <div>
            <div className="card bg-yellow-900 border-2 border-white  shadow-sm">
                <figure>
                    <Image src={image_link}
                        alt={dish_name}
                        width={400} height={300} />




                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {dish_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className=' text-3xl font-bold text-red-500'>Category : {category}</p>
                    <p className=' text-3xl font-bold text-white'>Price  : $ {price}</p>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to crad </button>
                        <Link href={`/foods/${id}`}>
                            <button className="btn btn-ghost">Show details </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCrad;