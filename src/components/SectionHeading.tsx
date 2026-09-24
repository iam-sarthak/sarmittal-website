import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  stickerClass?: string;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  stickerClass = "",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal>
      <div
        className={`flex flex-col gap-5 ${alignCls} max-w-3xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className={`sticker ${stickerClass}`}>{kicker}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-bold tracking-tight leading-[1.08] text-balance">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
