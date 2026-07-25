/**
 * Bespoke lijn-illustraties voor Brunch & Brew — geen emoji, geen
 * icon-library. Zachte 2px-strokes met ronde uiteinden, ontbijt-warmte.
 */

type Props = { className?: string };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Koffiekop van boven met latte art-varen. */
export function LatteIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g {...stroke}>
        <circle cx="58" cy="60" r="40" />
        <circle cx="58" cy="60" r="31" opacity="0.5" />
        {/* varen */}
        <path d="M58 38v44" />
        <path d="M58 46c-7-2-11-6-12-12m12 20c-8-1-13-5-15-11m15 20c-8 0-14-3-17-9m17 18c-7 1-12-1-16-6" opacity="0.7" />
        <path d="M58 46c7-2 11-6 12-12m-12 20c8-1 13-5 15-11m-15 20c8 0 14-3 17-9m-17 18c7 1 12-1 16-6" opacity="0.7" />
        {/* oor */}
        <path d="M97 52c9 0 14 6 12 13-2 8-10 11-16 9" />
      </g>
    </svg>
  );
}

/** Tosti met kaasdraden. */
export function TostiIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g {...stroke}>
        {/* onderste driehoek */}
        <path d="M14 74 74 62l-8 44-52-32Z" />
        {/* bovenste driehoek */}
        <path d="M46 14l60 14-32 40-28-54Z" />
        {/* grill-strepen */}
        <path d="M58 26l18 4m-24 6 26 6m-30 4 22 5" opacity="0.6" />
        <path d="M28 76l24 15m-16-22 20 13" opacity="0.6" />
        {/* kaasdraden */}
        <path d="M52 62c0 8-2 14-6 18m14-20c1 7 0 13-3 18m11-20c2 6 2 11 0 16" opacity="0.8" />
      </g>
    </svg>
  );
}

/** Smoothie bowl met fruit en granola. */
export function BowlIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g {...stroke}>
        <path d="M18 56h84c-2 20-12 34-28 40-4.6 1.7-9 2.5-14 2.5s-9.4-.8-14-2.5C30 90 20 76 18 56Z" />
        <path d="M46 98v8h28v-8" opacity="0.7" />
        {/* fruit erop */}
        <circle cx="38" cy="46" r="7" />
        <circle cx="82" cy="44" r="7" />
        <path d="M52 40c0-6 4-10 9-10s9 4 9 10c0 5-4 9-9 9s-9-4-9-9Z" />
        <path d="M61 30c0-4 2-7 5-9" opacity="0.7" />
        {/* granola-stipjes */}
        <path d="M50 52h.01M58 49h.01M66 52h.01M74 49h.01" strokeWidth="3" />
      </g>
    </svg>
  );
}

/** Cinnamon bun — de swirl. */
export function BunIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g {...stroke}>
        <circle cx="60" cy="60" r="42" />
        <path d="M60 60c0-6 5-10 11-9 8 1 12 8 10 16-2 11-13 17-24 15-15-2-24-16-21-31 3-18 21-29 39-25 21 5 33 26 27 47" opacity="0.85" />
      </g>
    </svg>
  );
}

/** Sapglas met rietje en sinaasappelschijf. */
export function JuiceIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g {...stroke}>
        <path d="M40 34h44l-6 72H46l-6-72Z" />
        <path d="M43 56c12 5 26 5 38 0" opacity="0.6" />
        {/* rietje */}
        <path d="M66 34 82 10" />
        {/* sinaasappelschijf */}
        <circle cx="40" cy="30" r="12" />
        <path d="M40 18v24M28 30h24m-20.5-8.5 17 17m0-17-17 17" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Stoom-slierten. */
export function SteamLines({ className }: Props) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      <g {...stroke}>
        <path d="M18 50c-4-7 4-10 0-18m12 20c-4-8 4-11 0-20m12 18c-4-7 4-10 0-18" opacity="0.7" />
      </g>
    </svg>
  );
}

/** Zonnetje — voor "elke ochtend vers". */
export function SunIllustration({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <g {...stroke} strokeWidth="1.7">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" />
      </g>
    </svg>
  );
}
