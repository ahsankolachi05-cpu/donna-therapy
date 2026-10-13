"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What happens during a first session?",
    a: "Placeholder — Donna will describe what a first session typically involves, so visitors know what to expect.",
  },
  {
    q: "How do I know if counselling is right for me?",
    a: "Placeholder — guidance on who counselling can help and how to decide whether to try it.",
  },
  {
    q: "Are sessions available online or in person?",
    a: "Placeholder — Donna will confirm whether she offers in-person sessions in Portstewart, online sessions, or both.",
  },
  {
    q: "What are your fees?",
    a: "Placeholder — fee information to be confirmed by Donna. Never invent pricing.",
  },
  {
    q: "How do I arrange an appointment?",
    a: "Placeholder — the booking process Donna prefers, whether by email, phone or an online system.",
  },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-forest/60 mb-6">FAQs</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-charcoal">
            Questions, <span className="italic text-forest">answered.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl font-medium text-charcoal group-hover:text-forest transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 flex items-center justify-center border border-charcoal/20 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-forest text-ivory border-forest" : "text-forest"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 font-light leading-relaxed text-charcoal/70 max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-charcoal/45 font-light">
          Answers are placeholders — Donna will provide her actual policies and information.
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (form.message.trim().length < 5) errs.message = "Please include a brief message.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (form.website) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@donnasheppard.co.uk?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const input =
    "w-full bg-white/60 border border-charcoal/15 px-5 py-4 text-base font-light placeholder:text-charcoal/35 outline-none transition-all focus:border-forest focus:bg-white";

  return (
    <section id="contact" className="bg-sand/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-forest/60 mb-6">Contact</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-charcoal">
            Whenever you&rsquo;re ready, <span className="italic text-forest">let&rsquo;s begin.</span>
          </h2>
          <p className="mt-7 font-light leading-relaxed text-charcoal/70 max-w-md">
            Send a message using the form, or email directly. There is no pressure and no
            obligation — just a first step.
          </p>
          <div className="mt-10 space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-charcoal/50">Email</p>
              <a
                href="mailto:hello@donnasheppard.co.uk"
                className="font-serif italic text-2xl text-forest hover:text-forest-deep transition-colors"
              >
                hello@donnasheppard.co.uk
              </a>
              <p className="text-xs text-charcoal/40 mt-1">Placeholder — to be confirmed</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-charcoal/50">Location</p>
              <p className="font-light text-charcoal/75">Portstewart, Northern Ireland</p>
              <p className="text-xs text-charcoal/40 mt-1">In person & online — TBC</p>
            </div>
          </div>
          <div className="mt-10 bg-forest/5 border border-forest/15 p-6 max-w-md">
            <p className="text-sm font-light leading-relaxed text-charcoal/65">
              <span className="font-medium text-forest">A gentle note:</span> please don&rsquo;t
              include highly sensitive or urgent personal details in this general enquiry form.
              If you are in crisis, please contact your GP, Samaritans on 116 123, or emergency
              services on 999.
            </p>
          </div>
        </div>

        <div className="bg-ivory p-8 md:p-10 shadow-xl">
          {status === "sent" ? (
            <div role="status" className="py-10 text-center">
              <p className="font-serif text-3xl italic text-forest">Thank you.</p>
              <p className="mt-4 font-light text-charcoal/70 leading-relaxed">
                Your email app should now open with your message addressed and ready to send —
                nothing was submitted automatically, as this form has no server backend yet.
              </p>
              <a
                href="mailto:hello@donnasheppard.co.uk"
                className="link-underline mt-6 inline-block text-forest text-[13px] uppercase tracking-[0.2em]"
              >
                Or email directly
              </a>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <input
                type="text"
                value={form.website}
                onChange={(e) => set("website", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="space-y-6">
                <div>
                  <label htmlFor="c-name" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
                    Name *
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your name"
                    className={`${input} mt-2`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-800">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
                    Email *
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className={`${input} mt-2`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-800">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-msg" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
                    Message <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Anything you'd like to share or ask…"
                    className={`${input} mt-2 resize-none`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-800">{errors.message}</p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full bg-forest text-ivory py-4 text-[13px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-forest-deep disabled:opacity-60"
              >
                {status === "sending" ? "Preparing…" : "Send Message"}
              </button>
              <p className="mt-5 text-xs font-light text-charcoal/45 leading-relaxed">
                This form opens your email app — no data is stored on a server. See our{" "}
                <Link href="#contact" className="underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                (placeholder).
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
