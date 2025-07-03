import React from "react";
import clockbg from "../../assets/clock-bg.jpg";

const Clock = () => {
  return (
    <div id="clock" className="pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={clockbg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="text-center">
        <h1 className="text-6xl pb-5">Opening hours</h1>
        <p className="text-2xl font-[400]">
          Please check individual retailers for specific trading hours.
        </p>
        <h1 className="text-3xl font-[500] pt-20 pb-8">Regular Hours</h1>
      </div>
      <ul className="flex flex-col mx-8 md:mx-10 lg:mx-20 text-xl">
        <li className="flex items-center justify-between border-y p-3">
          <h1>Mon - Fri</h1> <h1>10 AM - 9 PM</h1>
        </li>
        <li className="flex items-center justify-between p-3">
          <h1>Saturday</h1> <h1>9 AM - 10 PM</h1>
        </li>
        <li className="flex items-center justify-between border-y p-3">
          <h1>Sunday</h1> <h1>11 AM - 10 PM</h1>
        </li>
      </ul>
      <div className="mx-8 md:mx-10 lg:mx-20 text-xl pb-20">
        <h1 className="text-center text-3xl font-[500] pt-20 pb-8">
          Special hours
        </h1>
        <div className="flex items-center justify-between p-3 border-y">
          <h1>7/04 Friday</h1>
          <h1>10 AM - 10 PM</h1>
        </div>
      </div>
    </div>
  );
};

export default Clock;
