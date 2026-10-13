import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <p className="font-serif text-2xl font-medium">Donna Sheppard</p>
            <p className="mt-2 text-sm font-light text-ivory/60">
              Counselling & Therapy
              <br />
              Portstewart, Northern Ireland
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {[
              ["#home", "Home"],
              ["#about", "About"],
              ["#therapy", "Therapy"],
              ["#faqs", "FAQs"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-ivory/65 hover:text-ivory transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="text-sm font-light text-ivory/60 space-y-2">
            <p>
              <a href="mailto:hello@donnasheppard.co.uk" className="hover:text-ivory transition-colors">
                hello@donnasheppard.co.uk
              </a>{" "}
              <span className="text-ivory/35">(placeholder)</span>
            </p>
            <p className="flex gap-5">
              <Link href="#contact" className="hover:text-ivory transition-colors">
                Privacy Policy
              </Link>
              <Link href="#contact" className="hover:text-ivory transition-colors">
                Accessibility
              </Link>
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/40 font-light">
          <p>© 2026 Donna Sheppard. All rights reserved. (Placeholder business name)</p>
          <p className="font-serif italic text-sm">A quiet place to begin.</p>
        </div>
      </div>
    </footer>
  );
}
