import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Donna Sheppard — Counselling & Therapy in Portstewart",
    template: "%s — Donna Sheppard",
  },
  description:
    "A quiet place to begin. Compassionate counselling and therapy in Portstewart, Northern Ireland — in person and online. You don't have to figure everything out alone.",
  keywords: ["counselling", "therapy", "therapist", "Portstewart", "Northern Ireland", "mental wellbeing"],
  openGraph: {
    title: "Donna Sheppard — Counselling & Therapy",
    description: "A quiet place to begin. You don't have to figure everything out alone.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
