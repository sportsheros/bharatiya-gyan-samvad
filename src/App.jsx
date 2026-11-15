import React, { useEffect, useState } from 'react';
import {
  Menu, X, ArrowUpRight, Play, ArrowRight, Quote, ChevronDown, Mail,
  Mic, BookOpenText, MessageCircleQuestion, GraduationCap, Search,
} from 'lucide-react';
import { BrandLogo, BrandMark } from './components/BrandLogo.jsx';
import HeroArt from './components/HeroArt.jsx';
import { YoutubeIcon, InstagramIcon, FacebookIcon, WhatsappIcon } from './components/SocialIcons.jsx';
import { Manuscript, ChariotWheel, BowArrow, Darshana, Herb, Diya, KnowledgeLamp } from './components/TopicGlyphs.jsx';
import { useLang } from './i18n.jsx';
import founderPhoto from './assets/founder-jeet-beniwal.jpg';

/* ------------------------------------------------------------------ */
/* Site configuration — brand contact details & official accounts      */
/* ------------------------------------------------------------------ */

const CONTACT_EMAIL = 'jeetbeniwal231@gmail.com';
const WHATSAPP_NUMBER = '918447041274'; // country code + number, digits only
const PHONE_DISPLAY = '+91 84470 41274';

/*
 * OFFICIAL BRAND ACCOUNTS ONLY — never a personal/founder account.
 * Paste each profile URL when ready. While `url` is null, the link points to the on-page
 * channels section and the card shows a "link coming soon" badge.
 */
const SOCIAL_LINKS = {
  // Temporary accounts (medibooksin) — replace with the dedicated Bharatiya Gyan Samvad profiles when ready.
  youtube: 'https://www.youtube.com/@medibooksin',
  instagram: 'https://www.instagram.com/medibooksin/',
  facebook: 'https://www.facebook.com/medibookin',
};

/*
 * Published episodes. Leave empty for the pre-launch state. When episodes go live, add:
 *   { youtubeId: 'XXXXXXXXXXX', title: '...', topic: '...' }
 * and the podcast section switches to real YouTube embeds automatically.
 */
const episodes = [];

/* ------------------------------------------------------------------ */

const socialMeta = [
  { key: 'youtube', label: 'YouTube', Icon: YoutubeIcon },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon },
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
];

const topicGlyphs = [Manuscript, ChariotWheel, BowArrow, Darshana, Herb, Diya];
const roleIcons = [Mic, BookOpenText, MessageCircleQuestion]; // host, expert guest, co-host
const founderRoleIcons = [GraduationCap, Search, Mic]; // student, researcher, host
const waveform = [6, 14, 22, 12, 30, 18, 38, 24, 44, 28, 36, 16, 26, 40, 20, 32, 12, 24, 8, 18, 30, 14, 22, 10];

const pad = (n) => String(n).padStart(2, '0');
const mailHref = () => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Bharatiya Gyan Samvad — Enquiry')}`;
const whatsappHref = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const external = { target: '_blank', rel: 'noopener noreferrer' };

// Unconfigured profiles fall back to the channels section.
const socialProps = (key) => (SOCIAL_LINKS[key] ? { href: SOCIAL_LINKS[key], ...external } : { href: '#channels' });

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

const SECTION_IDS = ['home', 'about', 'knowledge', 'podcasts', 'approach', 'contact'];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/*
 * Subtle fade-up for `.reveal` elements. Content is visible by default; the hidden start
 * state only applies once JS adds `.has-reveal` to <html>, and never with reduced motion.
 * Re-scans on language change so freshly rendered nodes are observed too.
 */
