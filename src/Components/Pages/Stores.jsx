import React, { useState } from "react";
import storebg from "../../assets/store-bg.jpg";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../../Product/Product";

const Stores = () => {
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
    <div id="stores" className="pt-30 lg:pt-20">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src={storebg}
          alt="Mall Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h1 className="text-center text-6xl pb-5 pt-2">Stores</h1>

      <div
        id="category-section"
        className="w-full flex items-center justify-center gap-8 flex-wrap p-1 md:p-2 lg:p-4"
      >
        {category.map((item) => (
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
        className="w-[100%] flex items-center justify-center p-[10px] gap-8 flex-wrap"
      >
        {cate.map((item) => (
          <Product name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
