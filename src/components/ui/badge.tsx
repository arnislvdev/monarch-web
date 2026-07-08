import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Every badge in the app shares ONE shape: a subtle, rounded "chip" modelled on
// the genre/tag chips in advanced search. Only the TEXT colour changes to carry
// meaning — yellow for a rating, blue for "releasing", green for "completed",
// etc. That keeps ratings, release states, metadata, and library list-status
// pills visually consistent instead of each inventing its own fill.
//
// Semantic variants pull their color from the app's existing danger/warning/
// info/success foreground tokens rather than raw Tailwind palette stops —
// those tokens are already tuned (lower chroma, per-mode lightness) to sit on
// a neutral surface without shouting, and they adapt automatically between
// light/dark since they're CSS variables, not a fixed hex per mode.
//
// `surface`:
//   - default  → the light translucent chip, for badges on a solid page/panel
//                surface (detail page, banner side panel, search, settings).
//   - overlay  → a dark scrim version, for badges sitting ON cover art or the
//                trailer (cards, banner image overlay). A light translucent fill
//                would wash out over bright images, so these swap to a dark fill
//                + rim while keeping the exact same shape and text tone.
//                Deliberately NO backdrop-blur — these render on every card and
//                backdrop-filter is a scroll-perf killer.
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-sidebar-border bg-badge px-3 py-1 text-xs font-semibold transition-colors [&>svg]:size-3 [&>svg]:pointer-events-none outline-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50",
  {
    variants: {
      variant: {
        // Neutral — genres and any unscored chip; lifts to foreground on hover
        // like the search chips it's modelled on.
        default: "text-muted-foreground hover:text-foreground",
        // Plain text — metadata (season / format / episode counts) and the
        // "upcoming" release state.
        solid: "text-foreground",
        // Semantic tones — same chip, same four status tokens as everywhere
        // else in the app (toasts, form errors, etc.), reused here instead of
        // one-off palette colors.
        rating: "text-warning-foreground",
        releasing: "text-info-foreground",
        completed: "text-success-foreground",
        watching: "text-success-foreground",
        planning: "text-muted-foreground",
        paused: "text-warning-foreground",
        hiatus: "text-warning-foreground",
        dropped: "text-danger-foreground",
        cancelled: "text-danger-foreground",
        danger: "text-danger-foreground",
      },
      surface: {
        default: "",
        overlay: "border-white/15 bg-badge hover:bg-black/90",
      },
    },
    defaultVariants: {
      variant: "default",
      surface: "default",
    },
  },
);

function Badge({
  className,
  variant,
  surface,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, surface }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };