import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

/**
 * Wrapper that fades + rises content into view on first scroll.
 * Respects prefers-reduced-motion.
 */
export const MotionSection = ({ children, id, className, delay = 0 }: MotionSectionProps) => {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
