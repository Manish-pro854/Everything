import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const OfferCard = ({ name, title, discription, link, image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] border md:mx-10 lg:mx-20">
          <div className="flex flex-col items-start justify-center md:ml-5 lg:mx-10 px-10 py-8 md:p-0 md:py-0">
            <h2 className='text-xl font-[700]'>{name}</h2>
            <h1 className="text-2xl font-[700]">{title}</h1>
            <p className="text-lg">{discription}</p>
            <h2 className="flex items-center justify-center pt-3 text-xl pb-2">
              {link}<FaAngleRight className="text-xl pt-1"/>
            </h2>
          </div>
          <div className="w-full mr-5 hidden md:block">
        <img src={image} className="object-cover h-60"/>
      </div>
        </div>
  )
}

export default OfferCard
