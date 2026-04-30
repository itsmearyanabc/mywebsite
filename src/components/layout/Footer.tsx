import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { siteMeta, navLinks, marqueeWords } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-foreground text-background">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-background/10 py-8">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-5xl italic md:text-7xl">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="text-background/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              Let's build
              <br />
              <span className="italic font-light">something</span> awesome.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              Become a Client
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-background/50">Pages</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-background/80 hover:text-background">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-background/50">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-background/80">
                <li>Mobile Development</li>
                <li>Web Development</li>
                <li>Design Solutions</li>
                <li>Subscription</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-background/50">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-background/80">
                <li>info@armedias.com</li>
                <li>+91 7701897557</li>
                <li>N-48 kirti nagar, New Delhi -110015 INDIA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p>
          <p>{siteMeta.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
