"use client";

import { useState } from "react";

const links = [
  { label: "How I can help", href: "#help" },
  { label: "My approach", href: "#approach" },
  { label: "Fees", href: "#fees" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-plum">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#faf7f1" strokeWidth="1.6">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-serif text-[1.35rem] font-medium leading-none">
            Donna Sheppard
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-charcoal/70 transition hover:text-plum"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden text-[12px] font-semibold uppercase tracking-[0.18em] text-plum underline decoration-plum/50 decoration-1 underline-offset-8 transition hover:decoration-plum sm:inline-block"
          >
            Arrange a call
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-charcoal lg:hidden"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-ivory px-6 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium text-charcoal/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-plum"
          >
            Arrange a call
          </a>
        </nav>
      )}
    </header>
  );
}
