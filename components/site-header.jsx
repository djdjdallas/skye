"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WatchButton } from "@/components/watch-button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const links = [
  { href: "#story", label: "The Story" },
  { href: "#selah", label: "Meet Selah" },
  { href: "#cast", label: "Cast" },
  { href: "#watch", label: "Watch" },
];

export function SiteHeader() {
  // Header starts transparent over the hero photo, then gains a solid
  // background once you scroll so the links stay readable over content.
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-ink/95 backdrop-blur-md"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={siteConfig.studio}>
          <Image
            src="/images/logo-tis.jpg"
            alt=""
            width={120}
            height={68}
            className="h-11 w-auto rounded-md object-cover"
            priority
          />
          <span className="hidden font-display text-lg font-semibold text-cream sm:block">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <WatchButton>Watch</WatchButton>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-cream/10 lg:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] items-center text-base font-medium text-cream/85 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 sm:hidden">
              <WatchButton className="w-full" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
