import React from 'react';
import Navbar from '../Navbar';
import heroImg from '../../Images/HeroPuppy.png'
import Button from '../Button';

const Hero = () => {
  return (
      <>
    <Navbar/>
      <div className="container w-full bg-brand-secondary-color min-h-screen flex flex-row py-2">
        <div className="w-12/12 md:w-10/12  mx-auto flex flex-col-reverse md:flex-row items-center pt-4">
            <div className="w-12/12 md:w-7/12 px-2 md:px-4 ">
                <h2 className="text-4xl md:text-7xl font-medium text-white px-2">First I wanted to be a veterinarian </h2>
                <p className='text-3xl px-2  my-6 text-white'>Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words.</p>
                <div className=" flex items-center my-4 mx-1">
                    <Button btnTitle="Contact Us" cName="bg-primary-color text-white"/>
                    <Button btnTitle="Our Services" cName="text-white border-2 border-white"/>
                </div>
            </div>
            <div className="w-12/12 md:w-5/12 m-auto">
                <img src={heroImg} alt="" className='object-cover' />
            </div>
        </div>
          

      </div>
      </>
  );
};

export default Hero;
