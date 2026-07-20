import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
     <section
  id="home"
  className="min-h-screen overflow-x-hidden bg-background flex items-center justify-center"
>
      <div className="flex w-full max-w-7xl flex-col items-center px-5 py-2 md:px-8 md:py-12">
        <div className="mb-4 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
  🚀 Find Your Dream Job Faster
</div>
          {/* Heading */}
         <h1 className="max-w-5xl text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
  Build & Launch Your
  <span className="block text-accent">
    Dream Career
  </span>
  with Nexora
</h1>

<p className="mt-5 max-w-xl text-center text-sm leading-7 text-gray-300 sm:text-base">
  Discover thousands of jobs, connect with top companies,
  and take the next step in your career—all in one place.
</p>


          {/* Search Bar */}
          <div className="mt-6 sm:hidden flex items-center bg-[#384D42] rounded-full px-4 py-2 w-100 max-w-full">
            {" "}
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 text-[12px] outline-none text-white"
            />{" "}
            <button className="bg-accent text-background px-6 py-1 text-[12px] rounded-full font-medium">
              {" "}
              Search{" "}
            </button>{" "}
          </div>

          {/* Hero Image */}
        <div className="mt-8 flex w-full justify-center">
  <img
    src="hero.png"
    alt="Hero"
    className="w-[95%] max-w-[800px] object-contain sm:w-[90%] md:w-full"
  />
</div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="feature">
        <Features />
      </section>

      <section id="faqs">
        <Questions />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
