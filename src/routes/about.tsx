import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARMEDIAS" },
      {
        name: "description",
        content:
          "We're a tight-knit team of designers and engineers obsessed with shipping work that lasts. Get to know ARMEDIAS.",
      },
      { property: "og:title", content: "About — ARMEDIAS" },
      {
        property: "og:description",
        content: "Designers and engineers obsessed with shipping work that lasts.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h1
            className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            We are
            <br />
            <span className="italic font-light">ARMEDIAS</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/70">
            A tight-knit collective of designers, engineers, and strategists. We've spent the
            last decade building products people love using.
          </p>
        </div>
      </section>
      <AboutSection />
      <StatsSection />
      <ClientsMarquee />
    </>
  );
}

