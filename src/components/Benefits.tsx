import { Clock, TrendingUp, BatteryCharging, Eye } from "lucide-react";
import Reveal from "./Reveal";

const benefitIcons = [Clock, TrendingUp, BatteryCharging, Eye];
const benefitBgs = ["bg-yellow-soft", "bg-teal-soft", "bg-coral-soft", "bg-purple-soft"];

export default function Benefits({
  benefits,
}: {
  benefits: { title: string; description: string }[];
}) {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
      {benefits.map((b, i) => {
        const Icon = benefitIcons[i % benefitIcons.length];
        return (
          <Reveal key={b.title} delay={i * 0.08}>
            <div
              className={`card-funky card-funky-hover h-full p-6 flex flex-col gap-4 ${benefitBgs[i % benefitBgs.length]} ${
                i % 2 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0`}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--ink)]">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
