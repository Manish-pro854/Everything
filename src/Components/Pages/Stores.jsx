import React from 'react'
import StoreCard from '../Cards/StoreCard'
import addidas from "../../assets/addidas.svg"
import shoes from "../../assets/shoes.jpg"
import socks from "../../assets/socks.jpg"
import tshirt from "../../assets/tshirt.jpg"
import titan from "../../assets/titan.svg"
import cosmatic from "../../assets/cosmatic.svg"
import facewash from "../../assets/facewash.jpg"
import hair from "../../assets/hair.jpg"
import skin from "../../assets/skin.jpg"
import women from "../../assets/women.jpg"
import apple from "../../assets/apple.jpg"
import bluetooth from "../../assets/bluetooth.png"
import iphone16 from "../../assets/iphone16.jpg"
import mac from "../../assets/mac.jpeg"
import men from "../../assets/men.jpg"
import digital from "../../assets/digital.jpg"
import toys from "../../assets/toys.webp"
import car from "../../assets/car.jpeg"
import barbie from "../../assets/barbie.webp"
import ironmen from "../../assets/ironmen.webp"

const Stores = () => {
  return (
    <div id="stores" className="pt-45 md:pt-40 lg:pt-30">
      <h1 className="text-center text-6xl pb-5">Stores</h1>
      <ul className="flex flex-col gap-5 pb-10">

        <StoreCard logo={addidas} title={"Addidas: Shoes, Clothing & More"} discription={"Get a fresh start with new shoes and new clothes at adidas. Be the first to catch the latest arrivals in all the trending colors and styles."} image1={shoes} image2={socks} image3={tshirt}/>

        <StoreCard logo={titan} discription={"Titan Quartz Analog with Date Blue Dial Stainless Steel Strap, Gradient Dial & Sleek Markings with Leather Strap, Date Black Dial Black Metal Strap and Digital watches for All."} image1={men} image2={women} image3={digital}/>

        <StoreCard logo={toys} title={"Hamleys India – Where Every Toy Tells a Story"} discription={"Discover the magic of play at Hamleys India — the ultimate destination for toys, games, and childhood wonder. From timeless classics to the latest trends, Hamleys offers a world of imagination, learning, and fun for kids of all ages. Shop the joy. Experience the magic."} image1={ironmen} image2={barbie} image3={car}/>

        <StoreCard logo={apple} title={"AppleStore.The best way to buy the products you love."} discription={"A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00."} image1={iphone16} image2={mac} image3={bluetooth}/>

        <StoreCard logo={cosmatic} title={"Nykaa - Buy Cosmetics Products & Beauty Products"} discription={"Nykaa is India’s leading omnichannel beauty, fashion, and lifestyle platform that empowers every individual to shine through curated, authentic products, expert content, and seamless digital-to-store experiences"} image1={facewash} image2={hair} image3={skin}/>
      </ul>
    </div>
  )
}

export default Stores
