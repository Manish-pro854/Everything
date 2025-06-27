import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import addidas from "../../assets/addidas.svg"
import shoes from "../../assets/shoes.jpg"
import socks from "../../assets/socks.jpg"
import tshirt from "../../assets/tshirt.jpg"

const StoreCard = ({ title, discription, image }) => {
  return (
    <div className="border flex flex-col gap-5 py-3 mx-5 md:mx-10 lg:mx-15">
      <div className="flex items-center justify-center mx-2 md:mx-10 gap-2 md:gap-5">
        <img src={addidas} alt="" className='h-20'/>
      <h2 className='font-[700] text-2xl'>Addidas: Shoes, Clothing & More</h2>
      </div>
      <p className='mx-6 md:mx-15 font-[500] text-md -mt-3'>Get a fresh start with new shoes and new clothes at adidas. Be the first to catch the latest arrivals in all the trending colors and styles.</p>
      <div className="flex flex-wrap items-center justify-center gap-5 w-full">
        <img src={shoes} alt=""  className='object-cover h-70'/>
        <img src={socks} alt=""  className='object-cover h-70'/>
        <img src={tshirt} alt=""  className='object-cover h-70'/>
      </div>
    </div>
  )
}

export default StoreCard
