import type { Metadata } from "next";
import BookCall from "@/components/BookCall";

export const metadata: Metadata = {
  title: "Book a Free Call",
  description:
    "Book a free 30-minute call. Tell me how your team works today, and I'll tell you honestly what's worth automating — and what isn't.",
};

export default function BookPage() {
  return <BookCall />;
}
