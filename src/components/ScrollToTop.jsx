import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHash(hash) {
  const id = hash.replace(/^#/, '')
  if (!id) return false
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ block: 'start' })
  return true
}

/**
 * Scrolls to top on route change, or to the target section when the URL has a hash.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    if (scrollToHash(hash)) return

    const t = window.setTimeout(() => scrollToHash(hash), 0)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}
