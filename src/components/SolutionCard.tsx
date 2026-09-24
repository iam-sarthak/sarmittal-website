import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/lib/solutions";
import { accents } from "@/lib/accents";

export default function SolutionCard({ solution }: { solution: Solution }) {
  const accent = accents[solution.accent];

  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group card-funky card-funky-hover relative flex h-full flex-col overflow-hidden"
    >
      {/* illustration header */}
      <div className={`relative border-b-2 border-ink ${accent.soft} px-6 pt-5 pb-0 flex justify-center`}>
        <span className="absolute left-4 top-4 rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.12em]">
          {solution.category}
        </span>
        <Image
          src={solution.illustration}
          alt=""
          width={280}
          height={280}
          className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-bold tracking-tight leading-snug">
          {solution.name}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">
          {solution.oneLiner}
        </p>
        <span className={`mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold ${accent.text === "text-yellow" ? "text-ink" : accent.text}`}>
          Explore solution
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
