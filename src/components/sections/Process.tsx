import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Compass, FileText, Mic } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";

const STEPS = [
  { icon: ClipboardList, title: "Profile Audit", desc: "Diagnostic + SWOT of academics, work & extracurriculars." },
  { icon: Compass, title: "Exam Strategy", desc: "Personalized study plan & target school list." },
  { icon: FileText, title: "Application & Essays", desc: "Story-led essays, recos and form reviews." },
  { icon: Mic, title: "Interview Prep", desc: "Mock GD-PIs with B-school alumni panels." },
];

export const Process = () => {
  const reduce = useReducedMotion();

  return (
    <MotionSection id="process" className="relative py-20 md:py-28 bg-secondary/20">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary-glow uppercase tracking-wider">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            A four-stage roadmap to your dream B-school
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div
            className="hidden md:block absolute left-0 right-0 top-7 h-px bg-border/70 overflow-hidden"
            aria-hidden
          >
            <motion.div
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-primary via-primary-glow to-primary/30"
            />
          </div>

          <ol className="grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-background ring-1 ring-border">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary-glow ring-1 ring-primary/40">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-xs font-medium text-primary-glow">Step {i + 1}</p>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
};
