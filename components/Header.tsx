const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20to%20talk%20about%20a%20wedding%20website%20for%20us.";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-display italic text-lg md:text-xl text-ink tracking-tight"
        >
          Florals <span className="text-gilt not-italic">&amp;</span> Frames
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow border border-ink/70 rounded-full px-5 py-2.5 hover:bg-ink hover:text-paper hover:border-ink transition-colors duration-300"
        >
          Start a Conversation
        </a>
      </div>
    </header>
  );
}
