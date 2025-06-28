import React from 'react'

const StoresCard = ({name,image,price}) => {
  return (
    <div id='Cartcards' className='w-[300px] h-[450px] bg-white flex items-center justify-between flex-col p-[20px] rounded-lg shadow-2xl text-[18px]'>
      <img src={image} className='w-[100%] max-h-[60%] rounded-lg' />
      <div id="product-details" className='flex items-start justify-start flex-col gap-[10px]'>
        <span className='name'>{name}</span>
        <span className="price">Rs {price}/-</span>
        <button className='text-white py-[10px] px-[20px] bg-[#191e22] border-0 cursor-pointer hover:opacity-[0.8] rounded-lg'>Add +</button>
      </div>
    </div>
  )
}

export default StoresCard
