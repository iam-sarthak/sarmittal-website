import { X, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function BeforeAfter({
  before,
  after,
}: {
  before: string[];
  after: string[];
}) {
  return (
    <div className="grid gap-8 md:gap-6 md:grid-cols-2 max-w-3xl mx-auto">
      <Reveal>
        <div className="card-funky h-full bg-coral-soft p-7 -rotate-1 hover:rotate-0 transition-transform duration-300">
          <span className="sticker sticker-coral">Before</span>
          <ul className="mt-6 flex flex-col gap-3.5">
            {before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold text-ink-soft">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-coral text-white">
                  <X className="size-3" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="card-funky h-full bg-teal-soft p-7 rotate-1 hover:rotate-0 transition-transform duration-300">
          <span className="sticker sticker-teal">After</span>
          <ul className="mt-6 flex flex-col gap-3.5">
            {after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-bold">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-teal">
                  <Check className="size-3" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
