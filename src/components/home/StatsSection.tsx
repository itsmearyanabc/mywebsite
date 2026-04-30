import { motion, useInView } from "motion/react";
import { useRef } from "react";
import NumberFlow from "@number-flow/react";
import { stats } from "@/content/site";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-secondary px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Some Numbers About Us
        </h3>
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-border pt-6"
            >
              <div
                className="font-display font-semibold leading-none tracking-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                +<NumberFlow value={inView ? s.value : 0} />
                {s.suffix === "K" ? "K" : ""}
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
