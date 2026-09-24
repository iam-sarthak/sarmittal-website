import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email sarthakmittalcs@gmail.com, message me on LinkedIn or X, or send a note from the form.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Contact />
    </div>
  );
}
