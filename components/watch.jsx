"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useVideo } from "@/components/video-provider";
import { WatchButton } from "@/components/watch-button";
import { siteConfig } from "@/lib/site-config";

export function Watch() {
  const { open } = useVideo();

  return (
    <section id="watch" className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Watch</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Start with the reel.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Ninety seconds inside Selah's world: the first power, the family,
            and the mystery hiding in plain sight.
          </p>
        </div>

        {/* Primary CTA: a big clickable poster rather than a small button. */}
        <button
          onClick={() =>
            open(siteConfig.reelVideoId, `${siteConfig.name} Official Reel`)
          }
          aria-label="Play the Selah Skye official reel"
          className="group relative mt-12 block w-full overflow-hidden rounded-2xl shadow-md transition-shadow duration-200 hover:shadow-lg"
        >
          <div className="relative aspect-video">
            <Image
              src="/images/selah-flight-wide.jpg"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-ink/35 transition-colors duration-200 group-hover:bg-ink/25" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
              </span>
            </span>
            <span className="absolute bottom-6 left-6 rounded-lg bg-ink/70 px-3 py-1.5 text-sm font-semibold text-cream backdrop-blur-sm">
              Official Reel &middot; {siteConfig.reelDuration}
            </span>
          </div>
        </button>

        {/* Secondary: short-form clips */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-ink">
            More moments
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {siteConfig.clips.map((clip) => (
              <button
                key={clip.id}
                onClick={() => open(clip.videoId, clip.title)}
                className="group text-left"
                aria-label={`Play ${clip.title}`}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-cream-200">
                  <Image
                    src={clip.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-ink/25 transition-colors duration-200 group-hover:bg-ink/10" />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink">
                    <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-ink/75 px-2 py-1 text-sm font-semibold text-cream">
                    {clip.views} views
                  </span>
                </div>
                <h4 className="mt-4 font-display text-xl font-semibold text-ink">
                  {clip.title}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-ink-500">
                  {clip.blurb}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <WatchButton className="w-full" size="lg" />
        </div>
      </div>
    </section>
  );
}
