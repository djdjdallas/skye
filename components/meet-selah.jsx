import Image from "next/image";

const traits = [
  "A natural problem-solver with a scientific mind.",
  "Loves books, learning and asking \u201cwhat if?\u201d",
  "Goofy and determined, with plenty of kid-sized imperfections.",
  "Her Afro becomes an expressive visual extension of her powers.",
  "She is learning that extraordinary abilities come with extraordinary responsibility.",
];

export function MeetSelah() {
  return (
    <section id="selah" className="bg-ink py-24 text-cream sm:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="eyebrow text-gold">Meet Selah</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Brilliant. Curious. Funny. Extraordinary.
          </h2>

          <ul className="mt-8 space-y-5">
            {traits.map((trait) => (
              <li key={trait} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                <span className="text-lg leading-relaxed text-cream/80">{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/selah-backpack.jpg"
              alt="Selah Skye walking through a park with her backpack"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
