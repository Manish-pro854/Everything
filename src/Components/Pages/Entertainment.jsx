import React from "react";
import StoreCard from "../Cards/StoreCard";
import movie from "../../assets/movie.svg";
import movie1 from "../../assets/movie1.jpg";
import movie2 from "../../assets/movie2.jpg";
import movie3 from "../../assets/movie3.jpg";
import fun from "../../assets/fun.png";
import fun1 from "../../assets/fun1.jpg";
import fun2 from "../../assets/fun2.jpg";
import fun3 from "../../assets/fun3.jpg";
import entertainmentbg from "../../assets/entertainment-bg.jpg";

const Entertainment = () => {
  return (
    <div id="entertainment" className="pt-40 md:pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={entertainmentbg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Entertainment</h1>
      <ul className="flex flex-col gap-5 pb-10">
        <StoreCard
          logo={fun}
          title={"FunCity Card – Your Pass to Unlimited Play"}
          discription={
            "Load it, swipe it, and dive into a world of arcade games, rides, and entertainment – all with one smart FunCity Card.Your ticket to endless fun is here – the FunCity Card makes gaming smarter and smoother with seamless swipes, exciting offers, and easy recharges for a hassle-free play experience every time."
          }
          image1={fun1}
          image2={fun2}
          image3={fun3}
        />

        <StoreCard
          logo={movie}
          title={"Explore Movies, Events & More – BookMyShow"}
          discription={
            "Book your next movie, show, or event with ease. Discover what’s trending in entertainment, all in one place.From cinemas to concerts, stand-up to sports – BookMyShow is your all-access pass to entertainment across India."
          }
          image1={movie1}
          image2={movie2}
          image3={movie3}
        />
      </ul>
    </div>
  );
};

export default Entertainment;
