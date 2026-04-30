import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/content/site";
import { SectionHeader } from "./ServicesSection";

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader number="06" title="What Our Clients Say">
          We supply clients across the entire globe with thoughtful design and considered builds.
        </SectionHeader>

        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((r) => (
              <div key={r.name} className="w-full shrink-0 grow-0 basis-full pr-6 md:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8">
                  <p className="text-base leading-relaxed text-foreground">"{r.quote}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="font-display font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "w-10 bg-foreground" : "w-4 bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-secondary"
              data-cursor="hover"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-secondary"
              data-cursor="hover"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
