"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#therapy", label: "Therapy" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(48,52,47,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className={`font-serif text-2xl md:text-[1.7rem] font-medium tracking-wide transition-colors duration-500 ${
              scrolled || open ? "text-forest" : "text-ivory"
            }`}
          >
            Donna Sheppard
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-[13px] uppercase tracking-[0.18em] transition-colors duration-500 ${
                  scrolled ? "text-charcoal/75 hover:text-forest" : "text-ivory/90 hover:text-ivory"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-forest text-ivory px-6 py-3 text-[13px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-forest-deep hover:shadow-lg"
            >
              Arrange a Consultation
            </Link>
          </div>

          <button
            className={`md:hidden flex h-11 w-11 flex-col items-center justify-center gap-[7px] transition-colors duration-500 ${
              scrolled || open ? "text-forest" : "text-ivory"
            }`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span className={`block h-[2px] w-7 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-forest-deep transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center px-10 gap-2"
          aria-label="Mobile navigation"
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`font-serif text-4xl text-ivory py-3 transition-all duration-500 hover:text-sage-light ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
            className={`mt-8 inline-block bg-ivory text-forest px-8 py-4 text-sm uppercase tracking-[0.2em] text-center transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Arrange a Consultation
          </Link>
        </nav>
      </div>
    </>
  );
}
