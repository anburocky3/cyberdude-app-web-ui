"use client";

import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => setNavOpen(!navOpen);
  const toggleCompany = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full relative bg-black text-white">
      <div className="container mx-auto py-5 flex justify-between items-center px-3">
        {/* Company Logo */}
        <Link href="/" className="w-[180px] h-10">
          <img
            src="/img/logo.svg"
            className="w-full h-full object-contain"
            alt="CyberDude Networks Logo"
          />
        </Link>

        <div className="flex gap-3 items-center justify-between">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-10 items-center justify-center">
              <li className="relative" onClick={toggleCompany}>
                <div className="hover:text-orange-500 transition-colors duration-300 flex items-center cursor-pointer">
                  <span>Company</span>
                  <ChevronDown
                    size={18}
                    className={`ml-1 transition-transform duration-300 ${menuOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </div>

                {/* Company Dropdown Menu */}
                {menuOpen && (
                  <ul className="absolute left-0 mt-2 border border-gray-800 bg-black shadow-lg rounded-md w-44 py-2 z-30">
                    <li>
                      <Link href="/company#about" className="block px-4 py-2 hover:bg-orange-500 hover:text-black transition">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/company#mission" className="block px-4 py-2 hover:bg-orange-500 hover:text-black transition">
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/impact" className="block px-4 py-2 hover:bg-orange-500 hover:text-black transition">
                        Impact
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/awards" className="block px-4 py-2 hover:bg-orange-500 hover:text-black transition">
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link href="/company/partner" className="block px-4 py-2 hover:bg-orange-500 hover:text-black transition">
                        Partner
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/explore" className="hover:text-orange-500 transition-colors duration-300">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/recruiters" className="hover:text-orange-500 transition-colors duration-300">
                  Recruiters
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-500 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get Started Button */}
          <Link
            href="#"
            className="hidden md:flex ml-5 px-6 py-2 rounded-full bg-linear-to-r from-orange-300 to-orange-500 text-black font-medium hover:from-orange-400 hover:to-orange-500 transition-all duration-300 justify-center items-center"
          >
            Get Started!
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <div
            onClick={handleNavbar}
            className="hover:text-orange-500 transition-colors cursor-pointer duration-300 md:hidden ml-4"
          >
            {navOpen ? <X size={34} /> : <Menu size={34} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 p-5 md:hidden z-50">
          <ul className="flex flex-col gap-6 items-start">
            <li><Link href="/company" className="text-lg hover:text-orange-500" onClick={handleNavbar}>Company</Link></li>
            <li><Link href="/explore" className="text-lg hover:text-orange-500" onClick={handleNavbar}>Explore</Link></li>
            <li><Link href="/recruiters" className="text-lg hover:text-orange-500" onClick={handleNavbar}>Recruiters</Link></li>
            <li><Link href="/pricing" className="text-lg hover:text-orange-500" onClick={handleNavbar}>Pricing</Link></li>
            <li className="w-full">
               <Link href="#" className="flex w-full py-3 rounded-md bg-orange-500 text-black font-bold justify-center">Get Started!</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
