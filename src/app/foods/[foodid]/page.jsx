import Image from "next/image";



const FoodDetailpage = async({params}) => {

    const {foodid}= await params ;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`);
    const data =await res.json();
    const {id,dish_name ,image_link}= data.data;
   

    return (
        <div className="mt-10">

           <div className=" border-3 rounded-2xl border-amber-200 flex gap-9  itens-center p-5">
             <Image src={image_link} alt={dish_name} width={400} height={300} />
           <div className=" text-3xl my-auto space-y-3">
            <h3 className="text-gray-100">Food Name : {dish_name}</h3>
           

            
            <p className="text-3xl text-red-300">Dish Name: {dish_name}</p>
           </div>
           </div>
        </div>
    );
};

export default FoodDetailpage;