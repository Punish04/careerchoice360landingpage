import { BookOpenCheck, Target, BrainCircuit } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";
import { Marquee } from "@/components/ui-custom/Marquee";

const EXAMS = [
  { code: "CAT", tag: "Top Percentile Strategy" },
  { code: "XAT", tag: "Decision-Making Mastery" },
  { code: "NMAT", tag: "Speed & Accuracy" },
  { code: "SNAP", tag: "Symbiosis Pathway" },
  { code: "CMAT", tag: "AICTE Edge" },
  { code: "GMAT", tag: "Global Admits" },
];

const STATS = [
  { icon: BookOpenCheck, title: "60+ Mock Tests", desc: "Adaptive, AI-scored, with detailed analytics." },
  { icon: Target, title: "Sectional Drills", desc: "VARC, DILR, QA — laser-focused practice loops." },
  { icon: BrainCircuit, title: "Personalized Plans", desc: "Calendar-anchored study path for your exam date." },
];

export const Exams = () => {
  return (
    <MotionSection id="exams" className="relative py-20 md:py-28 bg-secondary/20">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-primary-glow uppercase tracking-wider">
            Exam Mastery
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Crack the test, win the seat
          </h2>
          <p className="mt-4 text-muted-foreground">
            Curriculum-led prep for India's most competitive management entrance exams.
          </p>
        </div>
      </div>

      {/* Marquee — escapes the container for full-bleed */}
      <Marquee className="py-4">
        {EXAMS.map((e) => (
          <div
            key={e.code}
            className="flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-5 py-3 backdrop-blur"
          >
            <span className="text-lg font-bold tracking-tight">{e.code}</span>
            <span className="h-4 w-px bg-border" aria-hidden />
            <span className="text-xs text-muted-foreground whitespace-nowrap">{e.tag}</span>
          </div>
        ))}
      </Marquee>

      <div className="container mt-12 grid gap-5 md:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.title}
            className="gradient-card rounded-2xl border border-border/70 p-6"
          >
            <s.icon className="h-6 w-6 text-primary-glow" />
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
};
