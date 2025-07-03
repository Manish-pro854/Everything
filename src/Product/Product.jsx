import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItem } from '../Redux/Cartslice'

function Product({name,image,price,id}) {
  let dispatch = useDispatch()
  return (
    <div className="w-[300px] h-[450px] bg-white flex items-start justify-center gap-5 flex-col p-[20px] rounded-lg shadow-2xl text-[18px]">
      <img src={image} className="w-[100%] h-62 max-h-[90%] rounded-lg" />
      <div className="flex items-start justify-start flex-col gap-[10px]">
        <span className='name'>{name}</span>
        <span className="price">Rs {price}/-</span>
        <button className="text-white py-[10px] px-[20px] bg-[#191e22] border-0 cursor-pointer hover:opacity-[0.8] rounded-lg" onClick={()=>{
          dispatch(AddItem({name:name,image:image,price:price,id:id}))
          alert("Product Added succesfully..")
        }}>Add +</button>
      </div>
    </div>
  )
}

export default Product
