import React from 'react';
import Button from '../Button';
import ManWDog2 from '../../Images/ManWDog2.png';

const NextMultiCard = () => {
  return (
      <>
      <div className="container w-full bg-white  flex flex-row py-5 my-6">
           <div className="w-10/12  mx-auto flex flex-row items-center py-6 my-6 ">
               <div className="w-4/12  relative">
                    <img src={ManWDog2} alt="No-ImageFound"  className='w-96 h-96'/>
                     <div className="h-96 w-96 bg-brand-color gird absolute top-0 left-0 opacity-75 flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className=" m-auto h-20 w-20 cursor-pointer hover:ring-primary-color hover:rounded-full  hover:ring-2 bg-transparent text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                     </div>
              
            </div>
               <div className="w-7/12 px-4">
                <h2 className="text-6xl tracking-wide font-medium text-black px-2 text-right">As a veterinarian and lover of animals.</h2>
                <p className='text-3xl px-2  my-6 text-black text-right'>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words.</p>
                <div className="flex justify-end">
                    <Button  btnTitle="Contact Us" cName="bg-brand-secondary-color rounded-sm text-white"/>
                   
                </div>
            </div>
            
           </div>
          
      </div>
      </>
  );
};

export default NextMultiCard;
