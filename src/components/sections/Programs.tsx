import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, TrendingUp, Globe2, type LucideIcon } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";

interface Program {
  icon: LucideIcon;
  title: string;
  pitch: string;
  specs: string[];
}

const PROGRAMS: Program[] = [
  {
    icon: Briefcase,
    title: "PGDM",
    pitch: "Industry-aligned post-graduate diplomas at AICTE-approved institutes.",
    specs: ["Business Analytics", "Marketing", "Finance", "Operations"],
  },
  {
    icon: GraduationCap,
    title: "Full-time MBA",
    pitch: "Two-year residential MBAs at IIMs and top private B-schools.",
    specs: ["Strategy", "Consulting", "HR", "Product"],
  },
  {
    icon: TrendingUp,
    title: "Executive MBA",
    pitch: "Weekend & modular formats for working professionals with 5+ yrs experience.",
    specs: ["Leadership", "Finance", "Digital", "Entrepreneurship"],
  },
  {
    icon: Globe2,
    title: "Global Pathways",
    pitch: "GMAT-led admissions to top-50 international B-schools across US, UK, EU, APAC.",
    specs: ["Tech MBA", "Luxury Mgmt.", "Sustainability", "Fintech"],
  },
];

export const Programs = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <MotionSection id="programs" className="relative py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary-glow uppercase tracking-wider">
            Programs Guided
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Pathways for every B-school ambition
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're targeting an IIM seat or a global MBA, we map the right program to
            your profile, goals and timeline.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROGRAMS.map((p) => (
            <motion.li
              key={p.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative gradient-card rounded-2xl border border-border/70 p-6 transition-colors hover:border-primary/60 hover:shadow-glow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/30">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.pitch}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.specs.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border/70 bg-secondary/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </MotionSection>
  );
};
