export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="font-serif text-4xl font-medium sm:text-5xl">
          Donna <em className="font-light">Sheppard</em>
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/45">
          Counselling &amp; Therapy · Portstewart
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Explore</p>
            <nav className="mt-4 space-y-2.5 text-[0.95rem] text-charcoal/70">
              <a href="#help" className="block transition hover:text-plum">How I can help</a>
              <a href="#approach" className="block transition hover:text-plum">My approach</a>
              <a href="#about" className="block transition hover:text-plum">About me</a>
              <a href="#fees" className="block transition hover:text-plum">Fees</a>
              <a href="#faqs" className="block transition hover:text-plum">FAQs</a>
            </nav>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Professional</p>
            <div className="mt-4 space-y-2.5 text-[0.95rem] text-charcoal/70">
              <p>Accreditation — to be confirmed</p>
              <p>Supervision — to be confirmed</p>
              <p>Insurance — to be confirmed</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Location</p>
            <div className="mt-4 space-y-2.5 text-[0.95rem] text-charcoal/70">
              <p>Portstewart, Northern Ireland</p>
              <p>In person · Online · By phone</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">Get in touch</p>
            <div className="mt-4 space-y-2.5 text-[0.95rem] text-charcoal/70">
              <p>Phone — to be confirmed</p>
              <p>Email — to be confirmed</p>
              <a href="#contact" className="block font-semibold text-plum underline decoration-plum/40 underline-offset-4">
                Arrange a call
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 text-xs text-charcoal/45 sm:flex-row">
          <p>© 2026 Donna Sheppard · Concept website by Draft by Ryan</p>
          <p className="italic">Profile details &amp; credentials to be confirmed.</p>
        </div>
      </div>
    </footer>
  );
}
