const WHATSAPP_URL =
  "https://wa.me/917020727961?text=Hi%20Florals%20and%20Frames!%20I'd%20love%20to%20talk%20about%20a%20wedding%20website%20for%20us.";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 md:px-10 py-14">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display italic text-xl text-ink mb-2">
            Florals <span className="text-gilt not-italic">&amp;</span> Frames
          </p>
          <p className="font-body text-sm text-ink/55 max-w-xs leading-relaxed">
            Cinematic wedding websites, made personal. Goa, India.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-ink/70 hover:text-fern transition-colors"
          >
            WhatsApp · +91 70207 27961
          </a>
          <a
            href="https://floralsandframes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-ink/70 hover:text-fern transition-colors"
          >
            floralsandframes.com ↗
          </a>
        </div>
      </div>

      <p className="font-body text-xs text-ink/35 max-w-content mx-auto mt-10">
        © {new Date().getFullYear()} Florals &amp; Frames. Made with love
        &amp; prayer.
      </p>
    </footer>
  );
}
