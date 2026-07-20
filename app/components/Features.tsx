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

  const nextSlide = () => {
    if (start < images.length - 5) {
      setStart(start + 1);
    } else {
      setStart(0);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    } else {
      setStart(images.length - 5);
    }
  };

  return (
    <section className="min-h-screen bg-[#F0F0E0] px-5 py-16 sm:px-8 lg:px-12">

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center text-black">

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Why teams love Nexora's Hiring Software
        </h1>

        <p className="mt-5 text-sm text-gray-700 sm:text-base">
          Nexora's customers share a passion for nurturing company culture.
        </p>

        <button className="mt-6 rounded-full bg-accent px-6 py-3 font-medium text-black transition hover:scale-105">
          About Our Customers
        </button>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="mt-12 flex justify-center md:hidden">
        <img
          src={images[start + 1] ?? images[0]}
          alt=""
          className="h-[320px] w-[240px] rounded-2xl object-cover shadow-xl"
        />
      </div>

      {/* ================= TABLET ================= */}
      <div className="mt-12 hidden items-center justify-center gap-4 md:flex lg:hidden">
        {images.slice(start, start + 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`rounded-xl object-cover transition-all duration-500 ${
              index === 1
                ? "h-[300px] w-[220px]"
                : "h-[220px] w-[150px]"
            }`}
          />
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="mt-12 hidden items-center justify-center gap-4 lg:flex">
        {images.slice(start, start + 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`rounded-xl object-cover transition-all duration-500 ${
              index === 1
                ? "h-[320px] w-[250px]"
                : "h-[220px] w-[160px]"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-10 flex justify-center gap-5">

        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl text-background transition hover:scale-105"
        >
          &lt;
        </button>

        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl text-background transition hover:scale-105"
        >
          &gt;
        </button>

      </div>

    </section>
  );
}