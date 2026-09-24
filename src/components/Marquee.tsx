import { Sparkles } from "lucide-react";

const items = [
  "Java",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "React",
  "REST APIs",
  "RAG & Gemini",
  "AWS",
  "Docker",
];

export default function Marquee() {
  return (
    <div
      className="relative -rotate-1 border-y-2 border-ink bg-purple py-3.5 overflow-hidden my-6"
      aria-hidden
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 px-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-white whitespace-nowrap"
              >
                {item}
                <Sparkles className="size-4 text-yellow" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
