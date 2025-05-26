"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Headroom from "react-headroom";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBox from './SearchBox.jsx';
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Headroom>
      <div className="h-[120px] bg-[#d6aa73] text-black">
        <ul className="flex  items-center justify-around">
          <Link href={"/"}>
            <Image
              className="h-[120px] w-[120px]"
              src="/logo.jpeg"
              height={50}
              width={300}
              alt={""}
            />
          </Link>
          <div className="hidden sm:flex items-center justify-between w-[600px] text-xl md:text-2xl">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href={"/"}>Home</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href={"/Shop"}>Shop</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link href={"/About"}>About Us</Link>
            </motion.div>
            <SearchBox handleCToogle={() => { /* Add your toggle logic here */ }} />
          </div>
          <div className="hidden sm:flex justify-between items-center gap-5 w-[140px] text-xl md:text-2xl">
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <Link href={"/LogIn"}>Log In</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <FaCartArrowDown />
            </motion.div>
          </div>

          <div className=" sm:hidden size-[50px] flex items-center justify-center p-0 m-0">
            <GiHamburgerMenu className="h-full w-full" />
          </div>
        </ul>
      </div>
    </Headroom>
  );
}

export default Navbar
