import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import PortfolioProjects from "@/components/PortfolioProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Experience />
      <PortfolioProjects featuredOnly showViewAll />
      <Skills />
      <Education />
      <CTASection />
    </>
  );
}
