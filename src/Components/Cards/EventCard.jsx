import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const EventCard = ({ title, discription, link, image }) => {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between mx-3 md:mx-20 border">
      <div className="flex flex-col items-start justify-center ml-3 pr-1">
        <h1 className="text-2xl font-[700]">{title}</h1>
        <p className="text-lg">{discription}</p>
        <h2 className="flex items-center justify-center pt-3 text-xl pb-2">
          {link}<FaAngleRight className="text-xl pt-1"/>
        </h2>
      </div>
      <div className="w-full md:max-w-[40%]">
        <img src={image} className="w-full h-60 md:h-64 object-cover"/>
      </div>
    </div>
  );
};

export default EventCard;
