import { Sparkles, Heart, Compass } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    label: "The Hook",
    body: "Her hair is not just part of her look. It becomes a visual signal of power, emotion and discovery.",
  },
  {
    icon: Heart,
    label: "The Heart",
    body: "Family, friendship, humor and learning keep the story grounded in a child's world.",
  },
  {
    icon: Compass,
    label: "The Engine",
    body: "Every new ability creates a new question. What can Selah do, and why?",
  },
];

export function BigIdea() {
  return (
    <section id="story" className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">The Big Idea</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            A superhero story rooted in the everyday wonder of childhood.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Selah is an 11-year-old, science-loving, fashion-forward girl whose
            life changes when she discovers that her hair is tied to a growing
            set of abilities.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, label, body }) => (
            <div
              key={label}
              className="rounded-2xl border border-cream-300 bg-white p-8 transition-shadow duration-200 hover:shadow-md"
            >
              {/*
                Icon sits in a tinted circle so it never becomes a low-contrast
                smudge against the card. Contrast applies to icons, not just text.
              */}
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-200">
                <Icon className="h-6 w-6 text-gold-600" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                {label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
