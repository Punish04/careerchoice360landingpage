import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Infinite horizontal marquee. Children are duplicated to create a seamless loop.
 * Pauses on hover/touch via `marquee-pause` utility.
 */
export const Marquee = ({ children, className }: MarqueeProps) => {
  return (
    <div className={cn("marquee-pause overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-6 pr-6">
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
};
