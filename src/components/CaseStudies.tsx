import { Plane, Stethoscope, Store, ArrowDown, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type WorkflowStep = {
  label: string;
  /** true when the step runs automatically in the built system */
  auto?: boolean;
};

const cases = [
  {
    icon: Plane,
    type: "Travel Business",
    bg: "bg-blue-soft",
    rotate: "-rotate-1",
    problem:
      "Bookings and customer information were being handled manually across WhatsApp and spreadsheets.",
    solution:
      "Booking system with automated confirmations, payment integration and a customer database.",
    workflow: [
      { label: "Customer books a trip on the website" },
      { label: "Payment collected and verified", auto: true },
      { label: "Confirmation sent on WhatsApp and email", auto: true },
      { label: "Booking saved to the customer database", auto: true },
      { label: "Pre-trip reminders and documents scheduled", auto: true },
    ] as WorkflowStep[],
    result:
      "A single, centralized booking workflow — every booking, payment and customer record in one place.",
  },
  {
    icon: Stethoscope,
    type: "Clinic",
    bg: "bg-teal-soft",
    rotate: "rotate-1",
    problem:
      "Appointments were booked over phone calls, and no-shows were frequent because reminders were manual.",
    solution:
      "Online booking with automatic confirmations and WhatsApp reminders before every appointment.",
    workflow: [
      { label: "Patient picks a free slot online" },
      { label: "Confirmation sent instantly", auto: true },
      { label: "Reminders go out 24h and 2h before the visit", auto: true },
      { label: "Missed appointment triggers a rebooking prompt", auto: true },
      { label: "Post-visit follow-up message sent", auto: true },
    ] as WorkflowStep[],
    result:
      "Self-service scheduling and consistent reminders, with far less time spent on the phone.",
  },
  {
    icon: Store,
    type: "Distribution Company",
    bg: "bg-yellow-soft",
    rotate: "-rotate-1",
    problem:
      "Orders arrived on WhatsApp and were retyped into Excel for billing and inventory tracking.",
    solution:
      "Order capture automation feeding a central database, with auto-generated invoices and stock updates.",
    workflow: [
      { label: "Retailer sends an order on WhatsApp" },
      { label: "Items and quantities extracted from the message", auto: true },
      { label: "Invoice generated and sent back", auto: true },
      { label: "Stock levels updated in the database", auto: true },
      { label: "Daily sales summary delivered to the owner", auto: true },
    ] as WorkflowStep[],
    result:
      "Orders flow from chat to invoice without retyping, and stock levels stay current automatically.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="container-site py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        kicker="Client work"
        title="A few systems I built for real businesses."
        subtitle="Booking, clinics and distribution — the freelance side of the same backend habit: take a messy workflow and make it run itself."
        stickerClass="sticker-teal"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.type} delay={i * 0.08}>
            <article
              className={`card-funky card-funky-hover h-full p-7 flex flex-col gap-5 ${c.bg} ${c.rotate} hover:rotate-0`}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--ink)]">
                  <c.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight">{c.type}</h3>
              </div>

              <dl className="flex flex-col gap-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-coral mb-1">
                    Problem
                  </dt>
                  <dd className="text-ink-soft">{c.problem}</dd>
                </div>
                <div>
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-purple mb-1">
                    Solution
                  </dt>
                  <dd className="text-ink-soft">{c.solution}</dd>
                </div>

                {/* the workflow that was built */}
                <div className="rounded-xl border-2 border-ink bg-paper p-4 shadow-[2px_2px_0_var(--ink)]">
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-3">
                    The workflow
                  </dt>
                  <dd>
                    <ol className="flex flex-col">
                      {c.workflow.map((step, j) => (
                        <li key={step.label} className="flex flex-col">
                          <div className="flex items-start gap-2.5">
                            <span
                              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-ink ${
                                step.auto ? "bg-purple text-white" : "bg-yellow"
                              }`}
                            >
                              {step.auto ? (
                                <Zap className="size-2.5" aria-hidden />
                              ) : (
                                <span className="font-display text-[0.55rem] font-bold">
                                  {j + 1}
                                </span>
                              )}
                            </span>
                            <span className="text-[0.82rem] leading-snug font-semibold">
                              {step.label}
                              {step.auto && (
                                <span className="ml-1.5 inline-block align-middle rounded-full border-2 border-ink bg-teal px-1.5 py-px font-display text-[0.5rem] font-bold uppercase tracking-wider">
                                  Auto
                                </span>
                              )}
                            </span>
                          </div>
                          {j < c.workflow.length - 1 && (
                            <span className="ml-[9px] my-0.5 flex" aria-hidden>
                              <ArrowDown className="size-3 text-ink/30" />
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </dd>
                </div>

                <div className="rounded-xl border-2 border-ink bg-paper p-3.5 shadow-[2px_2px_0_var(--ink)]">
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal mb-1">
                    Result
                  </dt>
                  <dd className="font-semibold">{c.result}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
