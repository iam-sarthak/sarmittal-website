import type { Metadata } from "next";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Backend engineer at CarePay and previously Leverage Edu — production APIs, RAG workflows, NBFC integrations and a lot of PostgreSQL.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Experience />
      <Education />
      <CTASection
        headline="That's the work so far."
        supporting="Want the details? Message me on LinkedIn or X."
      />
    </div>
  );
}
