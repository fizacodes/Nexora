import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between px-40 bg-background text-white">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className="text-3xl font-black text-accent rotate-[-10deg]">
            N
          </span>
          <h1 className="text-2xl font-bold tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer">
            exora
          </h1>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-[12px]">
        <a
          href="#home"
          className="hover:text-accent transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-accent transition-colors duration-300"
        >
          How it works
        </a>
        <a
          href="#feature"
          className="hover:text-accent transition-colors duration-300"
        >
          Features
        </a>
        <a
          href="#faqs"
          className="hover:text-accent transition-colors duration-300"
        >
          FAQs
        </a>
        <a
          href="#contact"
          className="hover:text-accent transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4 text-[12px]">
        
        {/* Login */}
        <Link
          href="/login"
          className="py-2 px-6 border border-accent text-accent rounded-full 
          hover:bg-accent hover:text-background 
          hover:scale-105 hover:bg-opacity-90  shadow-md hover:shadow-accent/40 
          transition-all duration-300"
        >
          Login
        </Link>

        {/* Signup */}
        <Link
          href="/signup"
          className="bg-accent text-background py-2 px-6 rounded-full 
          hover:bg-opacity-90 
          hover:scale-105 
          shadow-md hover:shadow-accent/40 
          transition-all duration-300"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}