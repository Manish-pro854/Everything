import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../../Redux/Cartslice';

function CartCard({name,price,image,id}) {
  let dispatch=useDispatch()
  return (
    <div className='CartCard shadow-lg rounded-lg flex flex-col gap-5 md:flex-row items-center justify-between w-[85%] h-full p-4'>
      <div className="left-card flex flex-col md:flex-row items-center justify-center gap-4">
        <img src={image} alt="" className='w-70 h-75 md:w-55 md:h-60 min-w-55 min-h-60 rounded-md'/>
        <div className="name-price flex flex-col gap-2 text-xl">
          <span>{name}</span>
          <span>Rs {price}/-</span>
        </div>
      </div>
      <div className="right-card">
        <button className='bg-red-600 flex items-center justify-center gap-2 text-white text-xl border-0 rounded-xl cursor-pointer py-[10px] px-[20px] hover:opacity-[0.8]' onClick={()=>{
          dispatch(RemoveItem(id))
          alert("Product Remove succesfully..")
        }}>Remove <RiDeleteBin6Line /></button>
      </div>
    </div>
  )
}

export default CartCard
