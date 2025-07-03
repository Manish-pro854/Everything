import React, { useState } from "react";
import mainbg from "../../assets/main-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import logos
import swiper1 from "../../assets/swiper1.jpg";
import swiper2 from "../../assets/swiper2.jpg";
import swiper3 from "../../assets/swiper3.png";
import swiper4 from "../../assets/swiper4.png";
import swiper5 from "../../assets/swiper5.png";
import swiper6 from "../../assets/swiper6.png";
import swiper7 from "../../assets/swiper7.png";
import swiper8 from "../../assets/swiper8.jpg";
import swiper9 from "../../assets/swiper9.png";
import swiper10 from "../../assets/swiper10.png";
import swiper11 from "../../assets/swiper11.png";
import swiper12 from "../../assets/swiper12.jpg";
import swiper13 from "../../assets/swiper13.png";
import swiper14 from "../../assets/swiper14.png";
import swiper15 from "../../assets/swiper15.jpg";
import swiper16 from "../../assets/swiper16.png";
import yoga from "../../assets/yoga.jpg"
import fooddhome from "../../assets/food-home.jpg"
import offerhome from "../../assets/offer-home.jpg"
import homeall from "../../assets/home-all.jpg"
import HomeCard from "../Cards/HomeCard";
import BusinessCard from "../Cards/BusinessCard";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../../Product/Product";

// ✅ Combine and duplicate for smooth loop
const logos = [
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  swiper5,
  swiper6,
  swiper7,
  swiper8,
  swiper9,
  swiper10,
  swiper11,
  swiper12,
  swiper13,
  swiper14,
  swiper15,
  swiper16,
  // Duplicates for seamless loop
  swiper1,
  swiper2,
  swiper3,
  swiper4,
  swiper5,
  swiper6,
  swiper7,
  swiper8,
  swiper9,
  swiper10,
  swiper11,
  swiper12,
  swiper13,
  swiper14,
  swiper15,
  swiper16,
];

const Home = () => {

    let [cate, setCate] = useState(dummydata);
    function filterProducts(category) {
      if(category==="All"){
        setCate(dummydata)
      }else{
        const updatedata = dummydata.filter((item) => item.category === category);
        setCate(updatedata);
      }
    }

  return (
    <div className="pt-8">
      <div className="w-full h-screen overflow-hidden pb-6">
        <img
          src={mainbg}
          className="w-full h-full object-cover object-center"
          alt="Mall Background"
        />
      </div>

      <h1 className="pl-10 text-2xl font-[450]">Shop Top Brands</h1>

      {/* Smooth infinite swiper */}
       <div className="mt-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            allowTouchMove={false}
            speed={5000}
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              300: { slidesPerView: 3 },
              483: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className="bg-white shadow-md rounded-md p-2 w-[110px] h-[90px] flex items-center justify-center mx-auto">
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      <div className="pt-5 flex items-center justify-center gap-8 flex-wrap pb-10 bg-[#dbdcde]">
      <HomeCard image={yoga} discription={"SEE WHAT WE'VE GOT GOING ON"} title={"Events"} link={"View The Calender"}/>

      <HomeCard image={offerhome} discription={"DISCOVER SPECIAL DEALS AND MORE"} title={"Sales + Offers"} link={"See The Sales"}/>

      <HomeCard image={fooddhome} discription={"ENJOY A OUICK SNACK OR MEAL"} title={"Food + Drink"} link={"Explore Options"}/>
      </div>
      <div className=" py-2 lg:p-8">
        <BusinessCard image={homeall} title={"Get ready to explore fashion, fun, and family activities"} discription={"There's So Much To Discover - Discover leading names like Adidas, Titan, Apple Store, Cosmetic Boutiques, Toy Shops, and many more — all under one stylish roof. With beautifully designed spaces and a wide selection of premium outlets, shopping here isn’t just a task, it's an experience."}/>
      </div>
      <div
        id="category-section"
        className="w-full flex items-center justify-center gap-8 flex-wrap p-1 md:p-2 lg:p-4"
      >
        {category.slice(0,5).map((item) => (
          <div className="category-card w-[170px] h-[200px] p-2 flex items-center justify-center flex-col gap-3 hover:shadow-2xl rounded-lg transition-all duration-100 cursor-pointer" onClick={()=>{
            filterProducts(item.name)
          }}>
            <img src={item.image} alt="" className="w-[100%] h-[70%]" />
            <span className="text-xl font-[500]">{item.name}</span>
          </div>
        ))}
      </div>
      <h1 className="text-center text-4xl font-[450] p-5">Trending Products</h1>
      <div
        id="product-section"
        className="w-[100%] flex items-center justify-center p-[10px] gap-8 flex-wrap pb-10"
      >
        {cate.slice(0,7).map((item) => (
          <Product name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Home;