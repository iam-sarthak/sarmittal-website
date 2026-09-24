import { profile } from "@/lib/resume";
import { LinkedinIcon, XIcon } from "./SocialIcons";
import Reveal from "./Reveal";

type CTASectionProps = {
  headline?: string;
  supporting?: string;
};

export default function CTASection({
  headline = "Want to work together?",
  supporting = "Send me a message on LinkedIn or X — I actually reply.",
}: CTASectionProps) {
  return (
    <section className="container-site py-20">
      <Reveal>
        <div className="relative card-funky !rounded-3xl overflow-hidden bg-ink px-6 py-16 sm:px-12 sm:py-20 text-center">
          <span className="absolute -top-6 -left-6 size-24 rounded-full bg-purple border-2 border-background/20" aria-hidden />
          <span className="absolute -bottom-8 -right-8 size-32 rounded-full bg-yellow border-2 border-background/20" aria-hidden />
          <span className="absolute top-8 right-16 size-6 rotate-12 rounded bg-teal" aria-hidden />
          <span className="absolute bottom-10 left-16 size-4 -rotate-12 rounded-full bg-coral" aria-hidden />

          <div className="relative flex flex-col items-center gap-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-background text-balance">
              {headline}
            </h2>
            <p className="font-display text-xl font-bold text-yellow">{supporting}</p>
            <div className="mt-3 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-funky btn-yellow !shadow-[4px_4px_0_rgba(255,255,255,0.25)]"
              >
                <LinkedinIcon className="size-4" />
                Message me on LinkedIn
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="btn-funky btn-white !shadow-[4px_4px_0_rgba(255,255,255,0.25)]"
              >
                <XIcon className="size-4" />
                Message me on X
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
