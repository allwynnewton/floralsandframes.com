import Reveal from "./Reveal";
import { IconSprig } from "./icons";

const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20to%20talk%20about%20a%20wedding%20website%20for%20us.";

export default function FinalCta() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden">
      <IconSprig className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 w-24 h-24 text-fern/10 rotate-180" />

      <Reveal as="div" className="relative max-w-2xl mx-auto text-center">
        <p className="eyebrow text-petal mb-5">Chapter One Starts Here</p>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.1] mb-8">
          Your story deserves
          <br />
          <span className="italic text-fern">its own chapter.</span>
        </h2>
        <p className="font-body text-ink/65 mb-10 max-w-md mx-auto leading-relaxed">
          Send us a message on WhatsApp and tell us a little about the two of
          you — that's all it takes to begin.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-sm font-medium bg-ink text-paper rounded-full px-9 py-4 hover:bg-fern transition-colors duration-300"
        >
          Message Us on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
