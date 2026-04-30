import { clientLogos } from "@/content/site";

export function ClientsMarquee() {
  const items = [...clientLogos, ...clientLogos, ...clientLogos];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-12">
      <div className="flex w-max animate-marquee-slow gap-16 whitespace-nowrap">
        {items.map((logo, i) => (
          <div
            key={i}
            className="font-display text-3xl font-semibold uppercase tracking-tight text-foreground/40 transition-colors hover:text-foreground"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
