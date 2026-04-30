import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { portfolio } from "@/content/site";

export function PortfolioSection() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <h2
            className="font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Selected
            <br />
            <span className="italic font-light">Work</span>
          </h2>
          <Link
            to="/cases"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            data-cursor="hover"
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${
                i % 3 === 0 ? "lg:row-span-2" : ""
              }`}
              data-cursor="hover"
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-70">{p.category}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
