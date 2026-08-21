import { VideoProvider } from "@/components/video-provider";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { BigIdea } from "@/components/big-idea";
import { MeetSelah } from "@/components/meet-selah";
import { Cast } from "@/components/cast";
import { HairPower } from "@/components/hair-power";
import { Watch } from "@/components/watch";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

/*
  JSON-LD structured data. This tells Google that the page describes a TV
  series rather than a generic web page, which is what makes rich results
  (poster art, cast) eligible in search. Costs nothing, meaningful SEO upside.
*/
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TVSeries",
  name: siteConfig.name,
  description: siteConfig.description,
  genre: ["Animation", "Children", "Adventure"],
  url: siteConfig.url,
  image: `${siteConfig.url}/images/selah-flight-wide.jpg`,
  productionCompany: {
    "@type": "Organization",
    name: siteConfig.studio,
    slogan: siteConfig.tagline,
  },
  character: [
    { "@type": "Person", name: "Selah Skye" },
    { "@type": "Person", name: "Linley" },
    { "@type": "Person", name: "Amir" },
    { "@type": "Person", name: "Grandma" },
  ],
};

export default function HomePage() {
  return (
    <VideoProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        <Hero />
        <BigIdea />
        <MeetSelah />
        <Cast />
        <HairPower />
        <Watch />
        <Newsletter />
      </main>

      <SiteFooter />
    </VideoProvider>
  );
}
