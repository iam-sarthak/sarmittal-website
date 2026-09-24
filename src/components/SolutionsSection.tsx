import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import SectionHeading from "./SectionHeading";
import SolutionCard from "./SolutionCard";
import Reveal from "./Reveal";

export default function SolutionsSection({
  limit,
  showViewAll = false,
}: {
  limit?: number;
  showViewAll?: boolean;
}) {
  const items = limit ? solutions.slice(0, limit) : solutions;

  return (
    <section
      id="solutions"
      className="container-site py-20 sm:py-28"
      aria-labelledby="solutions-heading"
    >
      <SectionHeading
        kicker="Solutions"
        title="Automation built around real business problems."
        subtitle="Each solution replaces a specific manual workflow. Pick the one that looks like your day — every one has its own detailed page."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 0.06}>
            <SolutionCard solution={s} />
          </Reveal>
        ))}
      </div>

      {showViewAll && (
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link href="/solutions" className="btn-funky btn-yellow">
              View All Solutions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
