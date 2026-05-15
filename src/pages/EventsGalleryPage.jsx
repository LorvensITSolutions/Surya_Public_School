import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Droplet,
  Globe,
  HardHat,
  Heart,
  ImageIcon,
  Landmark,
  Leaf,
  MessageCircle,
  Music,
  Quote,
  Share2,
  Sparkles,
  Users,
  Utensils,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { getEventById, galleryEvents } from '../data/eventsGallery'

const DRAG_THRESHOLD_PX = 56

const learnIcons = {
  utensils: Utensils,
  droplet: Droplet,
  leaf: Leaf,
  users: Users,
  music: Music,
  sparkles: Sparkles,
  heart: Heart,
  globe: Globe,
  message: MessageCircle,
  landmark: Landmark,
  'hard-hat': HardHat,
}

function LearnIcon({ name }) {
  const Icon = learnIcons[name] ?? Sparkles
  return <Icon className="h-4 w-4 text-[#2C4C34]" aria-hidden />
}

function EventGalleryDetail({ event }) {
  const [slide, setSlide] = useState(0)
  const dragStartX = useRef(null)
  const galleryRef = useRef(null)
  const imgs = event.images

  const goNext = useCallback(() => {
    setSlide((s) => (s + 1) % imgs.length)
  }, [imgs.length])

  const goPrev = useCallback(() => {
    setSlide((s) => (s - 1 + imgs.length) % imgs.length)
  }, [imgs.length])

  useEffect(() => {
    if (imgs.length <= 1) return
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % imgs.length)
    }, 5000)
    return () => clearInterval(t)
  }, [event.id, imgs.length])

  function onPointerDown(e) {
    if (imgs.length <= 1) return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragStartX.current = e.clientX
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
  }

  function onPointerUp(e) {
    if (imgs.length <= 1 || dragStartX.current == null) {
      dragStartX.current = null
      return
    }
    const dx = e.clientX - dragStartX.current
    dragStartX.current = null
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
    if (dx < -DRAG_THRESHOLD_PX) goNext()
    else if (dx > DRAG_THRESHOLD_PX) goPrev()
  }

  function onPointerCancel() {
    dragStartX.current = null
  }

  function scrollToGallery() {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  async function handleShare() {
    const url = window.location.href
    const payload = { title: event.title, text: event.summary, url }
    try {
      if (navigator.share) {
        await navigator.share(payload)
      } else {
        await navigator.clipboard.writeText(url)
      }
    } catch {
      /* user cancelled or unsupported */
    }
  }

  return (
    <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-6 text-sm font-medium text-[#2C4C34]/60">
          <Link to="/" className="hover:text-[#2C4C34]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/events-gallery" className="hover:text-[#2C4C34]">
            Events &amp; gallery
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#2C4C34]">{event.title}</span>
        </nav>

        <div className="mt-8 grid gap-10 border-b border-[#2C4C34]/10 pb-12 lg:grid-cols-2 lg:items-center lg:gap-x-14 lg:gap-y-10 lg:pb-14">
          <div className="flex min-w-0 flex-col items-start text-left">
            <span className="mb-4 inline-block rounded-full bg-[#2C4C34]/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[#2C4C34] uppercase">
              {event.category}
            </span>
            <h1 className="max-w-[34rem] text-3xl font-black leading-[1.12] tracking-tight text-[#2C4C34] sm:text-4xl lg:text-[2.75rem]">
              {event.title}
            </h1>
            <div className="mt-6 flex w-full max-w-[34rem] flex-col gap-5 text-left text-base leading-[1.75] sm:text-[17px]">
              <p className="font-semibold text-[#2C4C34]">{event.summary}</p>
              {event.description.map((p, idx) => (
                <p key={idx} className="text-[#2C4C34]/60">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div
            id="event-gallery"
            ref={galleryRef}
            className="min-w-0 w-full lg:justify-self-end"
          >
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={`Photos for ${event.title}`}
              className={`relative aspect-4/3 w-full select-none overflow-hidden rounded-3xl sm:aspect-16/10 ${
                imgs.length > 1
                  ? 'cursor-grab touch-pan-x active:cursor-grabbing'
                  : ''
              }`}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              {imgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={i === slide ? `${event.title} — photo ${i + 1}` : ''}
                  aria-hidden={i !== slide}
                  className={`pointer-events-none absolute inset-0 h-full w-full rounded-3xl object-cover object-center transition-opacity duration-300 ease-out ${
                    i === slide ? 'z-10 opacity-100' : 'z-0 opacity-0'
                  }`}
                  draggable={false}
                />
              ))}

              {imgs.length > 1 && (
                <>
                  <div
                    className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-[#2C4C34]/75 px-2.5 py-1 text-xs font-bold tabular-nums text-[#FFFFFF]"
                    aria-live="polite"
                  >
                    {slide + 1}/{imgs.length}
                  </div>
                  <div className="pointer-events-auto absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                    {imgs.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show photo ${i + 1}`}
                        aria-current={i === slide ? 'true' : undefined}
                        onClick={() => setSlide(i)}
                        className={`h-2 w-2 rounded-full transition ${
                          i === slide
                            ? 'bg-[#FFFFFF] scale-110'
                            : 'bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      

        <div className="mt-12 grid gap-10 border-b border-[#2C4C34]/10 pb-12 lg:grid-cols-2 lg:gap-14 lg:pb-14">
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.18em] text-[#2C4C34] uppercase">
              What students learn
            </h2>
            <ul className="mt-6 space-y-6">
              {event.learnItems?.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2C4C34]/10">
                    <LearnIcon name={item.icon} />
                  </span>
                  <div>
                    <p className="font-bold text-[#2C4C34]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#2C4C34]/75">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.18em] text-[#2C4C34] uppercase">
              Activity outcome
            </h2>
            <blockquote className="relative mt-6 rounded-2xl bg-[#2C4C34]/8 px-6 py-7 sm:px-8 sm:py-8">
              <Quote
                className="mb-3 h-6 w-6 text-[#2C4C34]/35"
                aria-hidden
              />
              <p className="text-base leading-relaxed font-medium text-[#2C4C34] sm:text-[17px]">
                {event.outcome}
              </p>
            </blockquote>
          </section>
        </div>

       

        <section className="mt-16 lg:mt-20">
          <div className="text-center">
            <h2 className="text-xl font-black uppercase tracking-[0.12em] text-[#2C4C34] sm:text-2xl">
              More events
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm font-semibold text-[#2C4C34]/80">
              Tap an event to open its gallery and story.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryEvents
              .filter((e) => e.id !== event.id)
              .map((e) => (
                <li key={e.id}>
                  <Link
                    to={`/events-gallery/${e.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(44,76,52,0.3)]"
                  >
                    <div className="relative aspect-4/3 overflow-hidden rounded-t-2xl bg-[#2C4C34]">
                      <img
                        src={e.coverImage}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#2C4C34]/85 via-transparent to-transparent opacity-90" />
                      <span className="absolute bottom-3 left-3 rounded-md bg-[#D6A51A] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#2C4C34] uppercase">
                        {e.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col border-t-2 border-[#D6A51A] px-4 py-4">
                      <h3 className="text-base font-black leading-snug text-[#2C4C34] transition-colors group-hover:text-[#D6A51A] sm:text-lg">
                        {e.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs font-semibold leading-relaxed text-[#2C4C34]/85 sm:text-sm">
                        {e.summary}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-[#2C4C34]">
                        Open event
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default function EventsGalleryPage() {
  const { eventId } = useParams()
  const event = getEventById(eventId ?? '')

  if (!event) {
    return (
      <div className="flex min-h-svh flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif]">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-lg font-bold text-[#2C4C34]">Event not found.</p>
          <Link
            to="/events-gallery"
            className="mt-6 rounded-lg bg-[#D6A51A] px-6 py-3 text-sm font-extrabold text-[#2C4C34]"
          >
            All events &amp; gallery
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      <Navbar />
      <EventGalleryDetail key={event.id} event={event} />
    </div>
  )
}
