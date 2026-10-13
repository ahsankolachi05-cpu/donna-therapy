import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-forest-deep overflow-hidden">
      {/* Decorative contour lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M -50 ${120 + i * 62} C 300 ${80 + i * 62}, 600 ${160 + i * 62}, 1250 ${100 + i * 62}`}
            fill="none"
            stroke="#F8F6F1"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[100svh]">
        {/* Left — copy */}
        <div className="max-w-xl">
          <p className="animate-fade-up text-[11px] md:text-xs uppercase tracking-[0.4em] text-sage-light mb-7">
            A Space for You
          </p>
          <h1 className="animate-fade-up delay-100 font-serif text-[2.9rem] leading-[1.08] md:text-6xl lg:text-[4.2rem] font-light text-ivory">
            You don&rsquo;t have to figure everything out{" "}
            <span className="italic text-sand">alone.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-7 text-base md:text-lg font-light leading-relaxed text-ivory/75">
            A welcoming space to explore what you&rsquo;re feeling, understand yourself more
            deeply and find a way forward at your own pace.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="bg-ivory text-forest px-8 py-4 text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-sand hover:shadow-xl"
            >
              Take the First Step
            </Link>
            <Link
              href="#therapy"
              className="link-underline text-ivory/85 text-[13px] uppercase tracking-[0.2em] hover:text-ivory"
            >
              Discover how therapy works
            </Link>
          </div>
          <p className="animate-fade-up delay-400 mt-10 text-sm font-light text-ivory/50 italic font-serif text-base">
            A thoughtful, confidential space. No pressure. Just a place to begin.
          </p>
        </div>

        {/* Right — image with organic mask. Renders directly, never hidden. */}
        <div className="relative animate-fade-in delay-200">
          <div className="blob-mask overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto shadow-2xl">
            <Image
              src="/images/hero-therapy-room.jpg"
              alt="A peaceful, naturally lit therapy room with a comfortable armchair by a large window"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          {/* Overlapping paper shape */}
          <div className="absolute -bottom-6 -left-2 lg:left-8 bg-ivory px-6 py-4 shadow-xl max-w-[240px] rotate-[-2deg]">
            <p className="font-serif italic text-lg text-forest leading-snug">
              &ldquo;Your journey begins here.&rdquo;
            </p>
          </div>
          {/* Decorative contour doodle */}
          <svg
            className="absolute -top-8 -right-4 w-32 h-32 text-sand/60 animate-drift"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 50 C 30 20, 50 80, 70 40 S 90 60, 95 30"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 65 C 35 35, 55 90, 75 55"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