function useReveal(dep) {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return undefined;
    document.documentElement.classList.add('has-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, tone = 'light' }) {
  return (
    <div className={`eyebrow eyebrow--${tone}`}>
      <span className="eyebrow-rule" aria-hidden="true"></span>
      {children}
    </div>
  );
}

// title: [before, emphasised, after]
function Title({ parts }) {
  const [before, em, after] = parts;
  return <>{before}<em>{em}</em>{after}</>;
}

function SectionHeading({ kicker, title, desc, light = false, split = false }) {
  return (
    <div className={`section-heading reveal ${light ? 'is-light' : ''} ${split ? 'is-split' : ''}`}>
      <div>
        <Eyebrow tone={light ? 'dark' : 'light'}>{kicker}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function LangToggle({ className = '' }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label={t.lang.label}>
      <button type="button" lang="hi" aria-pressed={lang === 'hi'} onClick={() => setLang('hi')} title={t.lang.hiFull}>
        {t.lang.hi}
      </button>
      <button type="button" lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')} title={t.lang.enFull}>
        {t.lang.en}
      </button>
    </div>
  );
}

function SocialIconLinks({ className = '', size = 16 }) {
  return (
    <div className={className}>
      {socialMeta.map(({ key, label, Icon }) => (
        <a key={key} {...socialProps(key)} aria-label={label} title={label}>
          <Icon width={size} height={size} />
        </a>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function TopBar() {
  const { t } = useLang();
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span className="topbar-tagline">{t.topbar.tagline}</span>
        <div className="topbar-links">
          <a href={mailHref()}><Mail size={14} aria-hidden="true" /> <span lang="en">{CONTACT_EMAIL}</span></a>
          <a href={whatsappHref(t.contact.whatsappText)} {...external}>
            <WhatsappIcon width={14} height={14} /> <span lang="en">{PHONE_DISPLAY}</span>
          </a>
          <span className="topbar-divider" aria-hidden="true"></span>
          <SocialIconLinks className="topbar-social" size={14} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-wrap">
        <a className="brand" href="#home" onClick={close} aria-label={t.brand.home}>
          <BrandLogo tone="light" size={72} tagline={t.brand.tagline} />
        </a>

        <div className="nav-actions">
          <LangToggle className="lang-toggle--mobile" />
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav id="primary-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label={t.navLabel}>
          {t.nav.map(([label, href]) => {
            const isActive = active === href.slice(1);
            return (
              <a key={href} href={href} onClick={close} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'true' : undefined}>
                {label}
              </a>
            );
          })}
          <LangToggle className="lang-toggle--desktop" />
          <a className="nav-cta" {...socialProps('youtube')} onClick={close}>
            <YoutubeIcon width={17} height={17} /> {t.navCta}
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow tone="dark">{h.eyebrow}</Eyebrow>
          <h1>
            <span>{h.line1}</span>
            <span><em>{h.line2Em}</em>{h.line2Rest}</span>
          </h1>
          <p className="hero-lead">{h.lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#podcasts">
              <Play size={16} fill="currentColor" /> {h.ctaPrimary}
            </a>
            <a className="text-link text-link--dark" href="#about">
              {h.ctaSecondary} <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-rule" aria-hidden="true"></span>
            <span>{h.note}</span>
          </div>
        </div>

        <HeroArt t={t.art} />
      </div>

      <div className="topic-strip" aria-hidden="true">
        <div className="container topic-strip-inner">
          {t.strip.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="strip-dot">✦</span>}
              <span>{s}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="container hero-bottom">
        <span>{h.bottom}</span>
        <a className="scroll-cue" href="#about">{h.scroll} <ChevronDown size={15} /></a>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          {/* Jnana Deep — knowledge as light: "lead me from darkness to light" */}
          <div className="about-window">
            <KnowledgeLamp />
            <p className="about-sutra" lang="sa">तमसो मा ज्योतिर्गमय</p>
            <span className="about-sutra-source">— {a.sutraSource}</span>
          </div>
          <figure className="about-quote">
            <Quote size={24} aria-hidden="true" />
            <blockquote><p>{a.quote}</p></blockquote>
            <figcaption>{a.quoteCaption}</figcaption>
          </figure>
          <div className="about-vertical" lang="en" aria-hidden="true">Bharatiya Gyan Samvad · Est. 2026</div>
        </div>

        <div className="about-copy">
          <SectionHeading kicker={a.kicker} title={<Title parts={a.title} />} />
          <div className="about-paragraphs reveal">
            {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ol className="principles reveal">
            {a.principles.map(([title, desc], i) => (
              <li key={i}>
                <span className="principle-num">{pad(i + 1)}</span>
                <strong>{title}</strong>
                <small>{desc}</small>
              </li>
            ))}
          </ol>
          <a className="text-link" href="#knowledge">{a.link} <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function Knowledge() {
  const { t } = useLang();
  const k = t.knowledge;
  return (
    <section className="section knowledge-section" id="knowledge">
      <div className="container">
        <SectionHeading kicker={k.kicker} title={<Title parts={k.title} />} desc={k.desc} split />
        <div className="topic-grid">
          {k.topics.map(([title, desc, tag], i) => {
            const Glyph = topicGlyphs[i];
            return (
              <article className="topic-card reveal" key={i}>
                <span className="topic-index" lang="en" aria-hidden="true">{pad(i + 1)}</span>
                <span className="topic-art"><Glyph /></span>
                <span className="category-label topic-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                {/* stretched link: the whole card is clickable */}
                <a className="topic-link" href="#podcasts" aria-label={`${title} — ${k.link}`}>
                  <span>{k.link}</span>
                  <span className="topic-link-icon"><ArrowUpRight size={16} aria-hidden="true" /></span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VerseBand() {
  const { t } = useLang();
  const v = t.verse;
  return (
    <section className="verse-band" aria-label={v.label}>
      <div className="container verse-inner reveal">
        <span className="verse-label">{v.label}</span>
        <blockquote>
          <p className="verse-sanskrit" lang="sa">
            उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।<br />
            आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥
          </p>
          <p className="verse-translation">{v.translation}</p>
        </blockquote>
        <cite className="verse-source">— {v.source}</cite>
      </div>
    </section>
  );
}

function PodcastCover({ label }) {
  return (
    <div className="podcast-cover" aria-hidden="true">
      <div className="cover-frame">
        <span className="cover-label">{label}</span>
        <span className="cover-number" lang="en">01</span>
        <div className="cover-center">
          <BrandMark size={112} className="cover-logo" />
          <span className="cover-title" lang="hi">संवाद</span>
          <span className="cover-series" lang="en">The Samvad Podcast</span>
        </div>
        <div className="cover-wave">
          {waveform.map((h, i) => <span key={i} style={{ height: `${h}px` }} />)}
        </div>
      </div>
    </div>
  );
}

function EpisodeGrid() {
  return (
    <div className="episode-grid">
      {episodes.map(({ youtubeId, title, topic }) => (
        <article className="episode-card" key={youtubeId}>
          <div className="episode-embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {topic && <span className="category-label">{topic}</span>}
          <h3>{title}</h3>
        </article>
      ))}
    </div>
  );
}

function Podcasts() {
  const { t } = useLang();
  const p = t.podcasts;
  const hasEpisodes = episodes.length > 0;

  return (
    <section className="section podcast-section" id="podcasts">
      <div className="container">
        <div className="section-topline">
          <SectionHeading kicker={p.kicker} title={<Title parts={p.title} />} desc={p.desc} />
          {!hasEpisodes && (
            <span className="coming-pill"><span className="pulse-dot" aria-hidden="true"></span> {p.pill}</span>
          )}
        </div>

        {hasEpisodes ? (
          <EpisodeGrid />
        ) : (
          <article className="podcast-feature reveal">
            <PodcastCover label={p.coverLabel} />
            <div className="podcast-feature-copy">
              <span className="category-label">{p.category}</span>
              <h3>{p.featureTitle}</h3>
              <p>{p.featureDesc}</p>
              <ul className="episode-meta">
                {p.meta.map((m) => <li key={m}>{m}</li>)}
              </ul>
              <div className="feature-actions">
                <a className="button button-primary" {...socialProps('youtube')}>
                  <YoutubeIcon width={18} height={18} /> {p.subscribe}
                </a>
                <a className="button button-outline" href="#contact">
                  {p.contactCta} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Format: three voices in every conversation */}
        <div className="format-block">
          <div className="block-head reveal">
            <div>
              <h3 className="block-title">{p.formatTitle}</h3>
              <p className="block-lead">{p.formatLead}</p>
            </div>
            <span className="block-note">{p.voicesNote}</span>
          </div>
          <ol className="role-grid">
            {p.roles.map(([title, sub, desc], i) => {
              const Icon = roleIcons[i];
              return (
                <li className="role-card reveal" key={i}>
                  <span className="role-icon"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className="role-num" lang="en">{pad(i + 1)}</span>
                  <strong className="role-title">{title}</strong>
                  {sub && <span className="role-sub" lang="en">{sub}</span>}
                  <p>{desc}</p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Upcoming themes — proposed only, not published episodes */}
        <div className="format-block">
          <div className="block-head reveal">
            <div>
              <h3 className="block-title">{p.upcomingTitle}</h3>
              <p className="block-lead">{p.upcomingLead}</p>
            </div>
          </div>
          <ul className="theme-grid">
            {p.themes.map(([theme, tag], i) => (
              <li className="theme-card reveal" key={i}>
                <div className="theme-top">
                  <span className="theme-num" lang="en">{pad(i + 1)}</span>
                  <span className="theme-topic">{tag}</span>
                </div>
                <span className="theme-label">{p.themeLabel}</span>
                <h4 className="theme-title">{theme}</h4>
                <div className="theme-foot">
                  <span className="theme-wave" aria-hidden="true">
                    {[8, 14, 6, 18, 10, 16, 7, 12].map((h, j) => <span key={j} style={{ height: `${h}px` }} />)}
                  </span>
                  <span className="theme-tag">{p.proposed}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {!hasEpisodes && (
          <p className="podcast-footnote">
            <Play size={14} aria-hidden="true" />
            <span>{p.footnote}</span>
          </p>
        )}
      </div>
    </section>
  );
}

function Approach() {
  const { t } = useLang();
  const a = t.approach;
  return (
    <section className="method-section" id="approach">
      <div className="container method-grid">
        <div>
          <SectionHeading kicker={a.kicker} title={<>{a.title[0]}<br /><em>{a.title[1]}</em></>} light />
          <p className="method-lead reveal">{a.lead}</p>
          <div className="source-layers reveal">
            <p>{a.layersIntro}</p>
            <ul>{a.layers.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <ol className="method-list reveal">
          {a.methods.map(([title, desc], i) => (
            <li key={i}>
              <span className="method-num" lang="en">{pad(i + 1)}</span>
              <p><strong>{title}</strong><small>{desc}</small></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Founder() {
  const { t } = useLang();
  const f = t.founder;
  return (
    <section className="section founder-section" id="founder">
      <div className="container founder-grid">
        <figure className="founder-portrait reveal">
          <span className="portrait-deco" aria-hidden="true"></span>
          <div className="portrait-frame">
            <img src={founderPhoto} alt={f.alt} width="800" height="800" loading="lazy" decoding="async" />
          </div>
          <span className="portrait-badge" aria-hidden="true"><Mic size={20} strokeWidth={1.6} /></span>

          {/* Name plate — always English (personal name + title), in both language modes */}
          <figcaption className="founder-plate" lang="en">
            <strong className="plate-name">{f.name}</strong>
            <span className="plate-role">{f.designation}</span>
          </figcaption>
        </figure>

        <div className="founder-copy reveal">
          <Eyebrow>{f.kicker}</Eyebrow>
          <h2>{f.title[0]}<br /><em>{f.title[1]}</em></h2>
          <p>{f.paragraphs[0]}</p>

          <blockquote className="founder-quote">
            <Quote size={22} aria-hidden="true" />
            <p>{f.pullQuote}</p>
          </blockquote>

          <p>{f.paragraphs[1]}</p>

          <ul className="founder-roles">
            {f.roles.map((r, i) => {
              const Icon = founderRoleIcons[i];
              return (
                <li key={r}>
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" /> {r}
                </li>
              );
            })}
          </ul>

          <div className="founder-foot">
            <div className="founder-sign">
              <span className="sign-name" lang="en">— {f.name}</span>
              <span className="sign-role">
                <span lang="en">{f.designation}</span>, <span lang="en">Bharatiya Gyan Samvad</span>
              </span>
            </div>
            <a className="button button-dark" href="#contact">
              {f.cta} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Channels() {
  const { t } = useLang();
  const c = t.channels;
  return (
    <section className="section channels-section" id="channels">
      <div className="container">
        <SectionHeading kicker={c.kicker} title={<Title parts={c.title} />} desc={c.desc} split />
        <div className="channel-grid">
          {socialMeta.map(({ key, label, Icon }) => {
            const [desc, cta] = c[key];
            const live = Boolean(SOCIAL_LINKS[key]);
            return (
              <a key={key} className={`channel-card channel-card--${key} reveal`} {...socialProps(key)}>
                <span className="channel-top">
                  <span className="channel-icon"><Icon width={26} height={26} /></span>
                  {!live && <span className="channel-soon">{c.soon}</span>}
                </span>
                <span className="channel-name" lang="en">{label}</span>
                <span className="channel-desc">{desc}</span>
                <span className="channel-cta">{cta} <ArrowUpRight size={16} aria-hidden="true" /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <Eyebrow tone="dark">{c.kicker}</Eyebrow>
            <h2><Title parts={[c.title[0], c.title[1], '']} /></h2>
            <p>{c.desc}</p>
            <ul className="contact-reasons">{c.reasons.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>

          <div className="contact-card">
            <a className="contact-row" href={mailHref()}>
              <span className="contact-row-icon"><Mail size={18} aria-hidden="true" /></span>
              <span>
                <small>{c.emailLabel}</small>
                <strong lang="en">{CONTACT_EMAIL}</strong>
              </span>
            </a>
            <a className="contact-row" href={whatsappHref(c.whatsappText)} {...external}>
              <span className="contact-row-icon contact-row-icon--wa"><WhatsappIcon width={18} height={18} /></span>
              <span>
                <small>{c.phoneLabel}</small>
                <strong lang="en">{PHONE_DISPLAY}</strong>
              </span>
            </a>
            <div className="contact-buttons">
              <a className="button button-light" href={mailHref()}>
                <Mail size={16} aria-hidden="true" /> {c.email}
              </a>
              <a className="button button-whatsapp" href={whatsappHref(c.whatsappText)} {...external}>
                <WhatsappIcon width={17} height={17} /> {c.whatsapp}
              </a>
            </div>
            <SocialIconLinks className="contact-social" size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      {/* Brand identity only — official brand accounts and contact, no personal social links */}
      <div className="footer-band">
        <div className="container footer-band-inner">
          <BrandMark size={150} className="footer-band-logo" />
          <p className="footer-band-title" lang="hi">{f.bandTitle}</p>
          <p className="footer-band-sub">{f.bandSub}</p>
          <span className="footer-ornament" aria-hidden="true"><span></span>✦<span></span></span>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-brand-col">
          <a className="brand footer-brand" href="#home" aria-label={t.brand.home}>
            <BrandLogo tone="dark" size={92} tagline={t.brand.tagline} english />
          </a>
          <p className="footer-about">{f.about}</p>
          <SocialIconLinks className="footer-social-row" size={17} />
        </div>

        <nav className="footer-col" aria-label={f.navLabel}>
          <span className="footer-heading">{f.explore}</span>
          <ul>{t.nav.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        </nav>

        <div className="footer-col">
          <span className="footer-heading">{f.topics}</span>
          <ul>{t.knowledge.topics.map(([title]) => <li key={title}><a href="#knowledge">{title}</a></li>)}</ul>
        </div>

        <div className="footer-col footer-contact">
          <span className="footer-heading">{f.connect}</span>
          <ul>
            <li>
              <a href={mailHref()}>
                <Mail size={16} aria-hidden="true" /> <span lang="en" className="footer-email">{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li>
              <a href={whatsappHref(t.contact.whatsappText)} {...external}>
                <WhatsappIcon width={16} height={16} /> <span lang="en">{PHONE_DISPLAY}</span>
              </a>
            </li>
            {socialMeta.map(({ key, label, Icon }) => (
              <li key={key}>
                <a {...socialProps(key)}><Icon width={16} height={16} /> <span lang="en">{label}</span></a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} <span lang="en">Bharatiya Gyan Samvad</span> · <span lang="hi">भारतीय ज्ञान संवाद</span>. {f.rights}
        </span>
        <a href="#home">{f.top} ↑</a>
      </div>
    </footer>
  );
}

// Always-visible WhatsApp chat button, bottom-right of the screen.
function WhatsappFloat() {
  const { t } = useLang();
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref(t.contact.whatsappText)}
      {...external}
      aria-label={t.contact.whatsapp}
      title={t.contact.whatsapp}
    >
      <WhatsappIcon width={32} height={32} />
      <span className="whatsapp-float-label">{t.contact.whatsapp}</span>
    </a>
  );
}

export default function App() {
  const { t, lang } = useLang();
  useReveal(lang);

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Knowledge />
        <VerseBand />
        <Podcasts />
        <Approach />
        <Founder />
        <Channels />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
