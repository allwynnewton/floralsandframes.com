import Reveal from "./Reveal";
import {
  IconTimeline,
  IconEnvelope,
  IconCalendarHeart,
  IconPin,
  IconFramedPhoto,
  IconMusicNote,
  IconRoute,
  IconFrameCorners,
} from "./icons";

const features = [
  {
    icon: IconTimeline,
    title: "Your love-story timeline",
    body: "The first hello, the friendship, the question, the wedding day — laid out as chapters guests can scroll through.",
  },
  {
    icon: IconCalendarHeart,
    title: "A countdown that means it",
    body: "Days, hours and minutes until you're married, updating live on every visit.",
  },
  {
    icon: IconEnvelope,
    title: "RSVPs, without the spreadsheet",
    body: "Guests reply to ceremony and reception separately, with dietary notes, straight from the site.",
  },
  {
    icon: IconPin,
    title: "Ceremony & reception details",
    body: "Venue, dress code, timings and directions, kept in one place instead of six separate messages.",
  },
  {
    icon: IconFramedPhoto,
    title: "Galleries that breathe",
    body: "Engagement shoots and family photos, framed with room to be looked at rather than scrolled past.",
  },
  {
    icon: IconMusicNote,
    title: "Your song, playing softly",
    body: "A quiet audio layer guests can turn on — the track that means something to the two of you.",
  },
  {
    icon: IconRoute,
    title: "Getting guests there",
    body: "Shuttle timings, parking and map links for anyone travelling in from out of town.",
  },
  {
    icon: IconFrameCorners,
    title: "Built for every screen",
    body: "Most guests will open this on their phone, in a group chat — so that's the first screen we design for.",
  },
];

export default function Features() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <Reveal as="div" className="max-w-xl mb-16 md:mb-20">
          <p className="eyebrow text-fern-soft mb-4">What&rsquo;s Inside</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            Everything the day needs,
            <br className="hidden md:block" /> in one calm place
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal as="div" key={feature.title} delayMs={(i % 4) * 70}>
                <Icon className="w-7 h-7 text-fern mb-5" />
                <h3 className="font-display text-lg text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-ink/65 leading-relaxed">
                  {feature.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
