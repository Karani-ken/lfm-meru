"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  {
    label: "Events",
    href: "#events",
    dropdown: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Special Events", href: "#events" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
    ],
  },
  {
    label: "Give Online",
    href: "#give",
    dropdown: [
      { label: "Tithe & Offering", href: "#give" },
      { label: "Benevolence", href: "#give" },
    ],
  },
  { label: "Past Messages", href: "#messages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1d4a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="LFM Meru Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              LFM <span className="text-[#cc1111]">MERU</span>
            </span>
          </a>


          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    link.active ? "text-[#cc1111]" : "text-white hover:text-[#cc1111]"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#0f1d4a] border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <a key={item.label} href={item.href} className="block px-4 py-2.5 text-sm text-white hover:bg-[#cc1111] transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <a href="#give" className="inline-block bg-[#cc1111] hover:bg-[#a50e0e] text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm">
              Donate
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1b5e] border-t border-white/10 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-2.5 text-sm font-medium border-b border-white/10 last:border-0 ${
                link.active ? "text-[#cc1111]" : "text-white hover:text-[#cc1111]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#give" className="block mt-3 bg-[#cc1111] hover:bg-[#a50e0e] text-white font-semibold px-4 py-2.5 rounded text-center text-sm" onClick={() => setMobileOpen(false)}>
            Donate
          </a>
        </div>
      )}
    </nav>
  );
}
