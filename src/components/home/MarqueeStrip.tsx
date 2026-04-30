import { marqueeWords } from "@/content/site";

export function MarqueeStrip({ dark = false }: { dark?: boolean }) {
  const items = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];
  return (
    <div
      className={`overflow-hidden border-y py-6 ${
        dark ? "border-background/10 bg-foreground text-background" : "border-border bg-secondary text-foreground"
      }`}
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl italic md:text-5xl">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
