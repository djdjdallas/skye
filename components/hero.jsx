import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WatchButton } from "@/components/watch-button";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/*
        `priority` tells Next.js to preload this image instead of lazy-loading it.
        It is the Largest Contentful Paint element, so preloading it directly
        improves your Core Web Vitals score. Only ever do this for above-the-fold art.
        `sizes="100vw"` lets Next pick the right resolution per device instead of
        shipping a desktop-sized file to a phone.
      */}
      <Image
        src="/images/hero-doorway.jpg"
        alt="Selah Skye standing in a doorway, her hair glowing with light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />

      {/* Two overlays: one bottom-up for text legibility, one flat for contrast. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="container relative z-10 pb-24 pt-40 sm:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow text-gold">An Animated Children's Series</p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
            A brilliant, curious girl discovers that her extraordinary hair is
            connected to powers she never knew she had.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WatchButton size="lg" />
            <a href="#story" className={buttonVariants({ variant: "ghostLight", size: "lg" })}>
              Explore the World
            </a>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-cream/60">
            {siteConfig.studio} &nbsp;&middot;&nbsp; {siteConfig.tagline}
          </p>
        </div>
      </div>

      <ChevronDown
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 h-6 w-6 -translate-x-1/2 text-cream/40"
      />
    </section>
  );
}
