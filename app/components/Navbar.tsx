"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background text-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="-rotate-6 text-3xl font-black text-accent">
            N
          </span>
          <span className="text-2xl font-bold tracking-tight hover:text-accent transition-colors">
            exora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:gap-8 text-sm md:flex">
          <a href="#home" className="hover:text-accent transition">
            Home
          </a>

          <a href="#about" className="hover:text-accent transition">
            How it works
          </a>

          <a href="#feature" className="hover:text-accent transition">
            Features
          </a>

          <a href="#faqs" className="hover:text-accent transition">
            FAQs
          </a>

          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-accent px-6 py-2 text-sm text-accent transition hover:bg-accent hover:text-background"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-accent px-6 py-2 text-sm text-background transition hover:opacity-90"
          >
            Signup
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background">
          <div className="flex flex-col px-6 py-5 space-y-5">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-accent transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-accent transition"
            >
              How it works
            </a>

            <a
              href="#feature"
              onClick={closeMenu}
              className="hover:text-accent transition"
            >
              Features
            </a>

            <a
              href="#faqs"
              onClick={closeMenu}
              className="hover:text-accent transition"
            >
              FAQs
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-accent transition"
            >
              Contact
            </a>

            <div className="flex flex-col gap-3 pt-3">
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-full border border-accent py-2 text-center text-accent transition hover:bg-accent hover:text-background"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="rounded-full bg-accent py-2 text-center text-background transition hover:opacity-90"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}