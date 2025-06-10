import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3e1a00] flex justify-around items-center flex-col md:flex-row sm:p-10 p-4 ">
        <div className="flex justify-evenly gap-5 flex-col">
          <h1 className="text-2xl md:text-5xl text-[#e8e0c3] font-serif">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-[#e8c8ae] font-serif">
            gaavseghartak@gmail.com
          </p>
          <p className="text-xl md:text-2xl text-[#e8c8ae]">+91 9301269119</p>
        </div>
        <div className="flex justify-evenly gap-5 flex-col pt-5 ">
          <h1 className="text-2xl md:text-4xl text-[#e8e0c3] font-serif">
            Social
          </h1>
          <div className="flex gap-5 text-4xl">
            <a
              href="https://x.com/Gaavseghartak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Gaavseghartak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/gaavseghartak_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex justify-evenly gap-5 flex-col pt-5">
          <h1 className="text-2xl md:text-4xl text-[#e8e0c3] font-serif">
            Subscribe
          </h1>
          <h1 className="text-2xl md:text-4xl text-[#e8e0c3] font-serif">
            to our newsletter
          </h1>
          <button className="bg-[#d4ac7b]  min-w-[270px] text-black font-bold text-2xl rounded-xl cursor-pointer p-4 font-serif">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-around items-center bg-[#3e1a00] sm:text-xl p-5 gap-5">
        <p className="text-sm sm:text-xl font-serif ">
          © 2025, GaavSeGharTak Inc. All Rights Reserved.
        </p>
        <a href="#" className="font-serif">
          Terms of Service
        </a>
        <a href="#" className="font-serif">
          Privacy Policy
        </a>
        <p className="  text-cente text-[14px] sm:text-xl  font-Helvetica font-normal font-serif">
          A Proud <span className="">🇮🇳 Product Agency</span>.
        </p>
      </div>
      <div className="bg-[#311001] min-h-[100px]"></div>
    </div>
  );
};

export default Footer;
