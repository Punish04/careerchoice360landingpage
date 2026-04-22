import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * CTA button with subtle "magnetic" pointer-tracking effect.
 * Uses springs for smooth motion. Falls back to static when reduced motion is preferred.
 */
export const MagneticButton = ({
  children,
  onClick,
  className,
  href,
  variant = "primary",
  type = "button",
  disabled,
  ariaLabel,
}: MagneticButtonProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:bg-primary-glow shadow-elegant",
    variant === "secondary" &&
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    variant === "ghost" &&
      "bg-transparent text-foreground hover:bg-secondary/40 border border-border/60",
    className,
  );

  const inner = (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={baseClasses}
        style={{ x: springX, y: springY }}
      >
        <span className="inline-flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={baseClasses}
      style={{ x: springX, y: springY }}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
