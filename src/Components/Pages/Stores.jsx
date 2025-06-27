import React from 'react'
import StoreCard from '../Cards/StoreCard'

const Stores = () => {
  return (
    <div id="stores" className="pt-45 md:pt-40 lg:pt-30">
      <h1 className="text-center text-6xl pb-5">Stores</h1>
      <ul className="flex flex-col gap-5 pb-10">
        <StoreCard title={"Addidas: Shoes, Clothing & More"} discription={"Get a fresh start with new shoes and new clothes at adidas. Be the first to catch the latest arrivals in all the trending colors and styles."}/>
      
      </ul>
    </div>
  )
}

export default Stores
