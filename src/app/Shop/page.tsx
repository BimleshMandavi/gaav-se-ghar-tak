import Image from "next/image";
import React from "react";


const Shop = () => {
  return (
    <div className="h-full w-full m-0 p-0">
      <div className="bg-[#232109] h-[150px] flex justify-center items-center">
        <Image src={"/logo1.png"} width={100} height={100} alt={""} />
      </div>
      <hr className="bg-[#aa7b2d] text-[#aa7b2d] h-1" />
      <div className="bg-[#241101] h-[1000px]">
        <div className="pt-10 pb-10">
          <p className="text-[#aa7b2d] text-5xl text-center">
            OUR SHOP PURE, FRESH & FROM THE VILLAGE
          </p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Shop;
