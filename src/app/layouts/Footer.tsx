import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3e1a00] min-h-[300px] flex justify-around items-center">
        <div className="flex justify-evenly gap-5 flex-col">
          <h1 className="md:text-5xl text-[#e8e0c3]">Contact</h1>
          <p className="text-2xl text-[#e8c8ae]">info@gaavseghartak.com</p>
          <p className="text-2xl text-[#e8c8ae]">+81 9876843210</p>
        </div>
        <div className="flex justify-evenly gap-5 flex-col">
          <h1 className="md:text-4xl text-[#e8e0c3]">Social</h1>
          <div className='flex gap-5 text-4xl'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="flex justify-evenly gap-5 flex-col">
          <h1 className="md:text-4xl text-[#e8e0c3]">Susser vre</h1>
          <h1 className="md:text-4xl text-[#e8e0c3]">to our newsletter</h1>
          <button className="bg-[#d4ac7b] h-[50px] w-[270px] text-black font-bold text-2xl rounded-xl cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-[#311001] min-h-[100px]"></div>
    </div>
  );
}

export default Footer
