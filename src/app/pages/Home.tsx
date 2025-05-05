import React from 'react'
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="bg-[#bc8648] h-full w-full sm:flex justify-between items-center">
        <div className="text-[#311d00] sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
          <div className="p-8">
            <h2 className="text-2xl sm:text-6xl lg:text-8xl font-bold">
              Fresh Fruits from Indian Villages
            </h2>
            <p className="text-xl sm:text-5xl pt-10">Delivered to Your Doorstep</p>
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
      <div className="bg-[#ebd7bc] h-full w-full">
        <div className="text-[#351d0a] p-10 flex justify-center items-center">
          <h1 className='text-2xl sm:text-6xl font-bold'>Carduct Categories</h1>
        </div>
      </div>
    </div>
  );
}

export default Home
