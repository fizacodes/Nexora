"use client";

import { useState } from "react";
import { Home, Briefcase, Bell, User, Menu, X } from "lucide-react";

export default function CandidateNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 border-b shadow-sm px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            {/* Logo */}
            <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className="text-3xl font-black text-accent rotate-[-10deg]">
            N
          </span>
          <h1 className="text-2xl font-bold text-background tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer">
            exora
          </h1>
        </div>
      </div>

            {/* Home */}
            <div className="relative group pl-4">
              <a
                href="/candidate"
                className="flex items-center text-background hover:text-accent transition"
              >
                <Home size={20} />
              </a>

              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Home
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-6">

            {/* Jobs */}
            <div className="relative group">
              <button className="text-background hover:text-accent transition">
                <Briefcase size={22} />
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Jobs
              </span>
            </div>

            {/* Notifications */}
            <div className="relative group">
              <button className="text-background hover:text-accent transition relative">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Notifications
              </span>
            </div>

            {/* Profile */}
            <div className="relative group">
              <button className="text-background hover:text-accent transition">
                <User size={24} />
              </button>

              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Profile
              </span>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-background"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-background">

          <a href="/candidate" className="flex items-center gap-2">
            <Home size={18} /> Home
          </a>

          <a href="#" className="flex items-center gap-2">
            <Briefcase size={18} /> Jobs
          </a>

          <a href="#" className="flex items-center gap-2">
            <Bell size={18} /> Notifications
          </a>

          <a href="#" className="flex items-center gap-2">
            <User size={18} /> Profile
          </a>

        </div>
      )}
    </nav>
  );
}