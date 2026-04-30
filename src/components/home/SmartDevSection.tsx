import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { phoneScreens } from "@/content/site";

export function SmartDevSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foreground px-6 py-24 text-background lg:px-10 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <h2
            className="font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            <span className="text-background/40">{`{`}</span>SMART<span className="text-background/40">{`}`}</span>
            <br />
            <span className="italic font-light">Development</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-background/70">
            Making your business outstanding is a science. We take it (a) seriously and (b)
            creatively.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
              data-cursor="hover"
            >
              Check Our Portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background hover:bg-background/10"
              data-cursor="hover"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-6">
          <motion.div style={{ y: yLeft }} className="space-y-4">
            {phoneScreens.slice(0, 2).map((src, i) => (
              <PhoneCard key={i} src={src} />
            ))}
          </motion.div>
          <motion.div style={{ y: yRight }} className="space-y-4 pt-12">
            {phoneScreens.slice(2, 4).map((src, i) => (
              <PhoneCard key={i} src={src} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-background/10 bg-background/5 shadow-soft">
      <div className="aspect-[9/16]">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
