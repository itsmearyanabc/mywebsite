import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { CasesSection } from "@/components/home/CasesSection";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — Awsmd" },
      {
        name: "description",
        content:
          "Selected work from Awsmd. Fintech, ecommerce, NFT marketplaces, AI tools, and more.",
      },
      { property: "og:title", content: "Cases — Awsmd" },
      {
        property: "og:description",
        content: "Selected work from Awsmd across fintech, ecommerce, AI, and more.",
      },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>
          <h1
            className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            Selected
            <br />
            <span className="italic font-light">Cases</span>
          </h1>
        </div>
      </section>
      <PortfolioSection />
      <CasesSection />
    </>
  );
}
