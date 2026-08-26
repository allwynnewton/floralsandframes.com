import Reveal from "./Reveal";

const chapters = [
  {
    numeral: "One",
    title: "You tell us everything",
    body: "A real conversation, not a form — how you met, the proposal, the families, the readings that matter to you. This becomes the spine of the site.",
  },
  {
    numeral: "Two",
    title: "We design around your story",
    body: "Palette, type and imagery chosen for your two families and your venue — never a shared template with your names swapped in.",
  },
  {
    numeral: "Three",
    title: "Your story comes alive",
    body: "Timeline, countdown, ceremony and reception details, galleries and your song, playing softly, arranged in the order your guests should read them.",
  },
  {
    numeral: "Four",
    title: "It goes live, and holds still",
    body: "One link for every guest, RSVPs collected in real time, and a keepsake that stays online long after the last dance.",
  },
];

export default function Process() {
  return (
    <section className="bg-paper-deep px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal as="div" className="max-w-xl mb-16 md:mb-24">
          <p className="eyebrow text-petal mb-4">The Process</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            How we tell your story
          </h2>
        </Reveal>

        <Reveal as="div" className="relative">
          {/* Connecting thread — a literal thread stitching the four chapters together */}
          <div
            className="grow-v absolute left-[13px] md:left-[19px] top-2 bottom-2 w-px bg-gilt/40"
            aria-hidden="true"
          />

          <ol className="space-y-14 md:space-y-20">
            {chapters.map((chapter, i) => (
              <Reveal as="li" key={chapter.numeral} delayMs={i * 80}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-10 items-start pl-8 md:pl-0">
                  <div className="md:col-span-3 relative">
                    <span className="absolute -left-8 md:left-0 top-0 w-[7px] h-[7px] md:w-2 md:h-2 rounded-full bg-gilt -translate-x-1/2 md:translate-x-0" />
                    <span className="font-display italic text-2xl md:text-3xl text-gilt block md:pl-6">
                      {chapter.numeral}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-xl md:text-2xl text-ink mb-2">
                      {chapter.title}
                    </h3>
                    <p className="font-body text-ink/70 leading-relaxed max-w-xl">
                      {chapter.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
