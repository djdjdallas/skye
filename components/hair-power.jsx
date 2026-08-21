import Image from "next/image";

const moments = [
  {
    label: "Flight",
    image: "/images/selah-flight.jpg",
    alt: "Selah Skye rising into a golden sunset sky",
  },
  {
    label: "Discovery",
    image: "/images/selah-clipboard.jpg",
    alt: "Selah Skye taking notes on her street with her clipboard",
  },
  {
    label: "Teamwork",
    image: "/images/backyard-duo.jpg",
    alt: "Selah and Amir together in the backyard",
  },
];

export function HairPower() {
  return (
    <section className="bg-dusk py-24 text-cream sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">The Power of Her Hair</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            The visual signature of the franchise.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            As Selah's abilities emerge, her hair becomes an unmistakable
            storytelling device, instantly readable in animation, clips, books
            and merchandise.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {moments.map((moment) => (
            <figure key={moment.label} className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 font-display text-2xl font-semibold text-cream">
                {moment.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
