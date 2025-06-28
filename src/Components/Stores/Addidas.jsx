import React from "react";
import StoresCard from "../Cards/StoresCard";
import tshirt from "../../assets/tshirt.jpg";
import pastryImage from "../../assets/pastries.jpg";
import mangoCake from "../../assets/peoplescake.jpg";
import pizzaImage from "../../assets/pizza1.webp";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Addidas = () => {
  return (
    <div id="clock" className="pt-40 md:pt-30 lg:pt-20">
      {/* Swiper Banner */}
      <div className="flex items-center justify-center w-full mt-10">
        <div className="w-[85%] h-[55vh]">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-xl shadow-2xl h-full"
          >
            <SwiperSlide>
              <img
                src={pastryImage}
                alt="Pastry"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mangoCake}
                alt="Mango Cake"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={pizzaImage}
                alt="Pizza"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex items-center justify-center mt-10 gap-5 flex-wrap">
        <StoresCard
          image={tshirt}
          name={"Levi's Men's 511 Slim Fit Jeans"}
          price={"2499"}
        />
        <StoresCard
          image={tshirt}
          name={"Levi's Men's 511 Slim Fit Jeans"}
          price={"2499"}
        />
        <StoresCard
          image={tshirt}
          name={"Levi's Men's 511 Slim Fit Jeans"}
          price={"2499"}
        />
        <StoresCard
          image={tshirt}
          name={"Levi's Men's 511 Slim Fit Jeans"}
          price={"2499"}
        />
        <StoresCard
          image={tshirt}
          name={"Levi's Men's 511 Slim Fit Jeans"}
          price={"2499"}
        />
      </div>
    </div>
  );
};

export default Addidas;
