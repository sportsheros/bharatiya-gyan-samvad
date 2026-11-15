import React from 'react';

/*
 * Hero illustration: a jharokha (arched window) framing a sunrise over a lotus.
 * Pure SVG geometry — no stock imagery, no gradients — echoing the brand emblem at large scale.
 */

const CX = 160;
const CY = 196;

// Sun rays across the upper half-circle, alternating long / short.
const rays = Array.from({ length: 17 }, (_, i) => {
  const angle = ((190 + i * 10) * Math.PI) / 180;
  const r1 = 104;
  const r2 = i % 2 === 0 ? 150 : 130;
  return {
    x1: CX + r1 * Math.cos(angle),
    y1: CY + r1 * Math.sin(angle),
    x2: CX + r2 * Math.cos(angle),
    y2: CY + r2 * Math.sin(angle),
  };
});

// One petal pointing straight up from the lotus base; others are rotations of it.
const petal = (h, w) =>
  `M${CX} ${CY} C${CX - w} ${CY - h * 0.28} ${CX - w} ${CY - h * 0.66} ${CX} ${CY - h} ` +
  `C${CX + w} ${CY - h * 0.66} ${CX + w} ${CY - h * 0.28} ${CX} ${CY} Z`;

const petals = [
  { d: petal(64, 15), rotate: -66 },
  { d: petal(64, 15), rotate: 66 },
  { d: petal(86, 17), rotate: -34 },
  { d: petal(86, 17), rotate: 34 },
  { d: petal(112, 19), rotate: 0 },
];

function Sunrise() {
  return (
    <svg className="sunrise" viewBox="0 0 320 224" aria-hidden="true" focusable="false">
      <g className="sunrise-rays">
        {rays.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
      <path className="sunrise-ring" d={`M${CX - 92} ${CY} A92 92 0 0 1 ${CX + 92} ${CY}`} />
      <path className="sunrise-disc" d={`M${CX - 70} ${CY} A70 70 0 0 1 ${CX + 70} ${CY} Z`} />
      <g className="sunrise-petals">
        {petals.map((p, i) => (
          <path key={i} d={p.d} transform={`rotate(${p.rotate} ${CX} ${CY})`} />
        ))}
      </g>
      <circle className="sunrise-bindu" cx={CX} cy={CY - 124} r="4" />
      <g className="sunrise-water">
        <line x1="14" y1={CY} x2="306" y2={CY} />
        <line x1="70" y1={CY + 10} x2="250" y2={CY + 10} />
        <line x1="116" y1={CY + 20} x2="204" y2={CY + 20} />
      </g>
    </svg>
  );
}

export default function HeroArt({ t }) {
  return (
    <figure className="hero-art" aria-label={t.label}>
      <div className="hero-arch">
        <div className="arch-top">
          <span>{t.top}</span>
          <span aria-hidden="true">॥</span>
        </div>

        <Sunrise />

        <blockquote className="arch-quote">
          <p className="arch-sanskrit" lang="sa">सत्यं वद। धर्मं चर।</p>
          <p className="arch-translation">{t.translation}</p>
        </blockquote>

        <div className="arch-bottom">
          <span>{t.brand}</span>
          <span>{t.est}</span>
        </div>
      </div>

      <span className="floating-stamp stamp-top">{t.stampTop}</span>
      <span className="floating-stamp stamp-bottom">{t.stampBottom}</span>
    </figure>
  );
}
