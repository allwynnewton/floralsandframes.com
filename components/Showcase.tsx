import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="bg-paper-deep px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto grid lg:grid-cols-12 gap-14 items-center">
        <Reveal as="div" className="lg:col-span-5">
          <p className="eyebrow text-petal mb-4">Featured Story</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-6">
            Brendon &amp; Sarah
            <br />
            <span className="text-ink/50 text-xl md:text-2xl font-body font-normal not-italic">
              Goa · 28 December 2026
            </span>
          </h2>
          <p className="font-body text-ink/70 leading-relaxed mb-4">
            A Catholic ceremony, a resort reception, and a six-year story
            told in four chapters — from a first hello in 2019 to the
            wedding day itself. Guests scroll through the timeline, the
            proposal, the ceremony details and a live countdown before they
            ever reach the RSVP form.
          </p>
          <p className="font-body text-ink/70 leading-relaxed mb-8">
            It&rsquo;s the site that made us start writing this page — see it
            end to end, audio and all.
          </p>
          <a
            href="https://floralsandframes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-ink border-b border-gilt pb-1 hover:text-fern hover:border-fern transition-colors"
          >
            Experience the full site ↗
          </a>
        </Reveal>

        <Reveal as="div" delayMs={120} className="lg:col-span-7">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 border border-gilt/40 rounded-2xl" />
            <div className="relative rounded-xl border border-ink/10 bg-paper shadow-[0_30px_60px_-30px_rgba(34,29,26,0.35)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink/10">
                <span className="w-2 h-2 rounded-full bg-petal/60" />
                <span className="w-2 h-2 rounded-full bg-gilt/60" />
                <span className="w-2 h-2 rounded-full bg-fern/50" />
                <span className="ml-3 font-body text-[0.68rem] text-ink/40 tracking-wide">
                  floralsandframes.com
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="text-center space-y-2 py-6">
                  <p className="eyebrow text-ink/40 text-[0.6rem]">
                    B &amp; S · 28 · 12 · 2026
                  </p>
                  <p className="font-display italic text-xl md:text-2xl text-ink/80">
                    Together with their families
                  </p>
                </div>

                <div className="relative flex items-center justify-between px-2">
                  <div className="absolute left-8 right-8 top-1 h-px bg-ink/10 -z-10" />
                  {["2019", "2021", "2024", "2026"].map((year) => (
                    <div key={year} className="flex flex-col items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gilt" />
                      <span className="font-body text-[0.65rem] text-ink/50">
                        {year}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-3 pt-4">
                  {["Days", "Hours", "Min", "Sec"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-ink/10 bg-paper-deep/60 py-3 text-center"
                    >
                      <span className="font-display text-lg text-fern block">
                        00
                      </span>
                      <span className="font-body text-[0.6rem] text-ink/45 uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
