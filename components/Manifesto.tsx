import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <Reveal as="div" className="md:col-span-5">
          <p className="font-display italic text-3xl md:text-4xl text-fern leading-tight">
            Every love story is beautiful. But yours isn&rsquo;t a template.
          </p>
        </Reveal>

        <Reveal
          as="div"
          delayMs={120}
          className="md:col-span-7 md:pt-3 space-y-6"
        >
          <p className="font-body text-ink/75 text-base md:text-lg leading-relaxed">
            Most wedding websites are forms with a font swapped in. We build
            something closer to a keepsake — a site your guests scroll
            through slowly, the way you&rsquo;d turn the pages of an
            invitation your grandmother kept in a drawer for forty years.
          </p>
          <p className="font-body text-ink/75 text-base md:text-lg leading-relaxed">
            Your timeline, your church, your reception band, your
            grandmother&rsquo;s blessing — we design around the actual
            details of your day, not a category on a template picker.
          </p>
          <div className="pt-4 border-l-2 border-gilt/60 pl-5">
            <p className="font-display italic text-lg text-ink/80">
              Every frame tells a story. Every flower, a feeling.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
