import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  getSiteUrl,
  getPageMeta,
  getOrganizationJsonLd,
  SITE_NAME,
  DEFAULT_KEYWORDS,
} from '../data/seo'

const OG_IMAGE =
  'https://res.cloudinary.com/dqiraozow/image/upload/v1779271541/Banner_2_x0oatm.png'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function PageSeo() {
  const { pathname } = useLocation()
  const siteUrl = getSiteUrl()
  const { title, description, path } = getPageMeta(pathname)
  const canonical = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

  useEffect(() => {
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', DEFAULT_KEYWORDS)
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta('name', 'robots', 'index, follow')

    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)

    upsertJsonLd('schema-school', getOrganizationJsonLd(siteUrl))
  }, [title, description, canonical, siteUrl])

  return null
}
