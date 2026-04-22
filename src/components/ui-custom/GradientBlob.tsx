import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  color?: "primary" | "accent";
}

/** Decorative animated radial glow used in hero / CTA backgrounds. */
export const GradientBlob = ({ className, color = "primary" }: GradientBlobProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-40 animate-float-slow",
        color === "primary" ? "bg-primary/40" : "bg-accent/30",
        className,
      )}
    />
  );
};
