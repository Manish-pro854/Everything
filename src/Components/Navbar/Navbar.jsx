import React from 'react'
import { LuClock } from "react-icons/lu";
import logo from "../../assets/logo.png"
import { CiLocationOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import border from "../../assets/border.svg"
import menu from "../../assets/menu.svg"
import { ImHome } from "react-icons/im";

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="grid grid-cols-3 md:grid-cols-[27%_73%] h-20 relative">

        <div className="h-52 w-52 -mt-40 md:h-70 md:w-70 md:-mt-50">
          <img src={logo} alt="logo" className='mt-23 md:mt-25'/>
        </div>
          
          <div className="hidden lg:flex items-center justify-between">
         <ul className='flex items-center justify-center gap-8 text-xl'>
            <li>Stores</li>
            <li>Events</li>
            <li>Offers</li>
            <li>Food+Drink</li>
            <li>News</li>
            <li>Center Information</li>
          </ul>
          <div className="flex items-center justify-center gap-5 mr-5">
             <LuClock className='text-3xl'/>
             <CiLocationOn className='text-3xl'/>
             <FaCartShopping className='text-3xl' />
          </div>
          </div> 

          <div className="flex items-center justify-center md:hidden gap-2 absolute left-[55%] top-6">
            <LuClock className='h-6 w-6'/>
            <CiLocationOn className='h-6 w-6'/>
            <ImHome className='h-6 w-6'/>
          </div>
          <div className="lg:hidden absolute right-5 top-5">
          <img src={menu} alt="menu" className='h-9 w-9'/>
          </div>
      </div>
        <img src={border} alt="border" className='h-2 w-screen object-cover block bg-amber-300'/>

        <div className="lg:hidden grid grid-cols-2 md:grid-cols-[40%_30%_30%] shadow-lg">
          <div className="flex items-center justify-center gap-2 col-span-2 md:col-auto p-1 md:p-3 border-b md:border-0 border-amber-200">
            <LuClock className='h-6 w-6 md:h-7 md:w-7 text-green-300'/>
            <h1 className='text-xl'>Open 9:00am - 5pm today</h1>
          </div>
          <div className="flex items-center justify-center gap-2 -mt- md:mt-0 p-1 md:p-3 border-r border-amber-200 md:border-x">
            <CiLocationOn className='h-6 w-6 md:h-7 md:w-7 text-green-300'/>
            <h1 className='text-xl'>Getting here</h1>
          </div>
          <div className="flex items-center justify-center gap-2 -mt- md:mt-0 p-1 md:p-3">
            <ImHome className='h-6 w-6 md:h-7 md:w-7 text-green-300'/>
            <h1 className='text-xl'>Find a store</h1>
          </div>
        </div>

    </div>
  )
}

export default Navbar
