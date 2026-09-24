"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Zap } from "lucide-react";
import type { WorkflowNode } from "@/lib/solutions";

type WorkflowDiagramProps = {
  nodes: WorkflowNode[];
  /** sources displayed side-by-side feeding into the flow */
  sources?: string[];
  variant?: "manual" | "automated";
  ariaLabel: string;
};

export default function WorkflowDiagram({
  nodes,
  sources,
  variant = "automated",
  ariaLabel,
}: WorkflowDiagramProps) {
  const reduce = useReducedMotion();
  const isManual = variant === "manual";

  return (
    <div className="mx-auto max-w-lg" role="img" aria-label={ariaLabel}>
      {sources && sources.length > 0 && (
        <>
          <div className="flex flex-wrap justify-center gap-2.5">
            {sources.map((s, i) => (
              <motion.span
                key={s}
                initial={reduce ? false : { opacity: 0, y: 12, rotate: i % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-bold shadow-[2px_2px_0_var(--ink)] ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                }`}
              >
                {s}
              </motion.span>
            ))}
          </div>
          <div
            className={`mx-auto h-9 w-0.5 ${isManual ? "bg-ink/20" : "connector-v"}`}
            aria-hidden
          />
        </>
      )}

      <ol className="flex flex-col items-stretch">
        {nodes.map((node, i) => (
          <li key={node.label} className="flex flex-col items-stretch">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16, rotate: i % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className={`flex items-center gap-4 rounded-2xl border-2 border-ink px-5 py-4 ${
                node.highlight
                  ? "bg-purple text-white shadow-[4px_4px_0_var(--ink)]"
                  : node.friction
                    ? "bg-coral-soft shadow-[3px_3px_0_var(--ink)]"
                    : "bg-paper shadow-[3px_3px_0_var(--ink)]"
              }`}
            >
              {node.highlight && (
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-yellow text-ink">
                  <Zap className="size-4" aria-hidden />
                </span>
              )}
              {node.friction && (
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-coral text-white">
                  <AlertTriangle className="size-4" aria-hidden />
                </span>
              )}
              <div>
                <p className="font-display text-sm font-bold">{node.label}</p>
                {node.sublabel && (
                  <p
                    className={`mt-0.5 text-xs ${
                      node.highlight ? "text-white/80" : "text-ink-soft"
                    }`}
                  >
                    {node.sublabel}
                  </p>
                )}
              </div>
              {node.friction && (
                <span className="ml-auto shrink-0 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-display text-[0.6rem] font-bold uppercase tracking-wider text-coral">
                  Friction
                </span>
              )}
            </motion.div>

            {i < nodes.length - 1 && (
              <div
                className={`mx-auto h-8 ${
                  isManual ? "w-0.5 bg-ink/20" : "connector-v"
                }`}
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
