"use client";

import { useState } from "react";

export default function About() {
  const [active, setActive] = useState(1);

  return (
    <section className="min-h-screen bg-gray-100 py-12 lg:py-20">
      {/* Top Section */}
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-5 md:px-8 lg:flex-row lg:justify-between lg:gap-16">

        {/* Left Side */}
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Get things Done with
            <br />
            Minimal Effort
          </h2>

          <p className="mt-4 text-sm leading-7 text-black sm:text-base">
            Depending on the delivery option you selected at checkout,
            we'll email you a tracking link.
          </p>

          <div className="mt-10">

            {/* Step 1 */}
            <div
              onClick={() => setActive(1)}
              className={`cursor-pointer border-l-4 py-4 pl-6 transition-all ${
                active === 1
                  ? "border-accent"
                  : "border-transparent"
              }`}
            >
              <h3 className="font-semibold text-black">
                1. Create Accounts
              </h3>

              {active === 1 && (
                <p className="mt-3 leading-7 text-black">
                  Create an account and set up your profile to begin searching jobs or hiring talent.
                </p>
              )}
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setActive(2)}
              className={`cursor-pointer border-l-4 py-4 pl-6 transition-all ${
                active === 2
                  ? "border-accent"
                  : "border-transparent"
              }`}
            >
              <h3 className="font-semibold text-black">
                2. Complete Your Profile
              </h3>

              {active === 2 && (
                <p className="mt-3 leading-7 text-black">
                  Add your skills, experience, and portfolio to stand out from others.
                </p>
              )}
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setActive(3)}
              className={`cursor-pointer border-l-4 py-4 pl-6 transition-all ${
                active === 3
                  ? "border-accent"
                  : "border-transparent"
              }`}
            >
              <h3 className="font-semibold text-black">
                3. Apply Job Or Hire
              </h3>

              {active === 3 && (
                <p className="mt-3 leading-7 text-black">
                  Start applying to jobs or hire top talent with just a few clicks.
                </p>
              )}
            </div>

          </div>
        </div>

        {/* Right Side */}
        {/* Right Side Image */}
<div className="hidden md:flex relative w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] flex-shrink-0">
  <img
    src="/hero.png"
    alt="dashboard"
    className="h-full w-full rounded-3xl object-cover"
  />

  <div className="absolute bottom-8 left-8 text-white">
    <h3 className="text-xl lg:text-2xl font-bold">
      Made for professionals
    </h3>

    <p className="mt-2 max-w-[250px] text-accent">
      Change your website into a true sector leader.
    </p>
  </div>
</div>

      </div>

      {/* Bottom Stats */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 px-5 text-center md:grid-cols-3 md:px-8 lg:mt-20">

        <div>
          <h3 className="text-4xl font-bold text-black">
            45k+
          </h3>

          <p className="mt-4 leading-7 text-black">
            Innovative design tools can thrust your business ahead by engaging new customers.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-black">
            15min+
          </h3>

          <p className="mt-4 leading-7 text-black">
            Creative design tools can drive your business ahead through unique platforms.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-black">
            2000+
          </h3>

          <p className="mt-4 leading-7 text-black">
            Revolutionary instruments can propel your venture forward.
          </p>
        </div>

      </div>
    </section>
  );
}