import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { galleryEvents } from '../src/data/eventsGallery.js'

const SITE_URL_DEFAULT = 'https://suryapublicschool.in'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const siteUrl = (process.env.VITE_SITE_URL || SITE_URL_DEFAULT).replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/admissions', changefreq: 'weekly', priority: '0.95' },
  { path: '/events-gallery', changefreq: 'weekly', priority: '0.85' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.4' },
]

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function urlEntry(loc, changefreq, priority) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const urls = [
  ...staticPages.map(({ path, changefreq, priority }) =>
    urlEntry(`${siteUrl}${path}`, changefreq, priority),
  ),
  ...galleryEvents.map((event) =>
    urlEntry(
      `${siteUrl}/events-gallery/${encodeURIComponent(event.id)}`,
      'monthly',
      '0.7',
    ),
  ),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

writeFileSync(join(publicDir, 'sitemap.xml'), xml, 'utf8')
console.log(`Sitemap written (${urls.length} URLs) → public/sitemap.xml`)
