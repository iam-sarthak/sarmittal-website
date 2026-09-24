import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.04}>
          <li
            className={`card-funky card-funky-hover flex items-center gap-3 px-5 py-4 ${
              i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
            } hover:rotate-0`}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-teal">
              <Check className="size-3.5" aria-hidden />
            </span>
            <span className="text-sm font-bold">{item}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
