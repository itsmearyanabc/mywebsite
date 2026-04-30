import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ARMEDIAS" },
      {
        name: "description",
        content: "Discover our digital products, automation tools, and software solutions.",
      },
      { property: "og:title", content: "Products — ARMEDIAS" },
      {
        property: "og:description",
        content: "Discover our digital products, automation tools, and software solutions.",
      },
    ],
  }),
  component: ProductsPage,
});

const digitalProducts = [
  {
    title: "Business Automation Suite",
    description: "A comprehensive toolkit to automate your daily workflows, emails, and CRM entries.",
    price: "$499",
    category: "Automation",
  },
  {
    title: "Custom CRM Dashboard",
    description: "A fully customizable dashboard for managing client relations and sales pipelines.",
    price: "$299",
    category: "Web App",
  },
  {
    title: "E-Commerce App Template",
    description: "A production-ready cross-platform mobile app template for online stores.",
    price: "$199",
    category: "Mobile App",
  },
  {
    title: "AI Chatbot Integration",
    description: "Plug-and-play AI chatbot tailored for customer support and lead generation.",
    price: "$349",
    category: "AI Service",
  },
];

function ProductsPage() {
  return (
    <section className="bg-hero-gradient px-6 pb-32 pt-40 lg:px-10 lg:pt-48 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Digital Products
        </p>
        <h1
          className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Our
          <br />
          <span className="italic font-light">Products</span>
        </h1>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {digitalProducts.map((product, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-8 shadow-soft border border-border transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {product.category}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <span className="font-display text-xl font-medium">{product.price}</span>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform group-hover:-translate-y-0.5"
                >
                  View Details <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
