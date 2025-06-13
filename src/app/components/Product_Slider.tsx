import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// Custom Arrow Props
type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

// Custom Next Arrow
const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-4 right-8 md:right-20 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowAltCircleRight className="text-[#351d0a] text-4xl md:text-5xl lg:text-6xl" />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-4 right-20 md:right-40 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowAltCircleLeft
      className="text-[#351d0a] text-4xl md:text-5xl lg:text-6xl"
    />
  </div>
);

function MultipleItems() {
  const products = [
    {
      title: "Mangoes",
      img: "/pic-02.png",
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="slider-container relative px-4 pt-28">
      {/* Extra margin between arrows and product slider */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-[#351d0a] p-5 flex flex-col  items-center text-center"
          >
            <Link href="/Shop">
              <motion.div className="flex flex-col mt-20 justify-center items-center" whileHover={{ scale: 1.05 }}>
                <Image
                  className="rounded-3xl lg:size-80 mt-10 mb-4"
                  src={product.img}
                  alt={product.title}
                  height={300}
                  width={300}
                  loading="lazy"
                />
                <div className="pt-8">
                  <p className="text-xl md:text-3xl font-normal font-serif text-center">
                    {product.title}
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
