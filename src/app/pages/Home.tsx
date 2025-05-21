import React from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

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


  return (
    <div>
      <div className="bg-[#bc8648] h-full w-full sm:flex justify-between items-center">
        <div className="text-[#311d00] sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
          <div className="p-8">
            <h2 className="text-2xl sm:text-6xl lg:text-8xl font-bold font-ancizarSerif">
              Fresh Fruits from Indian Villages
            </h2>
            <p className="text-xl sm:text-5xl pt-10">
              Delivered to Your Doorstep
            </p>
          </div>
        </div>
        <div className="sm:w-[50%]">
          <Image
            className="w-full"
            src="/pic-01.png"
            height={80}
            width={300}
            alt={""}
          />
        </div>
      </div>
      <div className="bg-[#ebd7bc] h-full w-full pt-10">
        <div className='pt-10 pb-20'>
          <h1 className="text-2xl sm:text-6xl font-bold text-[#351d0a] text-center pt-10 ">
            Product Categories
          </h1>
          <div className="text-[#351d0a] p-5 flex  justify-center gap-4 items-center">
            {[...products].map((product, index) => (
              <div key={index}>
                <div>
                  <Image
                    className="rounded-xl lg:size-80 mt-4 mb-4"
                    src={product.img}
                    alt={product.title}
                    height={300}
                    width={300}
                  />
                </div>
                <div className='pt-8'>
                  <p className="text-xl md:text-5xl  font-bold text-center ">
                    {product.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
