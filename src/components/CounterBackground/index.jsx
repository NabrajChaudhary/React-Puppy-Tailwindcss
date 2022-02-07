import React from 'react';
import CountUp from 'react-countup';

const counterDate=[
    {id:1,
    counterImg:'./Images/counterI1.png',
    counterNumber:'34793',
counterText:'Happy Clients'},
  {id:2,
    counterImg:'./Images/counterI2.png',
    counterNumber:'45382',
counterText:'Department'},
  {id:3,
    counterImg:'./Images/counter3.png',
    counterNumber:'54762',
counterText:'Vaccinations'}
]

const CounterBackground = () => {
  return (
      <>
    

         <div className=" counter-bg container w-full bg-white h-auto md:h-6/6 flex flex-row py-8">
        <div className=" md:w-10/12   py-8 m-auto">
           <div className="grid grid-cols-1  md:grid-cols-3  content-center py-8 gap-4 mt-6">
                {counterDate.map(({id,counterImg,counterNumber,counterText})=>(
                        <div className="grid place-items-center h-60 " key={id}>
                            <img src={counterImg} alt="" />
                            <h1 className='text-white text-4xl'>+ <span><CountUp end={counterNumber} duration={30}/></span></h1>
                            <h1 className="text-3xl text-white">{counterText}</h1>

                        </div>
                ))}
           </div>
            
        </div>
      </div>
      </>
  );
};

export default CounterBackground;
