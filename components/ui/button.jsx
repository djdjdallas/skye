import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui style button.
 *
 * `cva` (class-variance-authority) maps prop values to class strings so the
 * variants live in one place instead of being reassembled at every call site.
 * `asChild` is intentionally left out here to keep the file simple: when you
 * need a link that looks like a button, use `buttonVariants()` directly on an
 * <a> or <Link>, which is what the header does.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // The single accent color, reserved for primary actions only.
        primary: "bg-gold text-ink shadow-sm hover:bg-gold-600",
        // Neutral secondary: border only, no competing color.
        secondary:
          "border border-ink/20 bg-transparent text-ink hover:bg-ink/5",
        // For use on top of dark photography.
        ghostLight:
          "border border-cream/40 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20",
      },
      size: {
        // min-height 44px+ everywhere: touch targets need to be tappable.
        md: "min-h-[44px] px-6 py-3",
        lg: "min-h-[52px] px-8 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

const Button = React.forwardRef(function Button(
  { className, variant, size, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});

export { Button, buttonVariants };
