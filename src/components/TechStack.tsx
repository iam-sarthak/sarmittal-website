import {
  Atom,
  Hexagon,
  Coffee,
  Leaf,
  Database,
  Cloud,
  MessageCircle,
  Table,
  Mail,
  CreditCard,
  Sparkles,
  Gem,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const techIcons: Record<string, { Icon: LucideIcon; color: string }> = {
  React: { Icon: Atom, color: "text-blue" },
  "Node.js": { Icon: Hexagon, color: "text-teal" },
  Java: { Icon: Coffee, color: "text-coral" },
  "Spring Boot": { Icon: Leaf, color: "text-teal" },
  PostgreSQL: { Icon: Database, color: "text-purple" },
  AWS: { Icon: Cloud, color: "text-yellow" },
  WhatsApp: { Icon: MessageCircle, color: "text-teal" },
  "Google Sheets": { Icon: Table, color: "text-teal" },
  Gmail: { Icon: Mail, color: "text-coral" },
  Razorpay: { Icon: CreditCard, color: "text-purple" },
  OpenAI: { Icon: Sparkles, color: "text-purple" },
  Gemini: { Icon: Gem, color: "text-blue" },
};

export default function TechStack({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
      {items.map((tech, i) => {
        const { Icon, color } = techIcons[tech] ?? { Icon: Hexagon, color: "text-ink" };
        return (
          <Reveal key={tech} delay={i * 0.05}>
            <li
              className={`card-funky card-funky-hover flex items-center gap-2.5 px-5 py-3 ${
                i % 2 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0`}
            >
              <Icon className={`size-4.5 ${color}`} aria-hidden />
              <span className="font-display text-sm font-bold">{tech}</span>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}
