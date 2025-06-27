import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import addidas from "../../assets/addidas.svg"
import shoes from "../../assets/shoes.jpg"
import socks from "../../assets/socks.jpg"
import tshirt from "../../assets/tshirt.jpg"

const StoreCard = ({ logo, title, discription, image1, image2, image3 }) => {
  return (
    <div className="border flex flex-col gap-5 py-3 mx-5 md:mx-10 lg:mx-15">
      <div className="flex items-center justify-center mx-2 md:mx-10 gap-2 md:gap-5 pt-5 md:pt-0">
        <img src={logo} alt="" className='h-15 md:h-20'/>
      <h2 className='font-[700] text-2xl'>{title}</h2>
      </div>
      <p className='mx-6 md:mx-15 font-[500] text-md md:-mt-3 pb-5 md:pb-0'>{discription}</p>
      <div className="hidden md:flex flex-wrap items-center justify-center gap-5 w-full">
        <img src={image1} className='object-cover h-70 w-70'/>
        <img src={image2} className='object-cover h-70 w-70'/>
        <img src={image3} className='object-cover h-70 w-70'/>
      </div>
    </div>
  )
}

export default StoreCard
