import React from 'react';

/*
 * Custom line illustrations for the knowledge topics.
 * Drawn on a 48-unit grid with the same stroke language as the brand emblem,
 * so the set reads as one family rather than generic stock icons.
 */

const Frame = ({ children }) => (
  <svg
    className="topic-glyph"
    viewBox="0 0 48 48"
    width="48"
    height="48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

// Palm-leaf manuscript (pothi) — Vedas & Upanishads
export const Manuscript = () => (
  <Frame>
    <rect x="5" y="14" width="38" height="9" rx="4.5" />
    <rect x="5" y="25" width="38" height="9" rx="4.5" />
    <circle cx="15" cy="18.5" r="1.3" />
    <circle cx="33" cy="18.5" r="1.3" />
    <path d="M19 18.5h10M11 29.5h26" opacity=".6" />
    <path d="M15 34v5M33 34v5" />
  </Frame>
);

// Chariot wheel — Shrimad Bhagavad Gita (the dialogue on the chariot)
export const ChariotWheel = () => (
  <Frame>
    <circle cx="24" cy="24" r="17" />
    <circle cx="24" cy="24" r="4" />
    <circle cx="24" cy="24" r="13" opacity=".45" />
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4;
      return (
        <line key={i} x1={24 + 4 * Math.cos(a)} y1={24 + 4 * Math.sin(a)} x2={24 + 17 * Math.cos(a)} y2={24 + 17 * Math.sin(a)} />
      );
    })}
  </Frame>
);

// Bow and arrow — Ramayana & Mahabharata
export const BowArrow = () => (
  <Frame>
    <path d="M14 6c14 6 14 30 0 36" />
    <path d="M14 6v36" opacity=".55" />
    <path d="M8 24h32" />
    <path d="M35 19l5 5-5 5" />
    <path d="M8 24l-2-3M8 24l-2 3" />
  </Frame>
);

// Three intersecting circles — the darshanas in dialogue
export const Darshana = () => (
  <Frame>
    <circle cx="24" cy="17" r="10" />
    <circle cx="17" cy="29" r="10" />
    <circle cx="31" cy="29" r="10" />
    <circle cx="24" cy="25" r="1.6" fill="currentColor" stroke="none" />
  </Frame>
);

// Herb sprig — Ayurveda & traditional knowledge
export const Herb = () => (
  <Frame>
    <path d="M24 42V12" />
    <path d="M24 20c-7 0-11-4-12-10 7 0 11 4 12 10Z" />
    <path d="M24 28c7 0 11-4 12-10-7 0-11 4-12 10Z" />
    <path d="M24 35c-6 0-9-3-10-8 6 0 9 3 10 8Z" />
    <path d="M18 42h12" />
  </Frame>
);

/*
 * "Jnana Deep" — a lit diya resting on an open pothi, with fine rays of light.
 * Larger illustration for the About panel (knowledge as light: तमसो मा ज्योतिर्गमय).
 */
const LAMP_RAYS = Array.from({ length: 9 }, (_, i) => {
  const a = ((-160 + i * 17.5) * Math.PI) / 180;
  const long = i % 2 === 0;
  return {
    x1: 80 + 24 * Math.cos(a),
    y1: 34 + 24 * Math.sin(a),
    x2: 80 + (long ? 40 : 33) * Math.cos(a),
    y2: 34 + (long ? 40 : 33) * Math.sin(a),
  };
});

export const KnowledgeLamp = ({ className = '' }) => (
  <svg
    className={`knowledge-lamp ${className}`}
    viewBox="0 0 160 136"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {/* rays of light */}
    <g className="lamp-rays">
      {LAMP_RAYS.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
      ))}
    </g>
    {/* flame */}
    <path className="lamp-flame" d="M80 14c7 9 9 17 5 24-1.6 2.8-3.4 4.4-5 5.2-1.6-.8-3.4-2.4-5-5.2-4-7-2-15 5-24Z" />
    <path className="lamp-flame-core" d="M80 27c2.6 3.6 3.2 7 1.6 10-.5 1-1 1.6-1.6 2-.6-.4-1.1-1-1.6-2-1.6-3-1-6.4 1.6-10Z" />
    {/* diya bowl, spout and base */}
    <path d="M56 50h48c-1.6 9.5-11 16-24 16S57.6 59.5 56 50Z" />
    <path d="M104 50c4 0 7-2 8.5-5" />
    <path d="M62 50h36" opacity=".5" />
    <path d="M73 66l-2 6h18l-2-6" />
    {/* open pothi / book */}
    <path d="M80 84c-12-6-30-7.5-50-4.5v36c20-3 38-1.5 50 4.5" />
    <path d="M80 84c12-6 30-7.5 50-4.5v36c-20-3-38-1.5-50 4.5" />
    <path d="M80 84v36" />
    <g opacity=".55">
      <path d="M38 89c12-1.4 23-.6 33 2.4" />
      <path d="M38 97c12-1.4 23-.6 33 2.4" />
      <path d="M38 105c12-1.4 23-.6 33 2.4" />
      <path d="M122 89c-12-1.4-23-.6-33 2.4" />
      <path d="M122 97c-12-1.4-23-.6-33 2.4" />
      <path d="M122 105c-12-1.4-23-.6-33 2.4" />
    </g>
    {/* resting line */}
    <path d="M20 128h120" opacity=".45" />
  </svg>
);

// Diya — Bhakti & spirituality
export const Diya = () => (
  <Frame>
    <path d="M24 8c4 5 4 10 0 13-4-3-4-8 0-13Z" />
    <path d="M7 27h34c-2 7-9 11-17 11S9 34 7 27Z" />
    <path d="M41 27c2-1 3-3 3-5" />
    <path d="M18 42h12" />
  </Frame>
);
