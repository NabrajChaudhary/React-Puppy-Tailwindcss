import React from 'react';


const cardData = [
    {
        id:1,
        imageData:"./Images/DocImages/Veterinarian.png",
        heading:"Veterinarian",
        textData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eveniet?",
    },
    {
        id:2,
        imageData:'./Images/DocImages/VaccinationCare.png',
        heading:"Vaccination Care",
        textData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eveniet?",
    },
    {
        id:3,
        imageData:"./Images/DocImages/DentalCare.png",
        heading:"Dental Care",
        textData:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eveniet?",
    },
]

const DoctorDog = () => {
  return (
      <>
       <div className="container w-full bg-brand-secondary-color min-h-screen flex flex-col md:flex-row py-2">
        <div className="w-12/12 md:w-10/12  pt-2 md:pt-4 m-auto">
            <h2 className="text-3xl md:text-7xl text-center text-white">Title Here</h2>
            <p className="text-2xl md:text-3xl text-center text-white px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi dolores dolor! </p>
            <div className="my-2 md:my-6 pt-4 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-6">
                     {cardData.map(({id,imageData,heading,textData})=>(
                         <div className="grid content-center cursor-pointer" key={id}>
                        <div className="w-64 h-64 md:w-80 md:h-80  rounded-sm overflow-hidden  justify-self-center">
                            <img src={imageData} className=' h-80 w-80 delay-500 duration-500 hover:scale-125' alt="" />
                        </div>
                        <div className="my-2 pt-2">
                            <h4 className="text-3xl text-white text-center px-2">{heading}</h4>
                            <p className="text-xl text-white text-center px-6">{textData}</p>
                            
                        </div>
                    </div>
                     ))}
                      
                 
                  
            </div>
            </div>
        </div>
        </div>
      </>
  );
};

export default DoctorDog;
