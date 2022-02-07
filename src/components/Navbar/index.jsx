import React from 'react';
import NavLogo from '../../Images/logoNav.png';

const Navbar = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <>
      {/* <nav className=' bg-brand-color md:py-2 w-full'>
          <div className="container  w-10/12  mx-auto grid grid-cols-5 items-center gap-4 ">
            <div className="logo p-2 ">
                <img src={NavLogo} alt="" />
            </div>
            <div className="col-span-3">
                <ul className='flex flex-row justify-center gap-6 text-white text-xl cursor-pointer'>
                    <li >Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="search-container">
                    <form action=""className='flex flex-row shadow-xl'>
                    <input className='px-2 bg-brand-secondary-color text-white' type="text" placeholder="Search.." name="search"/>
                    <button type="submit" className='bg-primary-color p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    </form>
  </div>
          </div>
      </nav> */}

      <nav className="relative flex flex-wrap items-center justify-between bg-brand-color md:py-2 w-full">
        <div className="container px-4 w-10/10 md:w-10/12  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 "
              href="/"
            >
               <div className="logo p-2 ">
                <img src={NavLogo} alt="" />
            </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-col md:flex-row md:flex-grow items-center py-2 md:py-0" +
              (navbarOpen ? " flex" : " hidden")
            } 
    
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto" >
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                 About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  Contact
                </a>
              </li>

                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  Services
                </a>
              </li>

            </ul>
             <div className="search-container">
                    <form action=""className='flex flex-row shadow-xl'>
                    <input className='px-2 bg-brand-secondary-color text-white' type="text" placeholder="Search.." name="search"/>
                    <button type="submit" className='bg-primary-color p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    </form>
            </div>
          </div>

          
        </div>
      </nav>
      </>
  );
};

export default Navbar;
