import Reveal from "./Reveal";

const numberBgs = ["bg-yellow", "bg-teal", "bg-coral", "bg-purple", "bg-blue", "bg-yellow"];

export default function StepsSection({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="mx-auto max-w-2xl flex flex-col gap-5">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.06}>
          <li
            className={`card-funky card-funky-hover flex items-start gap-5 p-6 ${
              i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
            } hover:rotate-0`}
          >
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink font-display text-sm font-bold shadow-[2px_2px_0_var(--ink)] ${numberBgs[i % numberBgs.length]} ${
                ["bg-purple", "bg-coral"].includes(numberBgs[i % numberBgs.length])
                  ? "text-white"
                  : "text-ink"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-bold tracking-tight">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
