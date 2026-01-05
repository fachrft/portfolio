"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk efek glassmorphism yang lebih kuat saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md py-4 border-b border-foreground/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 relative group"
            onClick={() => setIsOpen(false)}
            aria-label="FZT Logo"
          >
            <svg
              width="50"
              height="30"
              viewBox="0 0 50 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground transition-transform duration-300 group-hover:scale-105"
            >
              {/* F */}
              <path
                d="M5 25V5H15M5 15H12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Z */}
              <path
                d="M20 5H30L20 25H30"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* T */}
              <path
                d="M35 5H45M40 5V25"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dot */}
              <circle cx="48" cy="25" r="2" fill="currentColor" />
            </svg>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative overflow-hidden group h-fit"
              >
                <div className="text-sm font-medium text-foreground/70 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {link.name}
                </div>
                <div className="absolute top-0 left-0 w-full text-sm font-semibold text-foreground transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 text-center">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-foreground focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-[5px]">
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-10"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-4xl font-light text-foreground hover:text-foreground/70 transition-all duration-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
