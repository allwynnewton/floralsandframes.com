// Bespoke single-line icon set — drawn for Florals & Frames rather than
// pulled from a generic icon library, so each mark echoes the brand's
// thread / frame / botanical vocabulary.

type IconProps = {
  className?: string;
};

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTimeline({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 20c3-2 4-6 7-6s3 5 6 5 4-6 7-6" />
      <circle cx="6.2" cy="18.3" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="19" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="21.8" cy="13.3" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconEnvelope({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3.5" y="6.5" width="21" height="15" rx="1.5" />
      <path d="M4.5 8l9.5 7.5L23.5 8" />
      <path d="M18.5 18.5l3.5 2M9.5 18.5L6 20.5" />
    </svg>
  );
}

export function IconCalendarHeart({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3.5" y="5.5" width="21" height="18" rx="1.5" />
      <path d="M3.5 10.5h21" />
      <path d="M8.5 3v5M19.5 3v5" />
      <path d="M14 18.5s-3.4-2.1-3.4-4.4a2 2 0 013.4-1.4 2 2 0 013.4 1.4c0 2.3-3.4 4.4-3.4 4.4z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 24s8-7.4 8-13.2A8 8 0 106 10.8C6 16.6 14 24 14 24z" />
      <circle cx="14" cy="10.6" r="2.6" />
    </svg>
  );
}

export function IconFramedPhoto({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3.5 8V4.5H8M20 4.5h4.5V8M24.5 20v3.5H20M8 23.5H3.5V20" />
      <rect x="7.5" y="7.5" width="13" height="13" rx="1" />
      <circle cx="11.3" cy="11.3" r="1.3" />
      <path d="M8.5 19l3.6-4 2.6 2.6 2.3-3.1 3.7 4.5" />
    </svg>
  );
}

export function IconMusicNote({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M11 20.5a3 3 0 11-2.2-4.9A3 3 0 0111 18v2.5z" />
      <path d="M11 18V6.5L22 4v11.5" />
      <path d="M22 15.5a3 3 0 11-2.2-2.9 3 3 0 012.2 2.9z" />
    </svg>
  );
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="6" cy="7" r="2" />
      <circle cx="22" cy="21" r="2" />
      <path d="M6 9v3a4 4 0 004 4h6a4 4 0 014 4v1" />
    </svg>
  );
}

export function IconFrameCorners({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3.5 9V3.5H9" />
      <path d="M19 3.5h5.5V9" />
      <path d="M24.5 19v5.5H19" />
      <path d="M9 24.5H3.5V19" />
      <circle cx="14" cy="14" r="3.2" />
    </svg>
  );
}

export function IconSprig({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M14 25V6" />
      <path d="M14 10c-2.6-2.6-5-2.8-7.4-1.4C8.4 11 10.8 11.6 14 10z" />
      <path d="M14 14c2.6-2.8 5.2-3 7.6-1.6-2 2.6-4.6 3-7.6 1.6z" />
      <path d="M14 8.5a3 3 0 01.6-4.5" />
    </svg>
  );
}
