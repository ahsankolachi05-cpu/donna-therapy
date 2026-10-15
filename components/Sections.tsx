import Image from "next/image";

/* ---------- 01 · How I can help ---------- */
const helpCards = [
  {
    title: "Anxiety & overwhelm",
    desc: "When your mind won't switch off and everything feels urgent — a space to slow the noise and find steadier ground.",
  },
  {
    title: "Low mood & depression",
    desc: "For the flat, heavy days when joy feels far away. Together we gently explore what's weighing on you.",
  },
  {
    title: "Life transitions",
    desc: "New chapters — parenthood, career change, relocation, retirement — can shake who you thought you were. Let's make sense of the shift.",
  },
  {
    title: "Relationships",
    desc: "Patterns that keep repeating, conversations that never land. A neutral space to understand yourself and others more clearly.",
  },
  {
    title: "Self-esteem",
    desc: "For the inner critic that never rests. We work on building a kinder, more honest relationship with yourself.",
  },
  {
    title: "Grief & loss",
    desc: "Loss reshapes everything. Here there is room for all of it — the sadness, the anger, the love that remains.",
  },
];

export function HowICanHelp() {
  return (
    <section id="help" className="bg-lilac py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="text-charcoal/40">01</span> How I can help
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Whatever you&rsquo;re carrying, <em className="font-light">it&rsquo;s welcome here.</em>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/65">
              People come to counselling for many reasons — sometimes with a clear
              problem, sometimes with a feeling they can&rsquo;t quite name. Both
              are a fine place to begin.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {helpCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-charcoal/15 bg-ivory p-7 transition hover:border-plum/40"
              >
                <h3 className="font-serif text-[1.45rem] font-medium">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/65">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 · My approach ---------- */
export function MyApproach() {
  return (
    <section id="approach" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="text-charcoal/40">02</span> My approach
        </p>
        <div className="mt-6 max-w-3xl">
          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Therapy that <em className="font-light">meets you</em> where you are.
          </h2>
          <p className="mt-6 leading-relaxed text-charcoal/70">
            There&rsquo;s no single right way to do therapy. My work is grounded in
            listening deeply and honestly — creating a relationship where you feel
            safe enough to be yourself, even the parts you usually keep hidden.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            We go at your pace. Some sessions are about untangling a specific
            problem; others are simply about being heard. Over time, that steady
            space often brings clarity, relief, and a quieter confidence in
            yourself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-charcoal/15 bg-ivory p-9">
            <p className="font-serif text-lg italic text-plum">01</p>
            <h3 className="font-serif mt-2 text-2xl font-medium">A pace that respects you</h3>
            <p className="mt-3 leading-relaxed text-charcoal/65">
              You will never be rushed, pushed, or told what to feel. We move at
              the speed of trust — and trust takes the time it takes.
            </p>
          </div>
          <div className="rounded-2xl border border-charcoal/15 bg-ivory p-9">
            <p className="font-serif text-lg italic text-plum">02</p>
            <h3 className="font-serif mt-2 text-2xl font-medium">Depth that leads somewhere</h3>
            <p className="mt-3 leading-relaxed text-charcoal/65">
              This isn&rsquo;t just a chat. We look gently beneath the surface so
              change isn&rsquo;t only felt in the room — it follows you home.
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="layered z-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-therapy-room.jpg"
              alt="A calm, welcoming therapy room"
              width={900}
              height={650}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl font-medium">
              Counselling or psychotherapy — <em className="font-light">what&rsquo;s the difference?</em>
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-charcoal/15 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Counselling</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  Often shorter-term and focused — a supportive space to work
                  through a specific difficulty or life event.
                </p>
              </div>
              <div className="rounded-2xl border border-charcoal/15 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Psychotherapy</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  Often longer-term and deeper — exploring patterns, history and
                  identity for lasting change.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/55">
              Not sure which fits? That&rsquo;s exactly what the introductory call
              is for — we&rsquo;ll figure it out together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
const credentials = [
  "Professional qualifications — to be confirmed",
  "Accreditation & memberships — to be confirmed",
  "Supervision & insurance — to be confirmed",
];

export function AboutTherapist() {
  return (
    <section id="about" className="border-t border-line bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="layered z-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/about-portrait.jpg"
            alt="Donna Sheppard — counsellor (placeholder portrait)"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="font-serif mt-6 text-5xl font-medium sm:text-6xl">
            Donna <em className="font-light">Sheppard</em>
          </h2>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/50">
            Counsellor · Portstewart, Northern Ireland
          </p>
          <div className="mt-7 space-y-5 leading-relaxed text-charcoal/70">
            <p>
              Hello — I&rsquo;m Donna. I&rsquo;m a counsellor based in Portstewart,
              offering a warm, confidential space for adults navigating life&rsquo;s
              harder stretches.
            </p>
            <p>
              I believe therapy works best when it feels human: no jargon, no
              judgement, just honest conversation with someone who is genuinely
              on your side. My role isn&rsquo;t to fix you — it&rsquo;s to walk
              alongside you while you find your own way through.
            </p>
            <p className="text-sm italic text-charcoal/50">
              Full biography and professional background to be confirmed.
            </p>
          </div>
          <ul className="mt-8 space-y-3 border-t border-line pt-8">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[0.95rem] text-charcoal/70">
                <span className="font-serif text-xl leading-none text-plum">+</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
