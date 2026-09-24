import type { Metadata } from "next";
import SolutionsSection from "@/components/SolutionsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Automation Solutions",
  description:
    "Eight automation solutions built around real business problems — lead management, WhatsApp automation, dashboards, invoicing, follow-ups, email, appointments and AI document processing.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <SolutionsSection />
      <CTASection
        headline="Don't see your exact problem?"
        supporting="Most of my projects start as something custom. Message me on LinkedIn or X."
      />
    </div>
  );
}
