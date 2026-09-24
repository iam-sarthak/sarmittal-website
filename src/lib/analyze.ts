import { solutions, type Solution } from "./solutions";

/** keyword map used to match a described problem to a solution */
const keywordMap: Record<string, string[]> = {
  "lead-management": [
    "lead",
    "leads",
    "crm",
    "sales",
    "enquiry",
    "enquiries",
    "inquiry",
    "inquiries",
    "prospect",
    "pipeline",
  ],
  "whatsapp-leads": ["whatsapp", "chat", "chats", "messages", "dm", "dms"],
  "excel-to-dashboard": [
    "excel",
    "spreadsheet",
    "spreadsheets",
    "sheet",
    "sheets",
    "report",
    "reports",
    "dashboard",
    "data entry",
    "mis",
  ],
  "invoice-automation": [
    "invoice",
    "invoices",
    "invoicing",
    "billing",
    "bill",
    "bills",
    "payment",
    "payments",
    "gst",
  ],
  "follow-up-automation": [
    "follow up",
    "follow-up",
    "followup",
    "reminder",
    "reminders",
    "renewal",
    "renewals",
    "quote",
    "quotes",
    "quotation",
    "pending",
  ],
  "email-automation": [
    "email",
    "emails",
    "newsletter",
    "onboarding",
    "welcome",
    "drip",
  ],
  "appointment-automation": [
    "appointment",
    "appointments",
    "booking",
    "bookings",
    "schedule",
    "scheduling",
    "calendar",
    "no-show",
    "no show",
    "slot",
    "slots",
  ],
  "ai-document-processing": [
    "document",
    "documents",
    "pdf",
    "pdfs",
    "scan",
    "scans",
    "scanned",
    "extract",
    "ocr",
    "kyc",
    "form",
    "forms",
    "application",
    "applications",
  ],
};

export type Analysis = {
  /** the visitor's original description */
  input: string;
  /** best matching solution, if any */
  solution: Solution | null;
  /** short diagnosis of the problem */
  diagnosis: string;
  /** what I'd build, as workflow step labels */
  plan: string[];
  /** closing line */
  closing: string;
};

/** keywords that strongly identify a channel/domain get extra weight */
const heavyKeywords = new Set([
  "whatsapp",
  "invoice",
  "invoices",
  "invoicing",
  "appointment",
  "appointments",
  "booking",
  "bookings",
  "pdf",
  "pdfs",
  "ocr",
  "kyc",
]);

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function analyzeProblem(input: string): Analysis {
  const text = input.toLowerCase();

  let best: { slug: string; score: number } | null = null;
  for (const [slug, keywords] of Object.entries(keywordMap)) {
    let score = 0;
    for (const kw of keywords) {
      // word-boundary match so "sheet" doesn't match inside "spreadsheet"
      const re = new RegExp(`\\b${escapeRegExp(kw)}\\b`, "i");
      if (re.test(text)) {
        score += heavyKeywords.has(kw) || kw.includes(" ") ? 2 : 1;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { slug, score };
    }
  }

  const solution = best
    ? (solutions.find((s) => s.slug === best.slug) ?? null)
    : null;

  if (solution) {
    const introSnippet = solution.problem.intro
      .split(". ")
      .slice(0, 2)
      .join(". ")
      .replace(/\.$/, "");
    return {
      input,
      solution,
      diagnosis: `This sounds like a classic ${solution.name.toLowerCase()} problem. ${introSnippet}.`,
      plan: solution.automatedFlow.map((n) =>
        n.sublabel ? `${n.label} — ${n.sublabel}` : n.label
      ),
      closing: `A system like this typically takes ${solution.timeline} to build. On a short call I'll map your exact workflow and tell you what's worth automating — and what isn't.`,
    };
  }

  return {
    input,
    solution: null,
    diagnosis:
      "This doesn't map to one of my ready-made playbooks — which usually means it's a custom workflow. That's fine: most of my projects start exactly like this.",
    plan: [
      "Map your current process — every step, tool and handoff",
      "Identify the repetitive parts that don't need a human",
      "Design an automation layer that connects your existing tools",
      "Build, test with your real data, and hand over a running system",
    ],
    closing:
      "The fastest way forward is a short call: you describe how this works today, and I'll tell you honestly what can be automated — and what isn't worth it.",
  };
}
