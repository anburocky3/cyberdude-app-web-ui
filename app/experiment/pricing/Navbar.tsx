"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Free Courses", href: "#free-courses" },
    { name: "Premium", href: "#premium" },
    { name: "Rewards", href: "#rewards" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090c0f]/30 backdrop-blur-xl border-b ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="" target="_blank" className="flex  items-center gap-2 group">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#627ffd] via-[#00d3fe] to-[hsl(280,100%,60%)] hover:shadow-[0_0_30px_hsl(190_100%_50%)/0.5] glow-box flex items-center justify-center"> */}
             <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/img/cdnlogo.png"
                alt="CDN logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-orange-400">
              CYBER<span className="text-primary">DUDE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-foreground hover:bg-accent/10 hover:text-accent-foreground h-11 px-5 md:px-4 lg:px-6 whitespace-nowrap shrink-0">
              Sign In
            </button>
            <button
              className="   bg-gradient-to-r from-[#627ffd] via-[#00d3fe] to-[hsl(280,100%,60%)]
    text-primary-foreground
    hover:shadow-[0_0_30px_hsl(190_100%_50%)/0.5]
    hover:scale-105
    transition-all
    rounded
    h-11 px-5 md:px-4 lg:px-6
    whitespace-nowrap shrink-0"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t  animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t ">
                <button className="justify-start hover:bg-accent/10 hover:text-accent-foreground h-11 px-6 py-2">
                  Sign In
                </button>
                <button
                  className="bg-gradient-to-r from-[#627ffd] via-[#00d3fe] to-[hsl(280,100%,60%)] 
                            text-primary-foreground 
                            hover:shadow-[0_0_30px_hsl(190_100%_50%)/0.5] 
                            hover:scale-105 
                            transition-all
                            h-11 px-6 py-2 "
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
