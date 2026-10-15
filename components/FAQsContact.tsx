"use client";

/* ---------- 03 · Fees (placeholders — clearly marked) ---------- */
const fees = [
  {
    title: "Introductory call",
    price: "Free",
    detail: "20 minutes",
    desc: "A relaxed, no-pressure chat to see if we're a good fit. No charge, no obligation.",
    highlight: false,
  },
  {
    title: "Individual session",
    price: "To be confirmed",
    detail: "50 minutes",
    desc: "One-to-one counselling in person in Portstewart, online, or by phone.",
    highlight: true,
  },
  {
    title: "Concessions",
    price: "To be confirmed",
    detail: "Enquire",
    desc: "A limited number of reduced-fee places may be available — please ask.",
    highlight: false,
  },
];

export function Fees() {
  return (
    <section id="fees" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="text-charcoal/40">03</span> Fees
        </p>
        <div className="mt-6 max-w-2xl">
          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Simple, <em className="font-light">honest</em> pricing.
          </h2>
          <p className="mt-4 text-sm italic text-charcoal/50">
            Fee details are placeholders — final pricing to be confirmed.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {fees.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-9 ${
                f.highlight
                  ? "border-plum/30 bg-lilac"
                  : "border-charcoal/15 bg-ivory"
              }`}
            >
              <h3 className="font-serif text-2xl font-medium">{f.title}</h3>
              <p className="font-serif mt-4 text-4xl font-medium text-plum">{f.price}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                {f.detail}
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/65">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-charcoal/15 bg-ivory p-7">
          <p className="text-sm leading-relaxed text-charcoal/65">
            <span className="font-semibold text-charcoal">Cancellations:</span>{" "}
            life happens — please give as much notice as you can if you need to
            rearrange. Full cancellation policy to be confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 · FAQs ---------- */
const faqs = [
  {
    q: "How do I know if counselling is right for me?",
    a: "If something is weighing on you — a specific problem, a difficult feeling, or simply a sense that things aren't as you'd like them to be — it's worth exploring. The free introductory call is a good, no-pressure way to find out.",
  },
  {
    q: "What happens in a first session?",
    a: "Mostly, we talk. I'll ask a little about what's bringing you here and what you'd like to be different. There's no test to pass and nothing you have to prepare — just come as you are.",
  },
  {
    q: "Is everything I say confidential?",
    a: "Yes — what you share stays between us, with a few standard safety exceptions (such as risk of serious harm) which I'll always explain clearly at the start.",
  },
  {
    q: "Should I choose in-person, online, or phone sessions?",
    a: "Whichever feels most comfortable. In-person sessions take place in Portstewart; online and phone sessions offer the same confidential space from wherever you are. Many people try one and switch — that's completely fine.",
  },
  {
    q: "How often would we meet, and for how long?",
    a: "Usually weekly to begin with, though we'll agree a rhythm that suits your life and your goals. Some people come for a handful of sessions; others stay longer. We'll review regularly together.",
  },
  {
    q: "What are your qualifications?",
    a: "Full details of training, accreditation and professional memberships are to be confirmed and will be listed here.",
  },
];

export function FAQs() {
  return (
    <section id="faqs" className="border-t border-line bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="text-charcoal/40">04</span> FAQs
        </p>
        <h2 className="font-serif mt-6 text-4xl font-medium sm:text-5xl">
          Questions, <em className="font-light">answered.</em>
        </h2>
        <div className="mt-10 border-t border-charcoal/15">
          {faqs.map((f) => (
            <details key={f.q} className="faq border-b border-charcoal/15">
              <summary className="flex items-center justify-between gap-6 py-6">
                <span className="font-serif text-[1.35rem] font-medium">{f.q}</span>
                <span className="faq-icon font-serif shrink-0 text-3xl leading-none text-plum">+</span>
              </summary>
              <p className="max-w-2xl pb-7 leading-relaxed text-charcoal/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 · Contact ---------- */
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Enquiry from website");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-lilac py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="text-charcoal/40">05</span> Contact
        </p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Arrange your <em className="font-light">introductory call.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/65">
              A free 20-minute chat — a chance to ask anything, and to feel out
              whether working together feels right. No pressure, no jargon.
            </p>
            <div className="mt-8 space-y-4 text-[0.95rem]">
              <p className="flex gap-3">
                <span className="font-semibold text-plum">Phone</span>
                <span className="text-charcoal/60">To be confirmed</span>
              </p>
              <p className="flex gap-3">
                <span className="font-semibold text-plum">Email</span>
                <span className="text-charcoal/60">To be confirmed</span>
              </p>
              <p className="flex gap-3">
                <span className="font-semibold text-plum">Hours</span>
                <span className="text-charcoal/60">To be confirmed</span>
              </p>
            </div>
            <p className="mt-8 rounded-2xl border border-plum/25 bg-ivory p-5 text-sm leading-relaxed text-charcoal/65">
              Prefer to write first? Use the form — it will open your email app
              with everything filled in. Nothing is stored on this site.
            </p>
          </div>

          <div className="layered z-0">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-ivory p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                    Your name
                  </span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-[0.95rem] placeholder:text-charcoal/30 focus:border-plum"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-[0.95rem] placeholder:text-charcoal/30 focus:border-plum"
                    placeholder="jane@example.com"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                  Phone <span className="normal-case tracking-normal text-charcoal/40">(optional)</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-[0.95rem] placeholder:text-charcoal/30 focus:border-plum"
                  placeholder="07xxx xxx xxx"
                />
              </label>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                  Your message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-[0.95rem] placeholder:text-charcoal/30 focus:border-plum"
                  placeholder="A little about what's on your mind…"
                />
              </label>
              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-plum px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition hover:bg-plum-deep"
              >
                Send message
              </button>
              <p className="mt-4 text-center text-xs text-charcoal/45">
                Opens your email app — nothing is sent automatically or stored.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
