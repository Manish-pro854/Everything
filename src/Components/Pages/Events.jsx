import React from "react";
import EventCard from "../Cards/EventCard";
import jeep from "../../assets/jeep.jpg";
import yoga from "../../assets/yoga.jpg";
import trends from "../../assets/trends.jpg";
import concert from "../../assets/concert.png";
import music from "../../assets/music.jpg";
import eventsbg from "../../assets/events-bg.webp";

const Events = () => {
  return (
    <div id="events" className="pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={eventsbg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Events</h1>
      <ul className="flex flex-col gap-5 pb-10">
      <EventCard title={"INEOS Grenadier"} discription={"MileOne Autogroup presents the INEOS Grenadier -- the ultimate go-anywhere vehicle, whether you're n..."} link={"Ongoing"} image={jeep}/>

      <EventCard title={"Complimentary Workout Classes"} discription={"Kick off your weekend with complimentary fitness classes on select Saturdays and Sundays, featuring ..."} link={"Now through August 17, 2025"} image={yoga}/>

      <EventCard title={"MCM x Bloomingdale’s"} discription={"Join us for an exclusive in-store event, celebrating this season's hottest trends and latest arrival..."} link={"June 28, 2025 4:00 PM - 7:00 PM"} image={trends}/>

      <EventCard title={"SUMMER CONCERT"} discription={"Live on PenFed Plaza is DC's White Ford Bronco, a '90s cover band, featuring favorites across genres..."} link={"July 26, 2025 7:00 PM - 9:00 PM"} image={concert}/>

      <EventCard title={"Live Music"} discription={"Acoustic Duo Performances: May 30, June 13, June 27, July 4, July 1..."} link={"Now through August 29, 2025"} image={music}/>
      </ul>
    </div>
  );
};

export default Events;
