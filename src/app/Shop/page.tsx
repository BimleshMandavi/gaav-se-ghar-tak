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
      <div className="bg-[#aa7235] h-[150px] flex justify-center items-center">
        <div className="pt-10 pb-10">
          <p className="text-black text-2xl sm:text-5xl text-center p-3">
            OUR SHOP • PURE, FRESH & FROM THE VILLAGE
          </p>
        </div>
      </div>
      <hr className="text-black h-1" />
      <div className="bg-[#d6aa73] h-full w-full">
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-10 p-5 ">
            {[...products].map((product, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=" w-[300px] h-[400px] rounded-2x mb-20 mt-20"
                key={index}
              >
                {" "}
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={product.img}
                    width={300}
                    height={300}
                    alt={"Product 1"}
                    className="rounded-3xl w-full h-[300px] object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <h2 className="text-center text-black text-4xl pt-2">
                  {product.title}
                </h2>
                <p className="text-center  text-2xl pt-2 text-black">
                  ₹ {product.price}
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center items-center p-4 "
                >
                  <button className="bg-[#aa7235] text-black text-xl font-bold border-2 p-2  cursor-pointer">
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
