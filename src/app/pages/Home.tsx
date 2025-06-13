"use client";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Product_Slider from "../components/Product_Slider";

const Home = () => {
  

  //  const itemVariants = {
  //    hidden: { opacity: 0, scale: 0.8 },
  //    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  //    hover: { scale: 1.2 },
  //  };

  return (
    <div>
      <div className="bg-[#aa7235] h-full w-full sm:flex justify-between items-center">
        <div className="text-[#311d00] font-serif sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8"
          >
            <h2 className="text-2xl sm:text-6xl lg:text-8xl font-normal font-ancizarSerif">
              Fresh Fruits from Indian Villages
            </h2>
            <p className="text-xl sm:text-5xl pt-10">
              Delivered to Your Doorstep
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="sm:w-[50%]  sm:h-[100vh] w-full"
        >
          <Link href={"/Shop"}>
            <Image
              className="w-full h-full "
              src="/pic-07.jpeg"
              height={80}
              width={300}
              alt={""}
              loading="lazy"
            />
          </Link>
        </motion.div>
      </div>
      <div className="bg-[#ebd7bc] h-full w-full pt-10">
        <div className="pt-10 pb-20">
          <h1 className="text-2xl sm:text-6xl font-normal font-serif text-[#351d0a] text-center pt-10 ">
            Product Categories
          </h1>
          <Product_Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
