import Hero from "@/components/Hero";
import {
  EmotionalConnection,
  TherapyServices,
  AboutTherapist,
  Process,
  SignatureSection,
} from "@/components/Sections";
import { FAQs, ContactSection } from "@/components/FAQsContact";

export default function Home() {
  return (
    <>
      <Hero />
      <EmotionalConnection />
      <TherapyServices />
      <AboutTherapist />
      <Process />
      <SignatureSection />
      <FAQs />
      <ContactSection />
    </>
  );
}
