import { UserCog, FileBadge2, MapPin } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";

const FEATURES = [
  {
    icon: UserCog,
    title: "Personalized Mentorship",
    desc: "1:1 sessions with mentors from IIM-A, IIM-B, ISB and global MBA cohorts.",
  },
  {
    icon: FileBadge2,
    title: "Profile Building",
    desc: "Position your story with the right internships, certifications and extracurriculars.",
  },
  {
    icon: MapPin,
    title: "Noida-based Expert Counseling",
    desc: "Walk-in sessions at our Sector-2 office, plus pan-India online support.",
  },
];

export const About = () => {
  return (
    <MotionSection id="about" className="relative py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-medium text-primary-glow uppercase tracking-wider">
            Why CareerChoice360
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Counselors who've sat in the same chair
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're not a call-center. Every aspirant gets a dedicated mentor and a transparent
            roadmap — from diagnostic test to seat acceptance.
          </p>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Stat panel */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-3xl opacity-50" aria-hidden />
          <div className="relative gradient-card rounded-2xl border border-border/70 p-8 shadow-card-soft">
            <div className="grid grid-cols-2 gap-6">
              <Stat value="1,200+" label="Successful admits" />
              <Stat value="50+" label="Partner B-schools" />
              <Stat value="98%" label="Mentor satisfaction" />
              <Stat value="24h" label="Average response" />
            </div>
            <div className="mt-8 rounded-xl border border-border/70 bg-background/60 p-5">
              <p className="text-sm text-muted-foreground">
                "Our promise: a transparent, honest evaluation — even if our answer is to wait a
                cycle. Your career deserves better than upsells."
              </p>
              <p className="mt-3 text-xs font-medium text-foreground">
                — CareerChoice360 Counseling Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-3xl font-bold gradient-text">{value}</p>
    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
  </div>
);
