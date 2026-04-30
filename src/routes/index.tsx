import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { SmartDevSection } from "@/components/home/SmartDevSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { CasesSection } from "@/components/home/CasesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARMEDIAS — Creative Design and Development Agency" },
      {
        name: "description",
        content:
          "We create awesome design. Memorable websites, digital experiences, and native apps for ambitious teams.",
      },
      { property: "og:title", content: "ARMEDIAS — We create awesome design" },
      {
        property: "og:description",
        content: "Memorable websites, digital experiences, and native apps for ambitious teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ClientsMarquee />
      <MarqueeStrip dark />
      <SmartDevSection />
      <PortfolioSection />
      <CasesSection />
      <ReviewsSection />
    </>
  );
}

