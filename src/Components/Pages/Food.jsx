import React from "react";
import StoreCard from "../Cards/StoreCard";
import noir from "../../assets/noir.jpg";
import burger from "../../assets/burger.webp";
import cake from "../../assets/cake.webp";
import coffee from "../../assets/coffee.webp";
import naturals from "../../assets/naturals.jpg";
import kiwi from "../../assets/kiwi.jpg";
import mango from "../../assets/mango.jpg";
import stoberi from "../../assets/stoberi.jpg";
import heaven from "../../assets/heaven.png";
import pastries from "../../assets/pastries.jpg";
import peoplescake from "../../assets/peoplescake.jpg";
import tcake from "../../assets/tcake.jpg";
import pizza from "../../assets/pizza.png";
import pizza1 from "../../assets/pizza1.webp";
import pizza2 from "../../assets/pizza2.webp";
import pizza3 from "../../assets/pizza3.jpeg";
import bear from "../../assets/bear.webp";
import bear1 from "../../assets/bear1.webp";
import bear2 from "../../assets/bear2.jpeg";
import bear3 from "../../assets/bear3.jpeg";
import foodbg from "../../assets/food-bg.jpg";

const Food = () => {
  return (
    <div id="food" className="pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={foodbg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Food & Drinks</h1>
      <ul className="flex flex-col gap-5 pb-10">
        <StoreCard
          logo={noir}
          title={"Cafe noir India"}
          discription={
            "Good food can trigger the right emotions in the mind of the beholder. That is exactly what we have promised and that is exactly what we are set out to deliver."
          }
          image1={burger}
          image2={coffee}
          image3={cake}
        />

        <StoreCard
          logo={naturals}
          title={"Naturals Ice Cream – Real Fruit. Real Flavour."}
          discription={
            "Naturals Ice Cream, handcrafted since 1984, brings you 125+ pure fruit-based flavours made with just milk, sugar, and real fruits—celebrating tradition, simplicity, seasonal freshness, honest ingredients, and timeless taste in every scoop."
          }
          image1={mango}
          image2={stoberi}
          image3={kiwi}
        />

        <StoreCard
          logo={pizza}
          title={"Pizza Wings Delicious Food"}
          discription={
            "Delicious Food, Fresh Dough, Fresh Ingredients With the time and their unbeaten quality, Pizza Wings spread it's wings around Delhi-NCR and all over Haryana."
          }
          image1={pizza1}
          image2={pizza2}
          image3={pizza3}
        />

        <StoreCard
          logo={heaven}
          title={"7th Heaven - Bakery Cafe"}
          discription={
            "7th Heaven is India's Ultimate Bakery Cafe Chain with Live Kitchen - Live Cakes in 7 Mins.* 7th Heaven serves products like 3D Cakes, Cupcakes, Macarons, Donuts, Tarts, Brownies, Cheese Cakes, Pizzas, Pasta, Burgers and much more!"
          }
          image1={pastries}
          image2={peoplescake}
          image3={tcake}
        />

        <StoreCard
          logo={bear}
          title={"Sip the Refreshment"}
          discription={
            "From nature to your hands, our beverage delivers unmatched freshness, delightful flavor, and a revitalizing experience that quenches thirst and lifts your spirit – anytime, anywhere, for everyone."
          }
          image1={bear1}
          image2={bear2}
          image3={bear3}
        />
      </ul>
    </div>
  );
};

export default Food;
