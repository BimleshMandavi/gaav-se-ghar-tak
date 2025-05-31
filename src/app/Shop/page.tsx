 "use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


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
      <div className="bg-[#aa7235] h-[80px] sm:h-[150px] flex justify-center items-center">
        <div className="pt-10 pb-10">
          <p className="text-black sm:text-2xl md:text-5xl text-center p-3">
            OUR SHOP • PURE, FRESH & FROM THE VILLAGE
          </p>
        </div>
      </div>
      <hr className="text-black h-1" />
      <div className="bg-[#d6aa73] h-full w-full pb-10">
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-10 p-5 ">
            {[...products].map((product, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=" w-[130px] h-[150px] sm:h-[400px] sm:w-[300px] rounded-2x mb-20 sm:mt-20 mt-3"
                key={index}
              >
                {" "}
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt={"Product 1"}
                    className="rounded-3xl w-full h-[130px] sm:h-[300px] object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <h2 className="text-center text-black sm:text-4xl pt-2">
                  {product.title}
                </h2>
                <p className="text-center  sm:text-2xl pt-2 text-black">
                  ₹ {product.price}
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center items-center sm:p-4 pt-2"
                >
                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white sm:px-6 sm:py-2 rounded cursor-pointer">
                    ADD TO CART
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
