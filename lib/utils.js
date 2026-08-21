import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn = "class names". The standard shadcn/ui helper.
 * clsx handles conditional classes, twMerge resolves Tailwind conflicts
 * so a later `px-8` correctly overrides an earlier `px-4` instead of both
 * ending up in the class string and letting CSS source order decide.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
