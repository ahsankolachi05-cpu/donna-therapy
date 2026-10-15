import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-ivory">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Left — cream editorial */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:py-28">
          <p className="eyebrow animate-fade-up">
            <span className="text-charcoal/40">Counselling &amp; therapy</span>
            <span className="text-charcoal/40">·</span>
            <span>Portstewart</span>
          </p>
          <h1 className="font-serif mt-7 animate-fade-up delay-100 text-[clamp(2.9rem,6vw,4.8rem)] font-medium leading-[1.04]">
            A calm space<br />
            to be <em className="font-light">truly heard.</em>
          </h1>
          <p className="mt-7 max-w-md animate-fade-up delay-200 text-[1.02rem] leading-relaxed text-charcoal/70">
            When life feels heavy, you don&rsquo;t have to carry it alone. I offer a
            quiet, confidential space to slow down, make sense of things, and
            find your way forward — at your pace.
          </p>
          <p className="mt-6 animate-fade-up delay-200 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/50">
            In person in Portstewart&ensp;·&ensp;Online&ensp;·&ensp;By phone
          </p>
          <div className="mt-9 flex animate-fade-up delay-300 flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-plum px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory transition hover:bg-plum-deep"
            >
              Arrange an introductory call
            </a>
            <a
              href="#help"
              className="text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal/70 underline decoration-charcoal/30 decoration-1 underline-offset-8 transition hover:text-plum"
            >
              See how I can help ↓
            </a>
          </div>
        </div>
        {/* Right — full-height portrait */}
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Image
            src="/images/about-portrait.jpg"
            alt="Donna Sheppard — counsellor and therapist (placeholder portrait)"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Credential strip */}
      <div className="border-y border-line bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {[
            ["Professional standing", "Details to be confirmed"],
            ["Ways to meet", "In person · Online · Phone"],
            ["Based in", "Portstewart, Northern Ireland"],
            ["Who I work with", "Adults 18+"],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`px-6 py-6 ${i > 0 ? "border-l border-line" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-line" : ""} ${i === 2 ? "max-lg:border-l-0" : ""}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">{t}</p>
              <p className="mt-2 text-[15px] text-charcoal/75">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
