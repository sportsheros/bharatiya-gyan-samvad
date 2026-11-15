import React, { useState } from 'react';

/*
 * Official brand logo — the circular illustrated mark.
 *   public/logo-200.png → small uses (header, footer, ≤ 100px)
 *   public/logo-400.jpg → large uses (about panel, podcast cover)
 *   public/logo.png     → 512px master for structured data / sharing
 *   brand-kit/logo-original.png → full-resolution original
 * If a file is missing or fails to load, the SVG emblem below is shown instead,
 * so the header/footer never render a broken image.
 */
const BASE = import.meta.env.BASE_URL;
export const LOGO_SRC = `${BASE}logo.png`;
// 200px PNG stays crisp up to ~100px CSS size on 2x screens; larger uses get the 400px JPEG.
const logoFor = (size) => (size <= 100 ? `${BASE}logo-200.png` : `${BASE}logo-400.jpg`);

/*
 * Fallback / decorative emblem — rising lotus-sun on a 64-unit grid.
 * Also used as an illustration motif (hero art, about panel). Colours come from CSS custom properties.
 */
export function BrandEmblem({ size = 44, title, className = '' }) {
  const labelled = Boolean(title);
  return (
    <svg
      className={`brand-emblem ${className}`}
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role={labelled ? 'img' : undefined}
      aria-hidden={labelled ? undefined : 'true'}
      aria-label={labelled ? title : undefined}
      focusable="false"
    >
      <circle cx="32" cy="7.5" r="2.5" className="emblem-accent" />
      <path d="M8 44 A24 24 0 0 1 56 44" className="emblem-accent-stroke" fill="none" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M32 44 C23 43 16.6 36.6 17 29 C25 30.4 30.6 36 32 44 Z" className="emblem-accent emblem-soft" />
      <path d="M32 44 C41 43 47.4 36.6 47 29 C39 30.4 33.4 36 32 44 Z" className="emblem-accent emblem-soft" />
      <path d="M32 44 C25 36 25 23 32 14 C39 23 39 36 32 44 Z" className="emblem-accent" />
      <g className="emblem-ink-stroke" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M5 44 H59" />
        <path d="M15 51 H49" />
        <path d="M23 57.5 H41" />
      </g>
    </svg>
  );
}

/* The circular logo image, with automatic SVG fallback. */
export function BrandMark({ size = 52, className = '', alt = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`brand-mark brand-mark--fallback ${className}`} style={{ width: size, height: size }}>
        <BrandEmblem size={Math.round(size * 0.68)} />
      </span>
    );
  }

  return (
    <img
      className={`brand-mark ${className}`}
      src={logoFor(size)}
      width={size}
      height={size}
      alt={alt}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

/*
 * Full lockup: logo + Devanagari wordmark (+ tagline / English name).
 * tone="light" → on light backgrounds, tone="dark" → on dark backgrounds.
 */
export function BrandLogo({ tone = 'light', size = 52, tagline, english = false, className = '' }) {
  return (
    <span className={`brand-lockup brand-lockup--${tone} ${className}`}>
      <BrandMark size={size} />
      <span className="brand-text">
        <span className="brand-name" lang="hi">भारतीय ज्ञान संवाद</span>
        {tagline && <span className="brand-tagline">{tagline}</span>}
        {english && <span className="brand-english" lang="en">Bharatiya Gyan Samvad</span>}
      </span>
    </span>
  );
}

export default BrandLogo;
