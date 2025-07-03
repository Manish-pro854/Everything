import React from "react";
import aeri from "../../assets/aeri.png";
import american from "../../assets/american.png";
import aritzia from "../../assets/aritzia.png";
import athleta from "../../assets/athleta.png";
import aldo from "../../assets/aldo.jpg";
import OfferCard from "../Cards/OfferCard";
import salebg from "../../assets/sale-bg.jpg";

const Offers = () => {
  return (
    <div id="offers" className="pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={salebg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Sales & Offers</h1>
      <ul className="flex flex-col gap-5 pb-10">
        <OfferCard
          name={"AERI"}
          title={"Up to 70% Off Almost Everything Aerie"}
          discription={
            "Shop in store and get up to 70% off almost everything. Offers, availability and..."
          }
          link={"Valid from June 14, 2025 to July 3, 2025"}
          image={aeri}
        />

        <OfferCard
          name={"AERI"}
          title={"40% Off All Sports Bras"}
          discription={
            "Shop in store and take 40% off all sports bras for a limited time. Offers, avai..."
          }
          link={"Valid from June 24, 2025 to June 26, 2025"}
          image={aeri}
        />

        <OfferCard
          name={"ALDO"}
          title={"Vacay Vibes"}
          discription={
            "Whether you're chasing sunsets on the Amalfi Coast, strolling the streets of Par..."
          }
          link={"Valid from June 24, 2025 to June 30, 2025"}
          image={aldo}
        />

        <OfferCard
          name={"Aritzia"}
          title={"Summer Must-Have: Element Tube Top"}
          discription={
            "The Element Tube Top. Because your professional life looks different in the summ..."
          }
          link={"Valid from June 22, 2025 to June 28, 2025"}
          image={aritzia}
        />

        <OfferCard
          name={"AMERICAN EAGLE OUTFITTERS"}
          title={"Up to 40% off All Jeans and Shorts"}
          discription={
            "Shop in store today and get up to 40% off all jeans and shorts. Excludes: AE77 ..."
          }
          link={"Valid on June 26, 2025"}
          image={american}
        />

        <OfferCard
          name={"ATHLETA"}
          title={"Semi-Annual Sale Up to 70% Off"}
          discription={
            "Shop in store and get up to 70% off on sale items for a limited time. Some rest..."
          }
          link={"Valid from June 26, 2025 to June 28, 2025"}
          image={athleta}
        />
      </ul>
    </div>
  );
};

export default Offers;
