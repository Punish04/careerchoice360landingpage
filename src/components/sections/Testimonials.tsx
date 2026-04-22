import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";

const QUOTES = [
  {
    name: "Riya Mehta",
    school: "IIM Bangalore — PGP '26",
    quote:
      "From a 78%ile mock to a 99.2%ile CAT score — the structured drills and weekly mentor reviews changed everything.",
  },
  {
    name: "Karan Singhal",
    school: "MDI Gurgaon — PGPM '26",
    quote:
      "My profile felt average. CC360 helped me reframe my engineering internships into a sharp consulting story.",
  },
  {
    name: "Ananya Verma",
    school: "SPJIMR Mumbai — PGDM '26",
    quote:
      "The interview panels were brutal in the best way. Walked into the real PI feeling 10x more confident.",
  },
];

export const Testimonials = () => {
  return (
    <MotionSection className="relative py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary-glow uppercase tracking-wider">
            Student Stories
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Real admits, real outcomes
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-card rounded-2xl border border-border/70 p-6 shadow-card-soft"
            >
              <Quote className="h-6 w-6 text-primary-glow" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className="text-xs text-muted-foreground">{q.school}</p>
                </div>
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-primary-glow text-primary-glow" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};
