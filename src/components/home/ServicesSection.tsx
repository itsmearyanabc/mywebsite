import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader number="01" title="Our Services">
          As a tight-knit team of experts, we create memorable and emotional websites,
          digital experiences, and native apps.
        </SectionHeader>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-soft"
              data-cursor="hover"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <img src={s.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-foreground/40" />
              </div>

              <div className="relative flex h-full min-h-[420px] flex-col justify-between text-foreground transition-colors duration-500 group-hover:text-background">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-3xl font-semibold leading-tight">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:rotate-45" />
                </div>

                <div>
                  <p className="text-sm leading-relaxed opacity-80">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-current/30 px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-12">
      <div className="md:col-span-5">
        <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {number} — {title}
        </div>
      </div>
      {children && (
        <p className="md:col-span-7 max-w-2xl text-2xl font-display font-light leading-snug text-foreground">
          {children}
        </p>
      )}
    </div>
  );
}
