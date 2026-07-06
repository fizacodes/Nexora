"use client";

import { useState } from "react";

export default function About() {
  const [active, setActive] = useState(1);

  return (
    <section className="min-h-screen pt-10   bg-gray-100">
      <div className="flex items-center justify-between px-40 gap-10">
      {/* Left Side */}
      <div className="max-w-lg">

        <h2 className="text-4xl font-bold text-black">
          Get things Done with
          <br />
          Minimal Effort
        </h2>

        <p className="mt-4 text-black">
          Depending on the delivery option you selected at checkout,
          we'll email you a tracking link.
        </p>

        <div className="mt-10">

          {/* Step 1 */}
          <div
            onClick={() => setActive(1)}
            className={`cursor-pointer pl-6 py-4 transition-all
            ${active === 1 ? "border-l-4 border-accent" : "border-l-4 border-transparent"}`}
          >
            <h3 className="font-semibold text-black ">
              1. Create Accounts
            </h3>

            {active === 1 && (
              <p className="mt-3 text-black">
                Create an account and set up your profile to
                begin searching jobs or hiring talent.
              </p>
            )}
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActive(2)}
            className={`cursor-pointer pl-6 py-4  transition-all
            ${active === 2 ? "border-l-4 border-accent" : "border-l-4 border-transparent"}`}
          >
            <h3 className="font-semibold  text-black">
              2. Complete Your Profile
            </h3>

            {active === 2 && (
              <p className="mt-3 text-black">
                Add your skills, experience, and portfolio
                to stand out from others.
              </p>
            )}
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActive(3)}
            className={`cursor-pointer pl-6 py-4  transition-all
            ${active === 3 ? "border-l-4 border-accent" : "border-l-4 border-transparent"}`}
          >
            <h3 className="font-semibold text-black ">
              3. Apply Job Or Hire
            </h3>

            {active === 3 && (
              <p className="mt-3 text-black ">
                Start applying to jobs or hire top talent
                with just a few clicks.
              </p>
            )}
          </div>

        </div>
      </div>
  <div className="relative w-[450px] h-[450px]">
  <img
    src="/hero.png"
    alt="dashboard"
    className="rounded-3xl w-[450px] h-[450px] "
  />

  <div className="absolute bottom-8 left-8 text-white ">
    <h3 className="text-2xl font-bold ">
      Made for professionals
    </h3>
 
    <p className="mt-2 max-w-[250px] text-accent">
      Change your website into a true sector leader.
    </p>
  </div>
</div>

      </div>
       {/* Bottom Stats */}
      <div className="mt-20 px-40 grid grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-4xl text-black font-bold">45k+</h3>

          <p className="mt-4 text-black">
            Innovative design tools can thrust your business
            ahead by engaging new customers.
          </p>
        </div>

        <div>
          <h3 className="text-4xl text-black font-bold">15min+</h3>

          <p className="mt-4 text-black">
            Creative design tools can drive your business
            ahead through unique platforms.
          </p>
        </div>

        <div>
          <h3 className="text-4xl text-black font-bold">2000+</h3>

          <p className="mt-4 text-black">
            Revolutionary instruments can propel your
            venture forward.
          </p>
        </div>
      </div>

    </section>
  );
}