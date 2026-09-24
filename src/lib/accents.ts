export type Accent = "purple" | "yellow" | "coral" | "teal" | "blue";

/** Tailwind class fragments per accent (full literals so Tailwind can see them) */
export const accents: Record<
  Accent,
  { bg: string; soft: string; text: string; sticker: string }
> = {
  purple: {
    bg: "bg-purple",
    soft: "bg-purple-soft",
    text: "text-purple",
    sticker: "sticker-purple",
  },
  yellow: {
    bg: "bg-yellow",
    soft: "bg-yellow-soft",
    text: "text-yellow",
    sticker: "",
  },
  coral: {
    bg: "bg-coral",
    soft: "bg-coral-soft",
    text: "text-coral",
    sticker: "sticker-coral",
  },
  teal: {
    bg: "bg-teal",
    soft: "bg-teal-soft",
    text: "text-teal",
    sticker: "sticker-teal",
  },
  blue: {
    bg: "bg-blue",
    soft: "bg-blue-soft",
    text: "text-blue",
    sticker: "sticker-white",
  },
};
