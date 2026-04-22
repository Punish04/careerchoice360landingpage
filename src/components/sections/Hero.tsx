import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Users, Trophy } from "lucide-react";
import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { GradientBlob } from "@/components/ui-custom/GradientBlob";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* background glows */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <GradientBlob className="left-[-10%] top-10 h-[420px] w-[420px]" color="primary" />
      <GradientBlob className="right-[-5%] top-40 h-[360px] w-[360px]" color="accent" />

      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            Premium MBA & PGDM Counseling — Noida
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Transform Your Career with{" "}
            <span className="gradient-text">Top-Tier B-School Admissions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            From profile evaluation to interview prep, CareerChoice360 mentors aspirants into
            India's IIMs, MDI, SPJIMR, XLRI and global top-50 B-schools. Personalized strategy,
            zero guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#enquiry" variant="primary">
              Book Free Evaluation
            </MagneticButton>
            <MagneticButton href="#programs" variant="ghost">
              Explore Programs
            </MagneticButton>
          </motion.div>

          {/* Trust strip */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { icon: Users, value: "1,200+", label: "Mentored" },
              { icon: GraduationCap, value: "50+", label: "B-Schools" },
              { icon: Trophy, value: "10+ yrs", label: "Expertise" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="h-5 w-5 text-primary-glow" />
                <dt className="mt-2 text-xl font-semibold">{s.value}</dt>
                <dd className="text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT — floating enquiry card */}
        <div className="order-1 lg:order-2" id="enquiry">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-primary/30 blur-2xl opacity-60" aria-hidden />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative gradient-card rounded-2xl border border-border/70 p-6 sm:p-7 shadow-elegant"
            >
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Quick Enquiry</h2>
                <p className="text-sm text-muted-foreground">
                  Free 20-min profile call with a senior mentor.
                </p>
              </div>
              <EnquiryForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
