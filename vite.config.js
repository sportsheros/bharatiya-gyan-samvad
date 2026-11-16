
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function seoFiles(siteUrl) {
  const alternates = [
    `    <xhtml:link rel="alternate" hreflang="hi" href="${siteUrl}/"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/?lang=en"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/"/>`,
  ].join('\n');

  return {
    name: 'bgs-seo-files',
    apply: 'build',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const url = (loc) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
          `${url(`${siteUrl}/`)}\n${url(`${siteUrl}/?lang=en`)}\n` +
          '</urlset>\n',
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (
    env.VITE_SITE_URL || 'https://sportsheros.github.io/bharatiya-gyan-samvad'
  ).replace(/\/+$/, '');

  return {
    base: '/bharatiya-gyan-samvad/',
    plugins: [react(), seoFiles(siteUrl)],
  };
});
