import React from 'react';


const DogData=[
    {id:1,
    dogImg:'./Images/DogList1.png',
    oldPrice:'$50',
    newPrice:'$30'
},
  {id:2,
    dogImg:'./Images/DogList2.png',
    oldPrice:'$50',
    newPrice:'$30'
},
  {id:3,
    dogImg:'./Images/DogList3.png',
    oldPrice:'$50',
    newPrice:'$30'
}
]
const DogsList = () => {
  return(
      <>
        <div className="container w-full bg-brand-secondary-color min-h-screen flex flex-row py-2">
        <div className="w-10/12   pt-4 m-auto">
            <h2 className="text-7xl text-center text-white">Title Here</h2>
            <p className="text-3xl text-center text-white px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi dolores dolor! </p>
            <div className="my-6 pt-4 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {DogData.map(({id,dogImg,oldPrice,newPrice})=>(
                        
                        <div className="grid place-items-center cursor-pointer" key={id}>
                        <div className="w-80 h-80  rounded-sm overflow-hidden  justify-self-center">
                            <img src={dogImg} className=' h-80 w-80 delay-500 duration-500 hover:scale-125' alt="" />
                        </div>
                        <div className=" flex flex-row justify-center my-2 pt-2 mx-4">
                            <h4 className="text-3xl text-white text-center px-2 line-through">{oldPrice}</h4>
                            <p className="text-3xl text-white text-center px-6">{newPrice}</p>
                            
                        </div>
                        <button className='bg-primary-color rounded-full px-4  text-white h-12 w-28 hover:border-2 shadow-lg'>Buy Now</button>
                    </div>
                    ))}
                  
            </div>
            </div>
        </div>
        </div>
      </>
  );
};

export default DogsList;
