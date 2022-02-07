import React from 'react';

const recentPdata = [
    {id:1,
    recentImg:'./Images/recentImg1.png',
    recentHeader:'As a lover of animal and veterinarian',
    recentDate:'FEBRUARY 01, 2022',
    recentText:`Lorem Ipsum available, but the majo
rity have suffered alteration in some words which look.`,
},
   {id:2,
    recentImg:'./Images/recentImg2.png',
    recentHeader:'As a lover of animal and veterinarian',
    recentDate:'FEBRUARY 01, 2022',
    recentText:`Lorem Ipsum available, but the majo
rity have suffered alteration in some words which look.`,
},
   {id:3,
    recentImg:'./Images/recentImg3.png',
    recentHeader:'As a lover of animal and veterinarian',
    recentDate:'FEBRUARY 01, 2022',
    recentText:`Lorem Ipsum available, but the majo
rity have suffered alteration in some words which look.`,
}

]
const RecentPosts = () => {
  return (
      <>
        <div className="container w-full bg-white min-h-screen flex flex-row py-2">
        <div className="w-10/12   pt-4 m-auto">
            <h2 className="text-7xl text-center text-black">Recent Post</h2>
            <p className="text-3xl text-center text-black px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi dolores dolor! </p>
            <div className="my-6 pt-4 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {recentPdata.map(({id,recentImg,recentHeader,recentDate,recentText})=>(
                        <div className='grid place-items-center cursor-pointer shadow-lg py-6 m-2' key={id}>
                            <div className="w-92 h-92  rounded-sm overflow-hidden  justify-self-center">
                            <img src={recentImg} className=' h-92 w-92 delay-500 duration-500 hover:scale-125' alt="" />
                        </div>
                        <div className=" my-2 pt-4 mx-2">
                            <h4 className="text-3xl font-bold text-black text-left px-1 py-2">{recentHeader}</h4>
                            <p className="text-xl font-semibold text-primary-color text-left px-1 py-2">{recentDate}</p>
                            <p className="text-black text-left px-1 py-6">{recentText}</p>
                            <a href="/" className='text-2xl font-bold text-primary-color px-1 py-4'>Read More+</a>
                            
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

export default RecentPosts;
