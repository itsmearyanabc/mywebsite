import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Awsmd" },
      {
        name: "description",
        content:
          "Become a client. Tell us about your project and we'll get back to you within one business day.",
      },
      { property: "og:title", content: "Contact — Awsmd" },
      {
        property: "og:description",
        content: "Tell us about your project and we'll get back to you within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-hero-gradient px-6 pb-32 pt-40 lg:px-10 lg:pt-48">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Become a Client
          </p>
          <h1
            className="mt-6 font-display font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Let's
            <br />
            <span className="italic font-light">talk</span>.
          </h1>
          <p className="mt-8 max-w-md text-lg text-foreground/70">
            Tell us about your project. We'll get back to you within one business day with next
            steps.
          </p>

          <div className="mt-12 space-y-3 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <a href="mailto:hello@awsmd.example" className="font-display text-2xl">
                hello@awsmd.example
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="font-display text-2xl">+1 (555) 010-9020</div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="lg:col-span-6 rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          {submitted ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold">Thanks for reaching out</h2>
              <p className="mt-3 max-w-sm text-muted-foreground">
                We've received your brief and will be in touch within one business day.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Field label="Your name" name="name" placeholder="Jane Cooper" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Project budget
                </label>
                <select
                  name="budget"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                >
                  <option>$10k – $25k</option>
                  <option>$25k – $50k</option>
                  <option>$50k – $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you building?"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                data-cursor="hover"
              >
                Send Brief <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
