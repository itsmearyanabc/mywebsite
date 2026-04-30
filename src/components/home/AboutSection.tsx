import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { aboutPillars } from "@/content/site";
import { SectionHeader } from "./ServicesSection";

export function AboutSection() {
  return (
    <section className="relative bg-secondary px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader number="02" title="About Us" />

        <div className="mt-12 grid items-end gap-12 md:grid-cols-12">
          <h2
            className="md:col-span-7 font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            We Strive
            <br />
            to <span className="italic font-light">Innovate</span>
          </h2>
          <div className="md:col-span-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              Become a Client
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutPillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-display text-sm">
                0{i + 1}
              </div>
              <p className="mt-6 text-base leading-relaxed text-foreground/80">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
