"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoutButton from "./LogOutButton";

export default function EmployerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 relative border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        {/* Navbar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/recruiter" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-accent">
              Nexora
            </span>

            <span className="rounded-full bg-accent px-2 py-1 text-xs font-semibold text-background">
              Employer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="/recruiter"
              className="text-sm font-medium text-white transition hover:text-accent"
            >
              Home
            </Link>

            <Link
              href="/recruiter/job"
              className="text-sm font-medium text-white transition hover:text-accent"
            >
              Post Jobs
            </Link>

            <Link
              href="/recruiter/show-job"
              className="text-sm font-medium text-white transition hover:text-accent"
            >
              Show Jobs
            </Link>

            <Link
              href="/recruiter/messages"
              className="text-sm font-medium text-white transition hover:text-accent"
            >
              Messages
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/recruiter/profile"
              className="text-sm font-medium text-white transition hover:text-accent"
            >
              Profile
            </Link>

            <LogoutButton />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 z-40 bg-black/40 md:hidden"
      onClick={closeMenu}
    />

    {/* Mobile Menu */}
    <div className="fixed top-20 left-0 right-0 z-50 bg-background border-t border-white/10 shadow-2xl md:hidden">
      <nav className="flex flex-col gap-6 p-6">
        <Link href="/recruiter" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/recruiter/job" onClick={closeMenu}>
          Post Jobs
        </Link>

        <Link href="/recruiter/show-job" onClick={closeMenu}>
          Show Jobs
        </Link>

        <Link href="/recruiter/messages" onClick={closeMenu}>
          Messages
        </Link>

        <Link href="/recruiter/profile" onClick={closeMenu}>
          Profile
        </Link>

        <LogoutButton />
      </nav>
    </div>
  </>
)}
    </header>
  );
}