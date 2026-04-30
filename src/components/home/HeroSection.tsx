import { motion } from "motion/react";
import { Play, ArrowDown, Star } from "lucide-react";
import { heroContent } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-hero-gradient pt-32 pb-16">
      {/* decorative blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[10%] h-[60vw] w-[60vw] rounded-full bg-lavender opacity-60 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full bg-lilac opacity-70 blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col px-6 lg:px-10">
        <div className="flex-1">
          <motion.h1
            className="font-display font-semibold uppercase leading-[0.85] tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(3.5rem, 13vw, 14rem)" }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            <Word>{heroContent.line1}</Word>
            <br />
            <Word italic className="font-normal italic text-foreground/90">
              {heroContent.italic}
            </Word>
            <br />
            <Word>{heroContent.line2}</Word>
          </motion.h1>

          {/* video tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-6 bottom-32 hidden w-[320px] overflow-hidden rounded-2xl shadow-soft md:block lg:right-10 lg:w-[380px]"
            data-cursor="hover"
          >
            <div className="relative aspect-video">
              <img
                src={heroContent.videoPoster}
                alt="Showreel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 backdrop-blur transition-transform hover:scale-110">
                  <Play className="ml-1 h-6 w-6 text-foreground" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 backdrop-blur"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
              C
            </div>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
              ))}
              <span className="ml-1 text-sm font-semibold">4.9</span>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              · Gold verified · 40 Reviews
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30"
            aria-hidden
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  italic,
  className = "",
}: {
  children: React.ReactNode;
  italic?: boolean;
  className?: string;
}) {
  return (
    <motion.span
      variants={{
        hidden: { y: "110%", opacity: 0 },
        show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={`inline-block ${italic ? "italic font-light" : ""} ${className}`}
    >
      {children}
    </motion.span>
  );
}
