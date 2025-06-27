import React from 'react'
import StoreCard from '../Cards/StoreCard'
import noir from "../../assets/noir.jpg"
import burger from "../../assets/burger.webp"
import cake from "../../assets/cake.webp"
import coffee from "../../assets/coffee.webp"
import naturals from "../../assets/naturals.jpg"
import kiwi from "../../assets/kiwi.jpg"
import mango from "../../assets/mango.jpg"
import stoberi from "../../assets/stoberi.jpg"

const Food = () => {
  return (
    <div id="food" className="pt-45 md:pt-40 lg:pt-30">
      <h1 className="text-center text-6xl pb-5">Food & Drinks</h1>
      <ul className="flex flex-col gap-5 pb-10">
        
        <StoreCard logo={noir} title={"Cafe noir India"} discription={"Good food can trigger the right emotions in the mind of the beholder. That is exactly what we have promised and that is exactly what we are set out to deliver."} image1={burger} image2={coffee} image3={cake}/>

        <StoreCard logo={naturals} title={"Naturals Ice Cream – Real Fruit. Real Flavour."} discription={"Naturals Ice Cream, handcrafted since 1984, brings you 125+ pure fruit-based flavours made with just milk, sugar, and real fruits—celebrating tradition, simplicity, seasonal freshness, honest ingredients, and timeless taste in every scoop."} image1={mango} image2={stoberi} image3={kiwi}/>
       </ul>
    </div>
  )
}

export default Food
