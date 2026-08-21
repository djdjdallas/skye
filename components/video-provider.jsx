"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

/**
 * The "Watch the Reel" button appears in three places: the header, the hero,
 * and the Watch section. Rather than duplicating modal state in each one, we
 * lift it into React Context once at the page root.
 *
 * Why context and not props: the buttons are nested several layers deep inside
 * server components, and you cannot pass a function from a server component to
 * a client component as a prop. Context lets any client button reach the modal
 * without threading state through every layer in between.
 */
const VideoContext = createContext(null);

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used inside <VideoProvider>");
  return ctx;
}

export function VideoProvider({ children }) {
  // Holds the currently playing video: { videoId, title } or null when closed.
  const [active, setActive] = useState(null);

  const open = useCallback((videoId, title) => setActive({ videoId, title }), []);
  const close = useCallback(() => setActive(null), []);

  // Close on Escape, and lock body scroll while the modal is open so the page
  // behind it doesn't scroll under the overlay on mobile.
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close]);

  return (
    <VideoContext.Provider value={{ open, close, active }}>
      {children}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title || "Video player"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/*
            stopPropagation so clicking the video itself doesn't close the modal,
            while clicking the dark backdrop still does.
          */}
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              {/*
                The iframe only mounts once the modal opens. That keeps YouTube's
                ~500KB player and its tracking off the initial page load, which
                matters a lot for your Largest Contentful Paint score.
              */}
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${active.videoId}?autoplay=1&rel=0`}
                title={active.title || "Selah Skye"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
}
