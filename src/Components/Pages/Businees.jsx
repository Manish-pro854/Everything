import React from "react";
import BusinessCard from "../Cards/BusinessCard";
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";
import rentbg from "../../assets/rent-bg.jpg";

const Businees = () => {
  return (
    <div id="rent" className="pt-40 md:pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={rentbg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Business Premises</h1>
      <ul className="flex flex-col gap-5 pb-10">
        <BusinessCard
          title={
            "Luxury Mall Shop for Rent – 350 Sq. Yards | ₹1.2L/Month | Premium Finish"
          }
          discription={
            "Located in a high-footfall mall, this stunning retail unit features marble flooring, ambient lighting, and designer furnishings that exude modern elegance. Ideal for boutique brands, salons, or luxury product displays, the space is fully ready for business. With custom shelving, lounge seating, and stylish fixtures, your brand presence will shine. This is more than a shop — it’s a statement. Available for immediate lease. Don’t miss this opportunity to elevate your business presence in style."
          }
          image={shop1}
        />

        <BusinessCard
          title={
            "Premium Glass-Front Mall Store – 280 Sq. Yards | ₹1L/Month | Fashion-Ready Showroom"
          }
          discription={
            "Showcase your brand with elegance in this modern retail unit featuring a stunning full glass frontage for maximum visibility. Located in a prime mall with heavy footfall, the showroom is ideal for fashion, accessories, bags, or footwear businesses. With clean interiors, spotlight shelving, and sleek product displays, this space offers a refined retail experience. Move-in ready and designed to impress, it’s perfect for brands aiming to stand out."
          }
          image={shop2}
        />

        <BusinessCard
          title={
            "Modern Mall Footwear Store – 300 Sq. Yards | ₹90K/Month | Sleek & Spacious Layout"
          }
          discription={
            "A clean, contemporary retail space perfect for footwear, bags, or lifestyle brands. Featuring well-lit display walls, organized shelving, and ample customer seating, this store offers a seamless shopping experience. The open layout and glass front attract walk-in customers, while the high-end interior ensures your products are the main focus. Professionally designed and fully equipped — ideal for brands ready to set up and sell instantly."
          }
          image={shop3}
        />
      </ul>
    </div>
  );
};

export default Businees;
