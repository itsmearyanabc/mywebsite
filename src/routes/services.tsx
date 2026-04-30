import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { SmartDevSection } from "@/components/home/SmartDevSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Awsmd" },
      {
        name: "description",
        content:
          "Mobile development, web development, and design solutions. The full spectrum of what Awsmd builds.",
      },
      { property: "og:title", content: "Services — Awsmd" },
      {
        property: "og:description",
        content: "Mobile development, web development, and design solutions.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Services
          </p>
          <h1
            className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            What we
            <br />
            <span className="italic font-light">do best</span>
          </h1>
        </div>
      </section>
      <ServicesSection />
      <MarqueeStrip />
      <SmartDevSection />
    </>
  );
}
