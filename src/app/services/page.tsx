import type { Metadata } from "next";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance services from Sarthak Mittal — custom APIs, backends, AI workflows, lead and billing automation, dashboards and production support.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Services />
      <CTASection
        headline="Don't see the exact job?"
        supporting="That's fine. Message me on LinkedIn or X and tell me what you need."
      />
    </div>
  );
}
