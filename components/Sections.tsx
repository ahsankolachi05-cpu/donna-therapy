import Image from "next/image";
import Link from "next/link";

const themes = [
  {
    title: "When everything feels overwhelming.",
    text: "Life can pile up until even small things feel heavy. Having a space to set it all down can make a real difference.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "When you need space to understand your feelings.",
    text: "Some feelings are hard to name, let alone explain. Talking them through at your own pace can bring quiet clarity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path
          d="M24 6c8 0 14 6 14 14 0 9-8 12-10 20h-8c-2-8-10-11-10-20 0-8 6-14 14-14z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "When you're ready for something to change.",
    text: "Change doesn't have to be dramatic. Sometimes it begins with a single honest conversation.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 24h30M28 14l10 10-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
];

export function EmotionalConnection() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-forest/60 mb-6">
            Why people come to therapy
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-charcoal">
            Sometimes, life feels <span className="italic text-forest">heavier</span> than it should.
          </h2>
          <p className="mt-7 text-base md:text-lg font-light leading-relaxed text-charcoal/70">
            People seek support for many reasons — during stressful, confusing or difficult
            periods, or simply when they want to understand themselves better. Whatever brings
            you here, you are welcome.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {themes.map((t, i) => (
            <div
              key={i}
              className={`text-center md:text-left ${i === 1 ? "md:pt-12" : ""} ${
                i === 2 ? "md:pt-24" : ""
              }`}
            >
              <div className="text-forest/70 flex justify-center md:justify-start">{t.icon}</div>
              <h3 className="mt-6 font-serif text-2xl md:text-[1.7rem] font-medium leading-snug text-charcoal">
                {t.title}
              </h3>
              <p className="mt-4 font-light leading-relaxed text-charcoal/65">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    name: "Individual Counselling",
    desc: "One-to-one conversations in a confidential setting — a dedicated space to explore whatever is on your mind, at a pace that feels right for you.",
    image: "/images/service-calm.jpg",
    alt: "Two chairs facing each other in soft window light, a calm counselling space",
  },
  {
    name: "Emotional Wellbeing",
    desc: "Support for understanding and navigating your emotional life — building awareness, resilience and a kinder relationship with yourself.",
    image: "/images/calm-detail.jpg",
    alt: "Smooth sea-worn stones on soft sand, a calming natural detail",
  },
  {
    name: "Personal Growth",
    desc: "Space for reflection and self-discovery — exploring patterns, values and direction as you grow into the next chapter of your life.",
    image: "/images/service-growth.jpg",
    alt: "Soft morning sunlight filtering through green leaves",
  },
];

export function TherapyServices() {
  return (
    <section id="therapy" className="bg-sand/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-forest/60 mb-6">Therapy</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-charcoal">
            Support that <span className="italic text-forest">starts with you.</span>
          </h2>
          <p className="mt-6 text-charcoal/60 text-sm uppercase tracking-[0.2em]">
            Proposed services — to be confirmed with Donna
          </p>
        </div>

        <div className="mt-16 md:mt-20 space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image renders directly — never hidden by animation */}
              <div className="md:[direction:ltr]">
                <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="md:[direction:ltr]">
                <p className="font-serif italic text-lg text-forest/60">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-3xl md:text-5xl font-light text-charcoal">
                  {s.name}
                </h3>
                <p className="mt-5 max-w-md font-light leading-relaxed text-charcoal/70">{s.desc}</p>
                <Link
                  href="#contact"
                  className="link-underline mt-7 inline-block text-[13px] uppercase tracking-[0.2em] text-forest"
                >
                  Explore this service
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-charcoal/10 pt-8">
          <p className="text-sm text-charcoal/50 font-light max-w-2xl">
            Service names and descriptions are editable placeholders. Donna will confirm her
            actual offerings, qualifications and specialisms.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutTherapist() {
  return (
    <section id="about" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Portrait renders directly */}
        <div className="relative max-w-sm mx-auto md:mx-0 w-full">
          <div className="aspect-[3/4] overflow-hidden shadow-xl">
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait placeholder for Donna Sheppard, counsellor"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 md:-right-6 bg-forest text-ivory px-6 py-4 shadow-lg">
            <p className="font-serif italic text-lg">Portstewart, Northern Ireland</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-forest/60 mb-6">About</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
            A little <span className="italic text-forest">about me.</span>
          </h2>
          <div className="mt-7 space-y-5 font-light leading-relaxed text-charcoal/75">
            <p>
              Hello, I&rsquo;m Donna. I offer a warm, confidential space where you can talk
              openly and be heard without judgement.
            </p>
            <p>
              My approach is grounded in the belief that everyone has the capacity for growth
              and change — sometimes we just need the right support to find our way.
            </p>
            <p className="border-l-2 border-sage pl-5 italic font-serif text-lg text-charcoal/70">
              &ldquo;Placeholder biography — Donna&rsquo;s own words, qualifications,
              professional memberships and therapeutic approach will appear here.&rdquo;
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Qualifications TBC", "Memberships TBC", "Approach TBC"].map((t) => (
              <span
                key={t}
                className="border border-charcoal/15 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href="#contact"
            className="mt-10 inline-block bg-forest text-ivory px-8 py-4 text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-forest-deep hover:shadow-lg"
          >
            Get to Know Me
          </Link>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Make Contact",
    text: "Reach out with a question or arrange an initial conversation. There is no commitment at this stage.",
  },
  {
    n: "02",
    title: "Get to Know Each Other",
    text: "Discuss what brings you to therapy and explore whether the approach feels right for you.",
  },
  {
    n: "03",
    title: "Take Things at Your Pace",
    text: "Agree on appropriate next steps together, without pressure. You set the rhythm.",
  },
];

export function Process() {
  return (
    <section className="bg-forest text-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-sage-light mb-6">The Process</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.1]">
            Beginning is <span className="italic text-sand">simpler</span> than you think.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative border-t border-ivory/20 pt-8">
              <p className="font-serif italic text-5xl text-sage/60">{s.n}</p>
              <h3 className="mt-5 font-serif text-2xl md:text-3xl font-medium">{s.title}</h3>
              <p className="mt-4 font-light leading-relaxed text-ivory/70">{s.text}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 text-sage/40" aria-hidden="true">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M0 8h30M24 2l6 6-6 6" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SignatureSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width coastal image renders directly */}
      <div className="relative h-[70vh] min-h-[480px]">
        <Image
          src="/images/signature-coast.jpg"
          alt="Serene misty coastline of Northern Ireland at dawn"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/45" />
        {/* Animated contour lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M -50 ${80 + i * 55} C 350 ${40 + i * 55}, 700 ${120 + i * 55}, 1250 ${60 + i * 55}`}
              fill="none"
              stroke="#F8F6F1"
              strokeWidth="1"
              className="animate-drift"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${9 + i}s` }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h2 className="max-w-4xl text-center font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.12] text-ivory">
            You deserve a space where you can <span className="italic">simply be.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
