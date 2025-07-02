import React from "react";
import storebg from "../../assets/store-bg.jpg";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import ProductCard from "../Cards/ProductCard";

const Stores = () => {
  return (
    <div id="stores" className="pt-40 md:pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={storebg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5">Stores</h1>

      <div id="category-section" className="w-full flex items-center justify-center gap-8 flex-wrap p-4">

      {category.slice(0,5).map((item)=>(
        <div className="category-card w-[200px] h-[250px] p-[10px] flex items-center justify-center flex-col gap-3 hover:shadow-2xl rounded-lg transition-all duration-100 cursor-pointer">
          <img src={item.image} alt="" className="w-[100%] h-[70%]"/>
          <span className="text-xl font-[500]">{item.name}</span>
        </div>
      ))}
    </div>
    <h1>Trending Products</h1>
    <div id="product-section" className="w-[100%] flex items-center justify-center p-[10px] gap-8 flex-wrap">
      {dummydata.map((item)=>(
        <ProductCard name={item.name} image={item.image} price={item.price}/>
      ))}
    </div>
    </div>
  );
};

export default Stores;
