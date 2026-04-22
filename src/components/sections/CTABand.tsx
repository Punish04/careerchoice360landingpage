import { Phone, ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/layout/MotionSection";
import { MagneticButton } from "@/components/ui-custom/MagneticButton";

export const CTABand = () => {
  return (
    <MotionSection className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-cta px-6 py-14 md:px-14 md:py-20 text-center shadow-elegant">
          {/* decorative grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(hsl(0 0% 100% / 0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to take the leap?
              <br className="hidden sm:block" />
              <span className="opacity-90">Book your free profile evaluation.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              A 20-minute call with a senior counselor — no scripts, no pressure. Just clarity
              on your best path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="#enquiry" variant="secondary">
                Book Free Evaluation <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="tel:+918800854923" variant="ghost">
                <Phone className="h-4 w-4" /> Call +91-8800854923
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};
