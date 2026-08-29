"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20to%20talk%20about%20a%20wedding%20website%20for%20us.";
const DEMO_URL = "https://templates.floralsandframes.com";
const EMAIL = "enquiries@floralsandframes.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Wedding website enquiry",
)}&body=${encodeURIComponent(
  "Hi Florals and Frames!\n\nWe'd love to hear about your packages and pricing. Here's a little about us:\n\n- Names:\n- Wedding date:\n- Style / vibe we love:\n\nThank you!",
)}`;

const PHOTOS = {
  hero: "/images/hero.jpg",
  chapel: "https://images.unsplash.com/photo-1704281657558-352922cc0463?auto=format&fit=crop&fm=jpg&q=86&w=2200",
  stationery: "https://images.unsplash.com/photo-1758825178518-ca48833a6c57?auto=format&fit=crop&fm=jpg&q=86&w=2200",
  couple: "/images/couple-church.jpg",
  bouquet: "https://images.unsplash.com/photo-1521520368710-3ab197656d60?auto=format&fit=crop&fm=jpg&q=86&w=1800",
  veil: "/images/collage-feeling.jpg",
  statement: "/images/statement-pheras.jpg",
  invitation: "/images/invitation-sq.jpg",
  story1: "/images/story-beginning.jpg",
  story2: "/images/story-wedday.jpg",
  story3: "/images/story-haldi.jpg",
};

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true" || (src.includes("gsap.min") && window.gsap) || (src.includes("ScrollTrigger") && window.ScrollTrigger)) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Could not load ${src}`));
    document.head.appendChild(script);
  });
}

const stories = [
  {
    kicker: "01 · Your beginning",
    title: "Your story, not a template.",
    body: "The first hello, the proposal, the places, the people and the tiny details only the two of you understand. We turn those moments into the narrative of your wedding website.",
    image: PHOTOS.story1,
    alt: "Bride in tiara and veil holding a bouquet inside a softly lit church",
    objectPosition: "50% 32%",
    label: "Love story timeline",
  },
  {
    kicker: "02 · Your wedding day",
    title: "Every detail, beautifully held.",
    body: "Ceremony timings, reception, directions, dress code, countdowns and travel notes live in one elegant place—easy for guests to find, beautiful enough to remember.",
    image: PHOTOS.story2,
    alt: "Bride and groom sharing a quiet moment under the veil",
    label: "Ceremony & venue guide",
  },
  {
    kicker: "03 · Your invitation",
    title: "A keepsake with a pulse.",
    body: "Typography, photography, music and motion are composed as one experience. The goal is simple: your guests should feel your wedding before they even reach the RSVP.",
    image: PHOTOS.story3,
    alt: "Couple showered with marigold petals during a joyful haldi ceremony",
    label: "Designed around your aesthetic",
  },
];

const services = [
  ["Story-led design", "A layout shaped around your relationship and wedding—not just your names dropped into a preset."],
  ["Cinematic motion", "GSAP transitions, image reveals and scroll choreography that give the website rhythm without making it hard to use."],
  ["RSVPs & guest details", "Attendance, dietary notes, venue details, timings and useful guest information in one polished place."],
  ["Mobile-first", "Most guests will open the link from WhatsApp, so the smallest screen gets the same care as desktop."],
  ["Music & galleries", "Bring your song, engagement photographs, family memories and films into the experience without clutter."],
  ["Your own shareable URL", "One polished link for invitations, WhatsApp and guests—and a digital memory you can revisit later."],
];

const process = [
  ["01", "Tell us your story", "Send your wedding date, events, photos, visual references and the little details that make the celebration yours."],
  ["02", "Choose the starting direction", "Begin with our live design direction, then we reshape the palette, typography, imagery and sections around you."],
  ["03", "We build & choreograph", "We compose the page, add the interactions, optimize the mobile experience and connect the practical guest details."],
  ["04", "Review, refine, share", "Once it feels right, your website goes live as one beautiful link ready for every guest."],
];

