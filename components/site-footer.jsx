import Image from "next/image";
import { Youtube, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream-300 bg-cream py-16">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/logo-tis.jpg"
              alt={siteConfig.studio}
              width={160}
              height={90}
              className="h-14 w-auto rounded-md object-cover"
            />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              {siteConfig.tagline} A children&apos;s animation and imagination
              brand.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Explore
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  { href: "#story", label: "The Story" },
                  { href: "#selah", label: "Meet Selah" },
                  { href: "#cast", label: "Cast" },
                  { href: "#watch", label: "Watch" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base text-ink-500 transition-colors hover:text-gold-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Follow
              </h2>
              <div className="mt-4 flex gap-3">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-300 text-ink-500 transition-colors hover:border-gold hover:text-gold-600"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-300 text-ink-500 transition-colors hover:border-gold hover:text-gold-600"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-300 text-ink-500 transition-colors hover:border-gold hover:text-gold-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-cream-300 pt-8 text-sm text-ink-300">
          &copy; {new Date().getFullYear()} {siteConfig.studio}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
