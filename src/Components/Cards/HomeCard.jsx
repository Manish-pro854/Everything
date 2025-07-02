import React from 'react'


const HomeCard = ({image,discription,title,link}) => {
  return (
    <div className='flex flex-col items-start justify-center bg-white'>
      <div className="h-70 w-80 md:h-75 md:w-88 overflow-hidden">
              <img
                src={image}
                className="w-full h-full object-cover object-center"
                alt="Mall Background"
              />
            </div>
      <div className="py-3 px-6">
        <p className=''>{discription}</p>
        <h1 className='text-2xl font-[600] pt-1'>{title}</h1>
        <h2 className='pt-5 text-lg'>{link}</h2>
      </div>
    </div>
  )
}

export default HomeCard
