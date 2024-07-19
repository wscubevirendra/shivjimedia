import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/services" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div style={{ zIndex: 10000 }} className='shadow-md bg-[#0F0520]  w-full  fixed top-0 left-0'>
      <div className='md:flex bg-[#0F0520] items-center justify-between  py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>

          <img src="images/logo.jpg" alt="logo" />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0F0520] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to={link.link} className='text-[white] hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ms-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> 
            Chat Now
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Nav