export default function LandingExperience() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    const boot = async () => {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js");
      } catch (error) {
        console.warn("Florals & Frames motion could not initialize.", error);
        return;
      }

      if (disposed || !root.current) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Hero entrance. No page content is permanently hidden if GSAP fails.
        const heroIntro = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroIntro
          .from(".hero-kicker", { y: 22, opacity: 0, duration: 0.8 })
          .from(".hero-line > span", { yPercent: 115, duration: 1.15, stagger: 0.1 }, "-=.5")
          .from(".hero-summary", { y: 24, opacity: 0, duration: 0.85 }, "-=.7")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.75 }, "-=.62")
          .from(".hero-note-card", { y: 35, opacity: 0, rotate: 2, duration: 0.9 }, "-=.75")
          .from(".hero-mini-photo", { y: 45, opacity: 0, rotate: -3, duration: 0.95 }, "-=.82");

        gsap.to(".hero-media", {
          scale: 1.12,
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 },
        });

        gsap.to(".hero-copy", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "15% top", end: "bottom top", scrub: 1 },
        });

        // Text stays visible; motion only adds movement so sections cannot become blank.
        gsap.utils.toArray(".motion-up").forEach((element: any) => {
          gsap.from(element, {
            y: 52,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 91%", once: true },
          });
        });

        gsap.utils.toArray(".image-reveal").forEach((element: any) => {
          gsap.fromTo(
            element,
            { clipPath: "inset(0 0 14% 0)", scale: 1.045 },
            {
              clipPath: "inset(0 0 0% 0)",
              scale: 1,
              duration: 1.25,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            }
          );
        });

        gsap.to(".collage-main", {
          yPercent: -9,
          ease: "none",
          scrollTrigger: { trigger: ".intro-visual", start: "top bottom", end: "bottom top", scrub: 1 },
        });
        gsap.to(".collage-small", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: ".intro-visual", start: "top bottom", end: "bottom top", scrub: 1 },
        });

        const mm = gsap.matchMedia();

        mm.add("(min-width: 900px)", () => {
          const cards = gsap.utils.toArray(".story-card") as any[];
          const copies = gsap.utils.toArray(".story-copy") as any[];
          const dots = gsap.utils.toArray(".story-dot") as any[];
          const images = cards.map((card) => card.querySelector("img"));

          // Keep every image inside one fixed frame. The old version translated
          // the next card below the frame, so it visibly leaked out and then sat
          // underneath the first card because of its z-index.
          cards.forEach((card, index) => {
            gsap.set(card, {
              zIndex: index + 1,
              autoAlpha: index === 0 ? 1 : 0,
              clipPath: index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          });

          images.forEach((image, index) => {
            if (!image) return;
            gsap.set(image, { scale: index === 0 ? 1.025 : 1.09 });
          });

          copies.forEach((copy, index) => {
            gsap.set(copy, {
              autoAlpha: index === 0 ? 1 : 0,
              y: index === 0 ? 0 : 24,
              pointerEvents: index === 0 ? "auto" : "none",
            });
          });

          dots.forEach((dot, index) => {
            gsap.set(dot, {
              scaleX: index === 0 ? 1 : 0.28,
              opacity: index === 0 ? 1 : 0.34,
            });
          });

          const storyTimeline = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            scrollTrigger: {
              trigger: ".story-stage",
              start: "top top",
              end: () => `+=${Math.max(window.innerHeight * 2.7, 2100)}`,
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Give the first chapter some breathing room before the first change.
          storyTimeline.to(images[0], { scale: 1.055, duration: 0.65, ease: "none" }, 0);

          for (let index = 1; index < cards.length; index++) {
            const at = index * 1.15;

            storyTimeline
              .to(
                copies[index - 1],
                {
                  autoAlpha: 0,
                  y: -20,
                  pointerEvents: "none",
                  duration: 0.25,
                  ease: "power2.in",
                },
                at - 0.22
              )
              .to(
                cards[index],
                {
                  autoAlpha: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 0.72,
                },
                at
              )
              .to(
                images[index],
                { scale: 1, duration: 0.92, ease: "power2.out" },
                at
              )
              .fromTo(
                copies[index],
                { autoAlpha: 0, y: 24 },
                {
                  autoAlpha: 1,
                  y: 0,
                  pointerEvents: "auto",
                  duration: 0.38,
                  ease: "power2.out",
                },
                at + 0.34
              )
              .to(
                dots[index - 1],
                { scaleX: 0.28, opacity: 0.34, duration: 0.28 },
                at + 0.2
              )
              .to(
                dots[index],
                { scaleX: 1, opacity: 1, duration: 0.28 },
                at + 0.2
              );
          }

          // Small hold on the final chapter so the next section does not arrive
          // immediately after the last reveal.
          storyTimeline.to({}, { duration: 0.55 });

          gsap.fromTo(
            ".demo-browser",
            { y: 80, rotateX: 8, scale: 0.96 },
            {
              y: 0,
              rotateX: 0,
              scale: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".demo-section", start: "top 72%", end: "center 55%", scrub: 1 },
            }
          );

          gsap.to(".demo-browser-screen img", {
            yPercent: -10,
            ease: "none",
            scrollTrigger: { trigger: ".demo-section", start: "top bottom", end: "bottom top", scrub: 1.1 },
          });
        });

        gsap.utils.toArray(".service-item").forEach((item: any, index: number) => {
          gsap.from(item, {
            y: 34,
            duration: 0.8,
            delay: (index % 3) * 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 93%", once: true },
          });
        });

        gsap.fromTo(
          ".statement-photo img",
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".statement-section", start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );

        gsap.utils.toArray(".process-row").forEach((row: any) => {
          gsap.from(row, {
            x: 38,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 92%", once: true },
          });
        });

        gsap.fromTo(
          ".final-photo",
          { clipPath: "inset(12% 10% 12% 10% round 28px)", scale: 1.09 },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".final-cta", start: "top bottom", end: "center center", scrub: 1 },
          }
        );
      }, root);

      const refresh = () => ScrollTrigger.refresh();
      const refreshTimer = window.setTimeout(refresh, 350);
      window.addEventListener("load", refresh, { once: true });

      // Remote photography can finish loading after ScrollTrigger has measured the page.
      // Refresh once each late image arrives so pinned sections never get bad spacer heights.
      const lateImages = Array.from(root.current?.querySelectorAll<HTMLImageElement>("img") ?? []) as HTMLImageElement[];
      const pendingImages = lateImages.filter((img) => !img.complete);
      pendingImages.forEach((img) => img.addEventListener("load", refresh, { once: true }));

      cleanup = () => {
        window.clearTimeout(refreshTimer);
        pendingImages.forEach((img) => img.removeEventListener("load", refresh));
        ctx.revert();
      };
    };

    boot();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={root} className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Florals and Frames home">
          <span>Florals</span><i>&</i><span>Frames</span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#stories">Our approach</a>
          <a href="#demo">Live demo</a>
          <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start your story</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <img className="hero-media" src={PHOTOS.hero} alt="Bride and groom before a church spire in an open Goan field" />
          <div className="hero-shade" />
          <div className="hero-grain" />

          <div className="hero-copy">
            <div className="hero-kicker"><span />Wedding websites · Goa, India</div>
            <h1 className="hero-title" aria-label="Make your wedding feel alive before it begins">
              <span className="hero-line"><span>Make your wedding</span></span>
              <span className="hero-line hero-line-accent"><span>feel alive</span></span>
              <span className="hero-line"><span>before it begins.</span></span>
            </h1>
            <div className="hero-lower">
              <p className="hero-summary">We turn your photographs, story and wedding details into a cinematic website your guests will actually want to explore.</p>
              <div className="hero-actions">
                <a className="primary-pill" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Create your website <span>↗</span></a>
                <a className="ghost-link" href="#demo">See the live demo <span>↓</span></a>
              </div>
            </div>
          </div>

          <aside className="hero-note-card" aria-label="Florals and Frames design promise">
            <span>Designed like an invitation film</span>
            <strong>Story · motion · details · RSVP</strong>
            <small>One beautiful link for the whole celebration.</small>
          </aside>

          <figure className="hero-mini-photo">
            <img src={PHOTOS.bouquet} alt="Wedding bouquet detail" />
            <figcaption>made personal, down to the details</figcaption>
          </figure>

          <div className="scroll-cue"><span>Scroll to enter</span><i /></div>
        </section>

        <section className="intro-section">
          <div className="intro-grid">
            <div className="intro-copy motion-up">
              <span className="section-label">More than a wedding page</span>
              <h2>The invitation is the <em>first chapter.</em></h2>
              <p className="intro-lead">Before the flowers arrive and before the music begins, your guests meet the wedding through a link.</p>
              <p>Florals & Frames makes that first moment feel considered. We combine your story, photographs, event information and visual style into one scroll-led experience—so practical details never have to look practical.</p>
              <div className="intro-proof">
                <span><b>01</b>Personal story</span>
                <span><b>02</b>Guest-ready details</span>
                <span><b>03</b>Cinematic motion</span>
              </div>
              <a className="text-link" href="#stories">See how we tell it <span>↓</span></a>
            </div>

            <div className="intro-visual" aria-label="Wedding details collage">
              <figure className="collage-main image-reveal">
                <img src={PHOTOS.veil} alt="Couple exchanging rings at a flower-filled Indian ceremony" />
                <figcaption><span>01</span>the feeling</figcaption>
              </figure>
              <figure className="collage-small image-reveal">
                <img src={PHOTOS.bouquet} alt="Wedding bouquet" />
                <figcaption><span>02</span>the details</figcaption>
              </figure>
              <figure className="collage-wide image-reveal">
                <img src={PHOTOS.invitation} alt="Wedding invitation card with rings and roses" />
                <figcaption><span>03</span>the invitation</figcaption>
              </figure>
              <div className="intro-caption">A wedding website can be useful <em>and</em> beautiful.</div>
            </div>
          </div>
        </section>

        <section id="stories" className="story-stage">
          <div className="story-heading">
            <span className="section-label light">What we create</span>
            <h2>One link.<br /><em>A whole story.</em></h2>
            <p>Not a pile of sections. A sequence that moves from who you are, to where everyone needs to be, to the moment they say “yes, we’ll be there.”</p>
            <div className="story-progress" aria-hidden="true">
              {stories.map((story) => <i className="story-dot" key={story.kicker} />)}
            </div>
          </div>

          <div className="story-visuals">
            {stories.map((story) => (
              <article className="story-card" key={story.kicker}>
                <img src={story.image} alt={story.alt} style={(story as { objectPosition?: string }).objectPosition ? { objectPosition: (story as { objectPosition?: string }).objectPosition } : undefined} />
                <span>{story.label}</span>
              </article>
            ))}
          </div>

          <div className="story-copies">
            {stories.map((story) => (
              <article className="story-copy" key={story.kicker}>
                <span>{story.kicker}</span>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="demo" className="demo-section">
          <div className="demo-copy motion-up">
            <span className="section-label">One live design · fully customizable</span>
            <h2>Meet our first world:<br /><em>Cathedral Romance.</em></h2>
            <p>We currently have one complete design direction—and we would rather show you one real experience than four fake choices. Think of it as the starting canvas, not the finished website.</p>
            <ul>
              <li><span>01</span>Replace every photo, name, date and story</li>
              <li><span>02</span>Shift the colors, typography and section order</li>
              <li><span>03</span>Tailor ceremony, reception, RSVP and guest details</li>
              <li><span>04</span>Keep the cinematic motion and mobile polish</li>
            </ul>
            <div className="demo-actions">
              <a className="dark-pill" href={DEMO_URL} target="_blank" rel="noreferrer">Open live demo <span>↗</span></a>
              <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Ask for your version <span>↗</span></a>
            </div>
          </div>

          <div className="demo-stage">
            <div className="demo-browser">
              <div className="demo-browser-bar">
                <span><i /><i /><i /></span>
                <b>yourstory.floralsandframes.com</b>
                <em>live preview</em>
              </div>
              <div className="demo-browser-screen">
                <img src={PHOTOS.chapel} alt="Cathedral Romance wedding website preview" />
                <div className="demo-site-shade" />
                <div className="demo-site-brand">Florals <i>&</i> Frames</div>
                <div className="demo-site-copy">
                  <small>THE WEDDING OF</small>
                  <strong>Maria <i>&</i><br />Joel</strong>
                  <span>24 · 10 · 2026</span>
                </div>
              </div>
            </div>
            <div className="demo-stamp">LIVE<br />DEMO</div>
            <div className="demo-mobile-card">
              <img src={PHOTOS.stationery} alt="Mobile wedding invitation preview" />
              <div><span>Mobile-first</span><b>Beautiful from the WhatsApp tap.</b></div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="services-layout">
            <div className="services-intro motion-up">
              <span className="section-label">Inside every experience</span>
              <h2>Beautiful on the surface.<br /><em>Useful underneath.</em></h2>
              <p>A guest should be able to admire the site and still find the venue in five seconds. The design and the utility are built together.</p>
              <figure className="services-photo image-reveal"><img src={PHOTOS.bouquet} alt="Wedding floral detail" /></figure>
            </div>
            <div className="services-grid">
              {services.map(([title, body], index) => (
                <article className="service-item" key={title}>
                  <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="statement-photo image-reveal"><img src={PHOTOS.statement} alt="Bride and groom at the sacred fire during a Hindu wedding ceremony" /></div>
          <div className="statement-copy motion-up">
            <span className="section-label">The design test</span>
            <p className="statement-quote">A guest should know the wedding is <em>yours</em> before they even read your names.</p>
            <p>That is why we start with mood, story and photographs—not a checklist of widgets. Once the feeling is right, we make the information effortless.</p>
            <div className="statement-signoff"><i />Florals & Frames</div>
          </div>
        </section>

        <section className="process-section">
          <div className="process-intro motion-up">
            <span className="section-label light">From hello to live</span>
            <h2>A simple process.<br /><em>No template headache.</em></h2>
            <p>You do not need to design anything yourself. Bring the content and the references; we turn them into the website.</p>
          </div>
          <ol className="process-list">
            {process.map(([number, title, text]) => (
              <li className="process-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i>↘</i>
              </li>
            ))}
          </ol>
        </section>

        <section className="final-cta">
          <img className="final-photo" src={PHOTOS.couple} alt="Bride and groom outside the Basilica of Bom Jesus in Goa" />
          <div className="final-overlay" />
          <div className="final-content motion-up">
            <span className="section-label light">Your story starts here</span>
            <h2>Give your guests<br /><em>something to feel.</em></h2>
            <p>Tell us your date, your style and a little about the two of you. We’ll turn it into one beautiful link.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
            <p className="final-email">Prefer email? <a href={EMAIL_URL}>{EMAIL}</a></p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <span className="footer-kicker">Florals & Frames · Goa, India</span>
            <h2>Let’s make a website<br />your guests <em>remember.</em></h2>
          </div>
          <a className="footer-circle" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>Start your<br />story</span><i>↗</i></a>
        </div>

        <div className="footer-bottom">
          <a className="brand footer-brand" href="#top"><span>Florals</span><i>&</i><span>Frames</span></a>
          <p>Story-led wedding websites with cinematic motion, thoughtful guest details and a distinctly personal point of view.</p>
          <div className="footer-links">
            <a href="#stories">Approach</a>
            <a href={DEMO_URL} target="_blank" rel="noreferrer">Live demo ↗</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            <a href={EMAIL_URL}>Email ↗</a>
          </div>
          <small>
            © {new Date().getFullYear()} Florals & Frames. Made for love stories.
            <span className="footer-disclaimer">Photography shown is sample &amp; free-stock imagery for demonstration only—all rights and credit belong to the original photographers and owners.</span>
          </small>
        </div>
      </footer>
    </div>
  );
}
