"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideo } from "@/components/video-provider";
import { siteConfig } from "@/lib/site-config";

/**
 * Thin client wrapper so server components can drop a working "watch" CTA
 * anywhere without themselves becoming client components.
 */
export function WatchButton({
  videoId = siteConfig.reelVideoId,
  title = `${siteConfig.name} Official Reel`,
  children = "Watch the Reel",
  ...props
}) {
  const { open } = useVideo();

  return (
    <Button onClick={() => open(videoId, title)} {...props}>
      <Play className="h-4 w-4 fill-current" aria-hidden="true" />
      {children}
    </Button>
  );
}
