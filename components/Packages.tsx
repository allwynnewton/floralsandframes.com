import Reveal from "./Reveal";

const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20a%20quote%20for%20a%20wedding%20website.";

type Tier = {
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "The Intimate",
    description: "A single, beautifully composed page for smaller, simpler celebrations.",
    features: [
      "One-page cinematic design",
      "Ceremony & reception details",
      "Live countdown",
      "Mobile-first layout",
    ],
  },
  {
    name: "The Celebration",
    description: "Our most-requested design — the full story, told chapter by chapter.",
    features: [
      "Everything in The Intimate",
      "Love-story timeline",
      "Photo & video galleries",
      "Real-time RSVP with dietary notes",
      "Custom background audio",
    ],
    featured: true,
  },
  {
    name: "The Grand Affair",
    description: "For multi-day, multi-venue weddings with guests travelling from afar.",
    features: [
      "Everything in The Celebration",
      "Multiple ceremonies & events",
      "Guest travel & stay guide",
      "Multilingual site",
      "Priority design turnaround",
    ],
  },
];

export default function Packages() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal as="div" className="max-w-xl mb-16 md:mb-20">
          <p className="eyebrow text-fern-soft mb-4">Packages</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            Three starting points.
            <br />
            One conversation to shape them.
          </h2>
          <p className="font-body text-ink/65 mt-5 leading-relaxed">
            Every wedding we build is scoped and quoted after we've heard
            your story — these are simply where most couples start.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <Reveal
              as="div"
              key={tier.name}
              delayMs={i * 90}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.featured
                  ? "bg-ink text-paper shadow-[0_30px_60px_-30px_rgba(34,29,26,0.5)]"
                  : "border border-ink/10 bg-paper-deep/40"
              }`}
            >
              <h3
                className={`font-display italic text-2xl mb-2 ${
                  tier.featured ? "text-paper" : "text-fern"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed mb-6 ${
                  tier.featured ? "text-paper/70" : "text-ink/65"
                }`}
              >
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`font-body text-sm flex items-start gap-2.5 ${
                      tier.featured ? "text-paper/85" : "text-ink/75"
                    }`}
                  >
                    <span
                      className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                        tier.featured ? "bg-gilt-soft" : "bg-gilt"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-body text-sm font-medium text-center rounded-full px-6 py-3 transition-colors duration-300 ${
                  tier.featured
                    ? "bg-paper text-ink hover:bg-gilt-soft"
                    : "bg-ink text-paper hover:bg-fern"
                }`}
              >
                Enquire on WhatsApp
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
