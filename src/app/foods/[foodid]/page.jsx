import Image from "next/image";



const FoodDetailpage = async({params}) => {

    const {foodid}= await params ;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`);
    const data =await res.json();
    const {id,dish_name ,image_link, main_ingredients}= data.data;
   

    return (
        <div className="mt-10">

           <div className=" border-3 rounded-2xl border-[#5252f1] flex gap-9  shadow-2xl itens-center p-5">
             <Image src={image_link} alt={dish_name} width={400} height={300} />
           <div className=" text-3xl my-auto space-y-3">
            <h3 className="text-gray-100">Food Name : {dish_name}</h3>
           

            
            <h1 className="text-5xl text-[#1531e3]">Dish Name: {dish_name}</h1>


            <ul> {main_ingredients.map(main=><li>{main}</li>)}  </ul>
           
           </div>
           </div>
        </div>
    );
};

export default FoodDetailpage;