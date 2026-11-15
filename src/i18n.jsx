import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content } from './content.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'bgs-lang';
const SUPPORTED = ['hi', 'en'];
const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/+$/, '');

// Priority: ?lang= in the URL (shareable / crawlable) → saved choice → Hindi (brand default).
function getInitialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* storage can be unavailable (private mode) — fall through */
  }
  return 'hi';
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const t = content[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', lang === 'hi' ? 'hi_IN' : 'en_IN');

    // Each language version is its own canonical page (hreflang pairs them up).
    if (SITE_URL) {
      const pageUrl = lang === 'en' ? `${SITE_URL}/?lang=en` : `${SITE_URL}/`;
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
      setMeta('meta[property="og:url"]', pageUrl);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }

    // Keep the URL in sync so the English version has its own shareable address.
    const url = new URL(window.location.href);
    if (lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.history.replaceState(window.history.state, '', url);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
