import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Head>
        <title>About Us | Gaav Se Ghar Tak</title>
        <meta
          name="description"
          content="Bringing the Heart of Indian Villages to Your Doorstep"
        />
      </Head>

      <main className="bg-[#aa7135] min-h-screen p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Gaav Se Ghar Tak Logo"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Bringing the Heart of Indian Villages to Your Doorstep
          </p>

          <div className="text-left text-gray-800 space-y-6">
            <p>
              At <strong>Gaav Se Ghar Tak</strong>, we believe that the true
              taste of India lies in its villages. From the sweetness of
              hand–picked mangoes to the juiciest of seasonal fruits – every
              product we deliver carries the soul of our villages.
            </p>

            <p>
              Whether it’s the first bite of a sweet mango and juicy seasonal
              fruits, the zing of a tangy pickle, or the crunch of your favorite
              snacks – we promise to take you back to your roots.
            </p>

            <div className="flex flex-col md:flex-row items-center mt-10 gap-6">
              <Image
                src="/mango.jpg"
                alt="Green mangoes"
                width={300}
                height={300}
                className="rounded-md shadow-md"
              />
              <Image
                src="/founders.jpg"
                alt="Founders smiling"
                width={300}
                height={300}
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page
