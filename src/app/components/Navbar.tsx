import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#d8b07f] text-black py-4">
      <ul className="flex  items-center justify-around">
        <Link href={"/"}>
          <Image
            className="h-[5rem] w-[10rem]"
            src="/logo.png"
            height={50}
            width={300}
            alt={""}
          />
        </Link>
        <div className="hidden sm:flex items-center justify-between w-[400px] text-xl md:text-2xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        <div className=" sm:hidden size-[50px] flex items-center justify-center p-0 m-0">
          <GiHamburgerMenu  className='h-full w-full'/>
        </div>
      </ul>
    </div>
  );
}

export default Navbar
