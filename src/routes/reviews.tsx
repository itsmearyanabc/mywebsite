import { createFileRoute } from "@tanstack/react-router";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Awsmd" },
      {
        name: "description",
        content:
          "What our clients say about working with Awsmd. 4.9 stars across 40+ verified reviews.",
      },
      { property: "og:title", content: "Reviews — Awsmd" },
      {
        property: "og:description",
        content: "4.9 stars across 40+ verified client reviews.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-hero-gradient px-6 pb-16 pt-40 lg:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Reviews
          </p>
          <h1
            className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            Loved by
            <br />
            <span className="italic font-light">clients</span>
          </h1>
        </div>
      </section>
      <ReviewsSection />
      <ClientsMarquee />
    </>
  );
}
