import React from 'react'
import map from "../../assets/map.png"

const Location = () => {
  return (
    <div id='map' className="pt-42 md:pt-40 lg:pt-21 flex flex-col gap-5 items-center justify-center mb-10">
      <h1 className="text-center text-5xl md:text-6xl pb-5">Center Map</h1>
      <div className="h-screen md:w-[90vw] px-2">
      <img src={map} className='h-full w-full' />
      </div>
    </div>
  )
}

export default Location
