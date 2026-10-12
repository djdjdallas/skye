/**
 * Single source of truth for anything your mom will want to change without
 * touching component code: the reel, social links, contact email, episodes.
 * Edit this file, redeploy, done.
 */
export const siteConfig = {
  name: "Selah Skye",
  studio: "Taylor Imagination Studios",
  tagline: "Where Curiosity Comes to Life.",
  description:
    "Selah Skye is an animated children's series about a brilliant, curious 11-year-old whose extraordinary hair is connected to powers she never knew she had.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://selahskye.com",

  // The main reel. Paste just the YouTube video ID, not the full URL.
  // e.g. https://youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
  reelVideoId: "EbHRZgahVcw",
  reelDuration: "3:42",

  socials: {
    youtube: "https://youtube.com/@taylorimaginationstudios",
    instagram: "https://instagram.com/taylorimaginationstudios",
    tiktok: "https://tiktok.com/@taylorimaginationstudios",
  },

  contactEmail: "selahskye@taylorimaginationstudio.info",

  // Short-form clips. Add or remove freely; the grid adapts.
  clips: [
    {
      id: "clip-1",
      title: "The Library",
      blurb: "Selah's love of the library collides with her first power.",
      videoId: "REPLACE_WITH_YOUTUBE_ID",
      thumbnail: "/images/selah-clipboard.jpg",
      views: "11K+",
    },
    {
      id: "clip-2",
      title: "Amir Makes a Mess",
      blurb: "An ordinary family moment turns into complete chaos.",
      videoId: "REPLACE_WITH_YOUTUBE_ID",
      thumbnail: "/images/selah-amir-garage.jpg",
      views: "4.8K+",
    },
    {
      id: "clip-3",
      title: "Someone Is Watching",
      blurb: "Selah isn't the only one who knows what her hair can do.",
      videoId: "REPLACE_WITH_YOUTUBE_ID",
      thumbnail: "/images/school-hallway.jpg",
      views: "2.2K+",
    },
  ],
};
