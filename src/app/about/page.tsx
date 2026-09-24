import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Sarthak Mittal, a backend engineer in Gurugram. CarePay, Leverage Edu, MCA from Thapar — APIs, databases and AI workflows.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <About />
      <Skills />
      <Education />
      <CTASection
        headline="That's the short version."
        supporting="The long version is a message on LinkedIn or X."
      />
    </div>
  );
}
