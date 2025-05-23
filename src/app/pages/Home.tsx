
"use client";


import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);




  const carouselImages = [
    "/pic-01.png",
    "/pic-02.png",
    "/pic-03.png",
    "/pic-04.png",
    "/pic-05.png"
  ];


  const products = [
    {
      title: "Mangoes",
      img: "/pic-02.png",
    },
    {
      title: "Seasonal Fruits",
      img: "/pic-03.png",
    },
    {
      title: "Pickles",
      img: "/pic-04.png",
    },
    {
      title: "Snacks",
      img: "/pic-05.png",
    },
  ];


  // Duplicate products array for infinite scroll effect
  const duplicatedProducts = [...products, ...products, ...products, ...products];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };


  const moveSlideRight = () => {
    setSlidePosition((prev) => {
      const newPosition = prev - 100;
      if (Math.abs(newPosition) >= products.length * 100) {
        return 0;
      }
      return newPosition;
    });
  };


  const moveSlideLeft = () => {
    setSlidePosition((prev) => {
      const newPosition = prev + 100;
      if (newPosition > 0) {
        return -(products.length - 1) * 100;
      }
      return newPosition;
    });
  };


  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const timer = setInterval(moveSlideRight, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div>
      <div className="bg-[#bc8648] h-full w-full sm:flex justify-between items-center">
        <div className="text-[#311d00] sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
          <div className="p-8">
            <h2 className="text-2xl sm:text-6xl lg:text-8xl font-bold font-ancizarSerif">
              Fresh Fruits from Indian Villages
            </h2>
            <p className="text-xl sm:text-5xl pt-10">
              Delivered to Your Doorstep
            </p>
          </div>
        </div>
        <div className="sm:w-[50%] relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                className="w-full h-full object-cover object-left"
                src={image}
                fill
                alt={"Carousel image " + (index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#ebd7bc] h-full w-full pt-10">
        <div className='pt-10 pb-20'>
          <h1 className="text-2xl sm:text-6xl font-bold text-[#351d0a] text-center pt-10">
            Product Categories
          </h1>
          <div className="text-[#351d0a] p-5 overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${slidePosition}%)` }}
            >
              {duplicatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/4"
                >
                  <div>
                    <Image
                      className="rounded-xl lg:size-80 mt-4 mb-4"
                      src={product.img}
                      alt={product.title}
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className='pt-8'>
                    <p className="text-xl md:text-5xl font-bold text-center">
                      {product.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            <button
              onClick={moveSlideLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#351d0a]/50 hover:bg-[#351d0a]/75 rounded-full p-2 z-10"
            >
              <FaChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={moveSlideRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#351d0a]/50 hover:bg-[#351d0a]/75 rounded-full p-2 z-10"
            >
              <FaChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
















// "use client";


// import React, { useState, useEffect } from 'react'
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidePosition, setSlidePosition] = useState(0);




//   const carouselImages = [
//     "/pic-01.png",
//     "/pic-02.png",
//     "/pic-03.png",
//     "/pic-04.png",
//     "/pic-05.png"
//   ];


//   const products = [
//     {
//       title: "Mangoes",
//       img: "/pic-02.png",
//     },
//     {
//       title: "Seasonal Fruits",
//       img: "/pic-03.png",
//     },
//     {
//       title: "Pickles",
//       img: "/pic-04.png",
//     },
//     {
//       title: "Snacks",
//       img: "/pic-05.png",
//     },
//   ];


//   // Duplicate products array for infinite scroll effect
//   const duplicatedProducts = [...products, ...products, ...products, ...products];


//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };


//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
//     );
//   };


//   const moveSlideRight = () => {
//     setSlidePosition((prev) => {
//       const newPosition = prev - 100;
//       if (Math.abs(newPosition) >= products.length * 100) {
//         return 0;
//       }
//       return newPosition;
//     });
//   };


//   const moveSlideLeft = () => {
//     setSlidePosition((prev) => {
//       const newPosition = prev + 100;
//       if (newPosition > 0) {
//         return -(products.length - 1) * 100;
//       }
//       return newPosition;
//     });
//   };


//   useEffect(() => {
//     const timer = setInterval(nextSlide, 3000);
//     return () => clearInterval(timer);
//   }, []);


//   useEffect(() => {
//     const timer = setInterval(moveSlideRight, 3000);
//     return () => clearInterval(timer);
//   }, []);


//   return (
//     <div>
//       <div className="bg-[#bc8648] h-full w-full sm:flex justify-between items-center">
//         <div className="text-[#311d00] sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
//           <div className="p-8">
//             <h2 className="text-2xl sm:text-6xl lg:text-8xl font-bold font-ancizarSerif">
//               Fresh Fruits from Indian Villages
//             </h2>
//             <p className="text-xl sm:text-5xl pt-10">
//               Delivered to Your Doorstep
//             </p>
//           </div>
//         </div>
//         <div className="sm:w-[50%] relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
//           {carouselImages.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//             >
//               <Image
//                 className="w-full h-full object-cover object-left"
//                 src={image}
//                 fill
//                 alt={"Carousel image " + (index + 1)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-[#ebd7bc] h-full w-full pt-10">
//         <div className='pt-10 pb-20'>
//           <h1 className="text-2xl sm:text-6xl font-bold text-[#351d0a] text-center pt-10">
//             Product Categories
//           </h1>
//           <div className="text-[#351d0a] p-5 overflow-hidden relative">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(${slidePosition}%)` }}
//             >
//               {duplicatedProducts.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-1/4"
//                 >
//                   <div>
//                     <Image
//                       className="rounded-xl lg:size-80 mt-4 mb-4"
//                       src={product.img}
//                       alt={product.title}
//                       height={300}
//                       width={300}
//                     />
//                   </div>
//                   <div className='pt-8'>
//                     <p className="text-xl md:text-5xl font-bold text-center">
//                       {product.title}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>


//             <button
//               onClick={moveSlideLeft}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#351d0a]/50 hover:bg-[#351d0a]/75 rounded-full p-2 z-10"
//             >
//               <FaChevronLeft size={24} className="text-white" />
//             </button>
//             <button
//               onClick={moveSlideRight}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#351d0a]/50 hover:bg-[#351d0a]/75 rounded-full p-2 z-10"
//             >
//               <FaChevronRight size={24} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Home;








// // import React from 'react'
// // import Image from "next/image";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const Home = () => {

// //   const products = [
// //     {
// //       title: "Mangoes",
// //       img: "/pic-02.png",
// //     },
// //     {
// //       title: "Seasonal Fruits",
// //       img: "/pic-03.png",
// //     },
// //     {
// //       title: "Pickles",
// //       img: "/pic-04.png",
// //     },
// //     {
// //       title: "Snacks",
// //       img: "/pic-05.png",
// //     },
// //   ];


// //   return (
// //     <div>
// //       <div className="bg-[#bc8648] h-full w-full sm:flex justify-between items-center">
// //         <div className="text-[#311d00] sm:flex sm:justify-center items-center flex-col sm:w-[50%] text-start pl-10">
// //           <div className="p-8">
// //             <h2 className="text-2xl sm:text-6xl lg:text-8xl font-bold font-ancizarSerif">
// //               Fresh Fruits from Indian Villages
// //             </h2>
// //             <p className="text-xl sm:text-5xl pt-10">
// //               Delivered to Your Doorstep
// //             </p>
// //           </div>
// //         </div>
// //         <div className="sm:w-[50%]">
// //           <Image
// //             className="w-full"
// //             src="/pic-01.png"
// //             height={80}
// //             width={300}
// //             alt={""}
// //           />
// //         </div>
// //       </div>
// //       <div className="bg-[#ebd7bc] h-full w-full pt-10">
// //         <div className='pt-10 pb-20'>
// //           <h1 className="text-2xl sm:text-6xl font-bold text-[#351d0a] text-center pt-10 ">
// //             Product Categories
// //           </h1>
// //           <div className="text-[#351d0a] p-5 flex  justify-center gap-4 items-center">
// //             {[...products].map((product, index) => (
// //               <div key={index}>
// //                 <div>
// //                   <Image
// //                     className="rounded-xl lg:size-80 mt-4 mb-4"
// //                     src={product.img}
// //                     alt={product.title}
// //                     height={300}
// //                     width={300}
// //                   />
// //                 </div>
// //                 <div className='pt-8'>
// //                   <p className="text-xl md:text-5xl  font-bold text-center ">
// //                     {product.title}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home
