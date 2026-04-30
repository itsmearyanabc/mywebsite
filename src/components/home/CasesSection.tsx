import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cases } from "@/content/site";
import { SectionHeader } from "./ServicesSection";

export function CasesSection() {
  return (
    <section className="bg-secondary px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader number="05" title="Our Portfolio">
          Latest cases — a glimpse of how we turn briefs into products people actually use.
        </SectionHeader>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
              data-cursor="hover"
            >
              <div className="overflow-hidden rounded-3xl">
                <div className="aspect-[4/5]">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.excerpt}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/cases"
            className="inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            data-cursor="hover"
          >
            View All Cases
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
