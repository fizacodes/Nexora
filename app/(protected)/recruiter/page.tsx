import Link from "next/link";
import EmployerNavbar from "./components/Navbar";
import LearnMore from "./components/LearnMore";
import Questions from "@/app/components/Questions";
import Contact from "@/app/components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <EmployerNavbar />

      <main className="relative">
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-accent/20 blur-[120px]" />

        <div className="absolute top-40 right-0 h-[450px] w-[450px] rounded-full bg-accent/15 blur-[100px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

        {/* Hero */}
        <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              AI-Powered Hiring Platform
            </span> */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Hire top talent
              <br />
              <span className="text-accent">faster with Nexora.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Post jobs, discover qualified candidates, and streamline your
              hiring process with intelligent recruitment tools designed for
              modern companies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-accent px-8 py-4 font-semibold text-background transition hover:scale-105">
                Post a Job
              </button>
               
              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-accent hover:text-accent">
                Learn More
              </button>
              
            </div>

            <div className="mt-12 flex gap-10 text-gray-300">
              <div>
                <h2 className="text-3xl font-bold text-accent">20K+</h2>
                <p className="text-sm">Active Candidates</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-accent">5K+</h2>
                <p className="text-sm">Companies</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-accent">95%</h2>
                <p className="text-sm">Hiring Success</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LearnMore/>
      <Questions/>
      <Contact/>
    </div>
  );
}