import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Plus } from "lucide-react";
import { navLinks, siteMeta } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6"
      >
        <div className="mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground"
            data-cursor="hover"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 20L12 4L20 20M7 14H17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              {siteMeta.name}
            </span>
          </Link>

          {/* Center pill nav */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/80 px-2 py-1.5 backdrop-blur-md transition-shadow ${
              scrolled ? "shadow-soft" : ""
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-full px-4 py-2 text-sm font-medium bg-secondary text-foreground" }}
                data-cursor="hover"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              <Plus className="h-4 w-4" />
              {siteMeta.ctaPrimary}
            </Link>
            <button
              type="button"
              className="hidden lg:inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/80 px-3 py-2 text-xs font-medium backdrop-blur-md"
              data-cursor="hover"
            >
              EN
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 backdrop-blur-md md:hidden"
              aria-label="Open menu"
              data-cursor="hover"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-background p-8 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{siteMeta.name}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-display text-3xl font-semibold tracking-tight text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/contact"
                className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
              >
                <Plus className="h-4 w-4" />
                {siteMeta.ctaPrimary}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
