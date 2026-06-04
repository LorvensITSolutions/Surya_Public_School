import { galleryEvents } from './eventsGallery'
import { schoolInfo } from './aboutSchool'

/** Set VITE_SITE_URL in .env to your live domain (no trailing slash). */
export const SITE_URL_DEFAULT = 'https://suryapublicschool.in'

export function getSiteUrl() {
  const url =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
    SITE_URL_DEFAULT
  return String(url).replace(/\/$/, '')
}

export const SITE_NAME = schoolInfo.name

export const DEFAULT_DESCRIPTION =
  'Surya Public School, Aswaraopeta — value-based education since 2005. Spacious green campus, digital classrooms, admissions open. Call +91 9440614864.'

export const DEFAULT_KEYWORDS = [
  'Surya Public School',
  'school Aswaraopeta',
  'school Bhadradri Kothagudem',
  'Telangana school admissions',
  'best school Aswaraopeta',
  'holistic education Telangana',
].join(', ')

const locationLabel = `${schoolInfo.address.line1}, ${schoolInfo.address.line2}`

/** Static routes for sitemap and meta lookup */
export const staticRoutes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    title: `${SITE_NAME} | Admissions Open — Aswaraopeta, Telangana`,
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.9',
    title: `About Us | ${SITE_NAME} — Our Story & Founder`,
    description: `Learn about ${SITE_NAME}, established ${schoolInfo.established}. ${schoolInfo.tagline} ${locationLabel}.`,
  },
  {
    path: '/admissions',
    changefreq: 'weekly',
    priority: '0.95',
    title: `Admissions Open | ${SITE_NAME} — Join Our Family`,
    description: `Admissions open at ${SITE_NAME}, Aswaraopeta. Visit our 2-acre campus, meet teachers, and apply. Contact +91 ${schoolInfo.phones[0]}.`,
  },
  {
    path: '/events-gallery',
    changefreq: 'weekly',
    priority: '0.85',
    title: `Events & Gallery | ${SITE_NAME}`,
    description: `Campus events, celebrations, and activities at ${SITE_NAME} — Annual Day, festivals, field trips, and more.`,
  },
  {
    path: '/privacy-policy',
    changefreq: 'yearly',
    priority: '0.4',
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy Policy for ${SITE_NAME} website — how we collect, use, and protect your information.`,
  },
]

export function getEventPath(eventId) {
  return `/events-gallery/${encodeURIComponent(eventId)}`
}

export function getSitemapEntries(siteUrl = getSiteUrl()) {
  const today = new Date().toISOString().slice(0, 10)
  const entries = staticRoutes.map(({ path, changefreq, priority }) => ({
    loc: `${siteUrl}${path === '/' ? '' : path}`,
    lastmod: today,
    changefreq,
    priority,
  }))

  for (const event of galleryEvents) {
    entries.push({
      loc: `${siteUrl}${getEventPath(event.id)}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
    })
  }

  return entries
}

export function getPageMeta(pathname) {
  const staticMatch = staticRoutes.find((r) => r.path === pathname)
  if (staticMatch) {
    return {
      title: staticMatch.title,
      description: staticMatch.description,
      path: staticMatch.path,
    }
  }

  const eventMatch = pathname.match(/^\/events-gallery\/(.+)$/)
  if (eventMatch) {
    const rawId = decodeURIComponent(eventMatch[1])
    const event = galleryEvents.find((e) => e.id === rawId)
    if (event) {
      return {
        title: `${event.title} | ${SITE_NAME} Events`,
        description: event.summary,
        path: getEventPath(event.id),
      }
    }
  }

  return {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    path: pathname,
  }
}

export function getOrganizationJsonLd(siteUrl = getSiteUrl()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: SITE_NAME,
    description: schoolInfo.about,
    url: siteUrl,
    email: schoolInfo.email,
    telephone: schoolInfo.phones.map((p) => `+91-${p}`),
    foundingDate: String(schoolInfo.established),
    address: {
      '@type': 'PostalAddress',
      streetAddress: schoolInfo.address.line1,
      addressLocality: 'Aswaraopeta',
      addressRegion: 'Telangana',
      postalCode: schoolInfo.address.pin,
      addressCountry: 'IN',
    },
  }
}
