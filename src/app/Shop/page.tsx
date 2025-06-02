"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Shop = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const router = useRouter();

  const handleAddToCart = (id: number) => {
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
    }
  };

 
  const products = [
    { id: 1, title: "Mangoes", img: "/pic-02.png", price: 200 },
    { id: 2, title: "Seasonal Fruits", img: "/pic-03.png", price: 250 },
    { id: 3, title: "Pickles", img: "/pic-04.png", price: 350 },
    { id: 4, title: "Snacks", img: "/pic-05.png", price: 300 },
    { id: 5, title: "Mangoes", img: "/pic-02.png", price: 200 },
    { id: 6, title: "Seasonal Fruits", img: "/pic-03.png", price: 250 },
    { id: 7, title: "Pickles", img: "/pic-04.png", price: 350 },
    { id: 8, title: "Snacks", img: "/pic-05.png", price: 300 },
    { id: 9, title: "Mangoes", img: "/pic-02.png", price: 200 },
    { id: 10, title: "Seasonal Fruits", img: "/pic-03.png", price: 250 },
    { id: 11, title: "Pickles", img: "/pic-04.png", price: 350 },
    { id: 12, title: "Snacks", img: "/pic-05.png", price: 300 },
    { id: 13, title: "Mangoes", img: "/pic-02.png", price: 200 },
    { id: 14, title: "Seasonal Fruits", img: "/pic-03.png", price: 250 },
    { id: 15, title: "Pickles", img: "/pic-04.png", price: 350 },
    { id: 16, title: "Snacks", img: "/pic-05.png", price: 300 },
  ];

  return (
    <div className="h-full w-full m-0 p-0">
      <div className="bg-[#aa7235] h-[80px] sm:h-[150px] flex justify-center items-center">
        <div className="pt-10 pb-10">
          <p className="text-black sm:text-2xl md:text-5xl text-center p-3">
            OUR SHOP • PURE, FRESH & FROM THE VILLAGE
          </p>
        </div>
      </div>
      <hr className="text-black h-1" />
      <div className="bg-[#d6aa73] h-full w-full pb-10">
        <div className="flex flex-wrap justify-center items-center gap-10 p-5">
          {products.map((product) => {
            const isInCart = cartItems.includes(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-[130px] h-[150px] sm:h-[400px] sm:w-[300px] rounded-2x mb-20 sm:mt-20 mt-3"
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="rounded-3xl w-full h-[130px] sm:h-[300px] object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <h2 className="text-center text-black sm:text-4xl pt-2">
                  {product.title}
                </h2>
                <p className="text-center sm:text-2xl pt-2 text-black">
                  ₹ {product.price}
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center items-center sm:p-4 pt-2"
                >
                  <button
                    onClick={() =>
                      isInCart
                        ? router.push("/Cart")
                        : handleAddToCart(product.id)
                    }
                    className={`mt-4 ${
                      isInCart
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white sm:px-6 sm:py-2 rounded cursor-pointer`}
                  >
                    {isInCart ? "GO TO CART" : "ADD TO CART"}
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
