"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

const sampleCart = [
  {
    id: 1,
    name: "Alphonso Mango (1kg)",
    price: 399,
    quantity: 2,
    image: "/pic-02.png",
  },
  {
    id: 2,
    name: "Spicy Mango Pickle (500g)",
    price: 199,
    quantity: 1,
    image: "/pic-04.png",
  },
  {
    id: 3,
    name: "Snacks (500g)",
    price: 399,
    quantity: 1,
    image: "/pic-05.png",
  },
];

const Page = () => {

  const router = useRouter();

  const [cartItems, setCartItems] = useState(sampleCart);

  const handleQuantityChange = (id: number, delta: number) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    setCartItems(updatedItems);
  };
  

  // const handleCheckout = () => {
  //   // Here you would typically handle the checkout process, e.g., redirecting to a payment page
  //   alert("Proceeding to checkout...");
  // }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Head>
        <title className="font-serif font-normal">
          Your Cart | Gaav Se Ghar Tak
        </title>
      </Head>

      <main className="min-h-screen bg-[#aa7135]  p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold font-serif mb-6 text-center text-black">
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-red-800 font-serif text-5xl">
              Your cart is empty!
            </p>
          ) : (
            <>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-[#d6aa73] text-black p-4 rounded-lg shadow-2xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={100}
                      width={100}
                      className="w-24 h-24 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="ml-4 flex-1">
                      <h2 className="text-lg font-semibold font-serif">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        ₹{item.price} per unit
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          className="bg-gray-300 px-2 rounded"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-300 px-2 rounded"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-bold text-lg ml-4">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-right">
                <h2 className="text-2xl font-semibold">
                  <span className="font-serif">Total:</span> ₹ {total}
                </h2>
                <button
                  onClick={() => router.push("/Checkout")}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded cursor-pointer font-serif"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;
