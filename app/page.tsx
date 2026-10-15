import Hero from "@/components/Hero";
import { HowICanHelp, MyApproach, AboutTherapist } from "@/components/Sections";
import { Fees, FAQs, ContactSection } from "@/components/FAQsContact";

export default function Home() {
  return (
    <>
      <Hero />
      <HowICanHelp />
      <MyApproach />
      <AboutTherapist />
      <Fees />
      <FAQs />
      <ContactSection />
    </>
  );
}
