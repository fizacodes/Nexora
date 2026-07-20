"use client";

import { useState } from "react";
import {
  Home,
  Briefcase,
  Bell,
  User,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

type NavbarClientProps = {
  unreadCount: number;
    unreadMessages: number;
};

export default function NavbarClient({ unreadCount,unreadMessages }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 border-b shadow-sm px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
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

            <div className="relative group pl-4">
              <a
                href="/candidate"
                className="flex items-center text-background hover:text-accent transition"
              >
                <Home size={20} />
              </a>

              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Home
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/candidate/applications">
              <div className="relative group">
                <button className="text-background hover:text-accent transition">
                  <Briefcase size={22} />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                  Applications
                </span>
              </div>
            </Link>

             {/* Messages */}
  <div className="relative group">
    <Link
      href="/candidate/messages"
      className="relative flex items-center justify-center rounded-full p-2 text-background transition hover:bg-white/20 hover:text-accent"
    >
      <MessageSquare size={22} />

      {unreadMessages > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-white bg-white px-1 text-[10px] font-semibold text-red-600 shadow-sm">
          {unreadMessages > 99 ? "99+" : unreadMessages}
        </span>
      )}
    </Link>

    <span className="absolute left-1/2 top-10 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
      Messages
    </span>
  </div>

            <div className="relative group">
              <Link
                href="/candidate/notification"
                className="relative flex items-center justify-center rounded-full p-2 text-background transition-all duration-200 hover:bg-white/20 hover:text-accent"
              >
                <Bell size={22} />

                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full border border-white bg-white px-1 text-[10px] font-semibold text-red-600 shadow-sm">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </span>
                )}
              </Link>

              <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                Notifications
              </span>
            </div>

            <Link href="/candidate/profile">
              <div className="relative group">
                <button className="text-background hover:text-accent transition">
                  <User size={24} />
                </button>

                <span className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                  Profile
                </span>
              </div>
            </Link>
            <LogoutButton/>
          </div>

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

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-background">
          <Link href="/candidate" className="flex items-center gap-2">
            <Home size={18} /> Home
          </Link>

          <Link
            href="/candidate/applications"
            className="flex items-center gap-2"
          >
            <Briefcase size={18} /> Applications
          </Link>

          <Link href="/candidate/messages" className="flex items-center gap-2">
            <MessageSquare size={18} /> Messages
          </Link>

          <Link
            href="/candidate/notification"
            className="flex items-center gap-2"
          >
            <Bell size={18} /> Notifications
          </Link>

          <Link href="/candidate/profile" className="flex items-center gap-2">
            <User size={18} /> Profile
          </Link>
          <LogoutButton/>

        </div>
      )}
    </nav>
  );
}
