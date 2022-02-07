import React from 'react';
import DogMan1 from '../../Images/ManWDog.png'
import Button from '../Button';

const MultiCardBox = () => {
  return (
      <>
      <div className="container w-full bg-white  flex flex-row justify-center py-4 md:py-5 my-6">
           <div className="w-12/12 md:w-10/12  mx-auto flex flex-col-reverse md:flex-row items-center py-4 md:py-6 my-4 md:my-6 ">
               <div className="w-12/12 md:w-7/12 my-4 md:my-0  px-2 md:px-4">
                <h2 className=" text-3xl md:text-6xl tracking-wide font-medium text-black px-1 md:px-2">As a veterinarian and lover of animals.</h2>
                <p className='text-2xl md:text-3xl px-2 my-2 md:my-6 text-black'>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words.</p>
                <div className=" flex items-center my-2 md:my-4 mx-1">
                    <Button  btnTitle="Contact Us" cName="bg-brand-secondary-color rounded-sm text-white"/>
                   
                </div>
            </div>
            <div className=" w-12/12 md:w-4/12  relative">
                    <img src={DogMan1} alt=""  className='w-64 h-64 md:w-96 md:h-96'/>
                     <div className="w-64 h-64 md:h-96 md:w-96 bg-brand-color gird absolute top-0 left-0 opacity-75 flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className=" m-auto h-20 w-20 cursor-pointer hover:ring-primary-color hover:rounded-full  hover:ring-2 bg-transparent text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                     </div>
              
            </div>
           </div>
          
      </div>
      </>
  );
};

export default MultiCardBox;
