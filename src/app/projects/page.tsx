import type { Metadata } from "next";
import PortfolioProjects from "@/components/PortfolioProjects";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI contract intelligence, an interview simulator, Dealstack CRM, games and tools — projects from my resume, LinkedIn and GitHub.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <PortfolioProjects />
      <CaseStudies />
      <CTASection
        headline="Want to talk about one of these?"
        supporting="Message me on LinkedIn or X — I'm happy to walk through the work."
      />
    </div>
  );
}
