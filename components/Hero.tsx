"use client";

import { useEffect, useState } from "react";
import { IconSprig } from "./icons";

const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20to%20talk%20about%20a%20wedding%20website%20for%20us.";

function CornerBracket({
  className,
  flip = "",
  active,
}: {
  className: string;
  flip?: string;
  active: boolean;
}) {
  return (
    <svg
      className={`frame-corner${
        active ? " is-visible" : ""
      } absolute w-10 h-10 md:w-14 md:h-14 text-gilt ${className}`}
      viewBox="0 0 56 56"
      fill="none"
      style={{ transform: flip }}
    >
      <path
        d="M2 40V10a8 8 0 018-8h30"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Signature frame — the "Frames" half of the brand, drawn once on load */}
      <div className="pointer-events-none absolute inset-4 md:inset-8">
        <CornerBracket className="top-0 left-0" active={mounted} />
        <CornerBracket
          className="top-0 right-0"
          flip="scaleX(-1)"
          active={mounted}
        />
        <CornerBracket
          className="bottom-0 right-0"
          flip="scale(-1,-1)"
          active={mounted}
        />
        <CornerBracket
          className="bottom-0 left-0"
          flip="scaleY(-1)"
          active={mounted}
        />
      </div>

      {/* Ambient botanical line art — the "Florals" half of the brand */}
      <IconSprig className="pointer-events-none absolute -left-6 bottom-0 w-40 h-40 md:w-56 md:h-56 text-fern/[0.08] rotate-[10deg]" />
      <IconSprig className="pointer-events-none absolute -right-8 top-10 w-32 h-32 md:w-48 md:h-48 text-petal/[0.10] rotate-[195deg]" />

      <div
        className={`relative max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <p className="eyebrow text-fern-soft mb-6 flex items-center justify-center gap-2">
          <span className="inline-block w-6 h-px bg-fern-soft/60" />
          Florals &amp; Frames · Goa, India
          <span className="inline-block w-6 h-px bg-fern-soft/60" />
        </p>

        <h1 className="font-display font-normal text-ink leading-[1.08] text-[2.6rem] sm:text-6xl md:text-7xl">
          Cinematic wedding
          <br />
          websites,{" "}
          <span className="italic text-fern">made personal.</span>
        </h1>

        <p className="mt-8 font-body text-base md:text-lg text-ink/70 max-w-xl mx-auto leading-relaxed">
          We take your proposal story, your church vows and your family's
          blessing, and turn them into one living website — chapter by
          chapter — that your guests will actually want to read.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium bg-ink text-paper rounded-full px-8 py-4 hover:bg-fern transition-colors duration-300 w-full sm:w-auto"
          >
            Tell Us Your Story
          </a>
          <a
            href="https://floralsandframes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-ink/70 hover:text-ink underline decoration-gilt/50 underline-offset-4 transition-colors"
          >
            See a real example ↗
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40">
        <span className="eyebrow text-[0.62rem]">Scroll</span>
        <span className="block w-px h-10 bg-ink/25" />
      </div>
    </section>
  );
}
