// import React from "react";

// export default function Features() {
//   return (
//     <div className=" bg-[#F0F0E0] h-screen">
//     <div className=" text-black  flex items-center justify-center px-6">
      
//       <div className="max-w-[600px] text-center flex flex-col items-center">
        
//         <h1 className="text-5xl font-bold leading-tight">
//           Why teams love Nexora's Hiring Software
//         </h1>

//         <p className="mt-4 text-gray-700">
//           Nexora's customers share a passion for nurturing company culture.
//           We all agree hiring can be more meaningful and personal.
//         </p>

//         <button className="px-6 py-2 bg-accent text-black rounded-full mt-10 hover:scale-105 transition-all duration-300">
//           About Our Customers
//         </button>
//       </div>
//     </div>
//      <div className="flex pt-20 items-center justify-center gap-4 ">
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//         <img src="hero.png" width={200} alt="" />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function Features() {
  const images = [
    "/testi1.png",
    "/testi2.png",
    "/testi3.png",
    "/testi4.png",
    "/testi5.png",
    "/testi6.png",
    "/testi7.png",
    "/testi8.png",
  ];

  const [start, setStart] = useState(0);

  const visibleImages = images.slice(start, start + 5);

  const nextSlide = () => {
    if (start < images.length - 5) {
      setStart(start + 1);
    }else{
      setStart(0)
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    }else{
      setStart(images.length-5)
    }
  };

  return (
    <div className="bg-[#F0F0E0] min-h-screen pt-20">

      {/* Heading */}
      <div className="text-black flex items-center justify-center px-6">
        <div className="max-w-[600px] text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold">
            Why teams love Nexora's Hiring Software
          </h1>

          <p className="mt-4 text-gray-700">
            Nexora's customers share a passion for nurturing company culture.
          </p>
           <button className="px-6 py-2 bg-accent text-black rounded-full mt-5 hover:scale-105 transition-all duration-300">
          About Our Customers
         </button>
        </div>
      </div>

      {/* Slider */}
      <div className="flex items-center justify-center gap-4 mt-10">

        {/* Images */}
        <div className="flex gap-4 overflow-hidden">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`rounded-xl transition-all duration-500
                ${
                  index === 1
                    ? "w-[250px] h-[300px]"
                    : "w-[150px] h-[200px]"
                }
              `}
            />
          ))}
        </div>
 

      </div>
      <div className="flex justify-center items-center mt-5 gap-5 pb-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full text-background bg-accent border text-2xl"
        >
          &lt;
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 text-background bg-accent rounded-full border text-2xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}