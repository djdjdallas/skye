import Image from "next/image";

const cast = [
  {
    name: "Linley",
    role: "The Cousin",
    blurb: "Selah's clever, adventurous cousin and partner in discovery.",
    image: "/images/rooftop-linley.jpg",
  },
  {
    name: "Amir",
    role: "The Little Brother",
    blurb:
      "Mischievous, and his abilities can turn ordinary moments into chaos.",
    image: "/images/selah-amir-garage.jpg",
  },
  {
    name: "Gerald",
    role: "The Bird",
    blurb:
      "A smart, no-nonsense bird who brings comic timing and a surprising voice.",
    image: "/images/kitchen-reaction.jpg",
  },
  {
    name: "Grandma",
    role: "The Keeper",
    blurb: "The keeper of a deeper family mystery.",
    image: "/images/classroom-grandma.jpg",
  },
];

export function Cast() {
  return (
    <section id="cast" className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Family &amp; Friends</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            The series is powered by relationships, not powers alone.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cast.map((member) => (
            <article key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-200">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
                {member.role}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                {member.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
