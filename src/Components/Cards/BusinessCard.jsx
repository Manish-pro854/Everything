import React from 'react'


const BusinessCard = ({ title, discription, image }) => {
  return (
     <div className="grid grid-cols-1 mx-5 md:grid-cols-[55%_45%] lg:grid-cols-[60%_40%] md:mx-10 lg:mx-20 border">
          <div className="flex flex-col items-start justify-center ml-3 pr-1 p-3">
            <h1 className="text-2xl font-[700]">{title}</h1>
            <p className="text-lg">{discription}</p>
          </div>
          <div className="w-full">
            <img src={image} className="w-full h-70 md:h-full lg:h-84 object-cover p-2"/>
          </div>
        </div>
  )
}

export default BusinessCard
