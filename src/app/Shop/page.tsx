import { Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";


const Shop = () => {




  const products = [
    {
      title: "Mangoes",
      img: "/pic-02.png",
      price: 200,
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
      price: 250,
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
      price: 350,
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
      price: 300,
    },
    {
      title: "Mangoes",
      img: "/pic-02.png",
      price: 200,
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
      price: 250,
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
      price: 350,
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
      price: 300,
    },
    {
      title: "Mangoes",
      img: "/pic-02.png",
      price: 200,
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
      price: 250,
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
      price: 350,
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
      price: 300,
    },
    {
      title: "Mangoes",
      img: "/pic-02.png",
      price: 200,
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
      price: 250,
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
      price: 350,
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
      price: 300,
    },
  ];


  return (
    <div className="h-full w-full m-0 p-0">
      <div className="bg-[#232109] h-[150px] flex justify-center items-center">
        <Image src={"/logo1.png"} width={100} height={100} alt={""} />
      </div>
      <hr className="bg-[#aa7b2d] text-[#a57420] h-1" />
      <div className="bg-[#241101] h-full w-full">
        <div className="pt-10 pb-10">
          <p className="text-[#a57420] text-2xl sm:text-5xl text-center p-3">
            OUR SHOP • PURE, FRESH & FROM THE VILLAGE
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-10 p-5 ">
            {[...products].map((product, index) => (
              <div
                className=" w-[300px] h-[400px] rounded-2x mb-20"
                key={index}
              >
                <Image
                  src={product.img}
                  width={300}
                  height={300}
                  alt={"Product 1"}
                  className="rounded-t-xl"
                />
                <h2 className="text-center text-[#a57420] text-4xl pt-2">
                  {product.title}
                </h2>
                <p className="text-center  text-2xl pt-2 text-[#aa7b2d]">
                  ₹ {product.price}
                </p>
                <div className="flex justify-center items-center p-4 ">
                  <button className="bg-[#202008] text-[#a57420] text-2xl border-2 p-2 rounded-3xl cursor-pointer">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
