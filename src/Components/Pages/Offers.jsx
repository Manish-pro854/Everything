import React from 'react'
import aeri from "../../assets/aeri.png";
import OfferCard from '../Cards/OfferCard';

const Offers = () => {
  return (
    <div id="events" className="pt-45 md:pt-40 lg:pt-30">
      <h1 className="text-center text-6xl pb-5">Events</h1>
      <ul className="flex flex-col gap-5 pb-10">
      <OfferCard name={"AERI"} title={"Up to 70% Off Almost Everything Aerie"} discription={"Shop in store and get up to 70% off almost everything. Offers, availability and..."} link={"Ongoing"} image={aeri}/>

      <OfferCard title={"INEOS Grenadier"} discription={"MileOne Autogroup presents the INEOS Grenadier -- the ultimate go-anywhere vehicle, whether you're n..."} link={"Valid from June 14, 2025 to July 3, 2025"} image={aeri}/>
      </ul>
    </div>
  )
}

export default Offers
