"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
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
        <div className="hidden sm:flex items-center justify-between w-[400px] text-xl md:text-2xl">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href={"/"}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href={"/Shop"}>Shop</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href={"/About"}>About Us</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href={"/Contact"}>Contact</Link>
          </motion.div>
          
        </div>

        <div className=" sm:hidden size-[50px] flex items-center justify-center p-0 m-0">
          <GiHamburgerMenu className="h-full w-full" />
        </div>
      </ul>
    </div>
  );
}

export default Navbar
