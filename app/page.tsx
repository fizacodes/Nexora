import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Questions from "./components/Questions";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-background min-h-screen flex justify-center"
      >
        <div className="flex flex-col items-center pt-12">
          <h1 className="text-center text-6xl font-bold max-w-200">
            Build & launch a job board Fast with Nexora
          </h1>

          <div className="mt-6 flex items-center bg-[#384D42] rounded-full px-4 py-2 w-100 max-w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 text-[12px] outline-none text-white"
            />

            <button className="bg-accent text-background px-6 py-1 text-[12px] rounded-full font-medium">
              Search
            </button>
          </div>

          <div className="overflow-hidden pt-4">
            <img src="hero.png" alt="Hero" width={800} height={500} />
          </div>
        </div>
      </section>
      
       <section id="about">
      <About/>
      </section>
       <section id="feature">
      <Features/>
      </section>
       <section id="faqs">
      <Questions/>
      </section>
       <section id="contact">
      <Contact/>
      </section>

    </>
  );
}