import { useState, useEffect, useRef, useCallback } from 'react'
import { MapPin } from 'lucide-react'
import { campusSlides, schoolInfo } from '../data/aboutSchool'

const SWIPE_MIN_PX = 48

export default function AboutUs() {
  const [slideIndex, setSlideIndex] = useState(0)
  const pointerStartX = useRef(null)
  const isDragging = useRef(false)

  const goNext = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % campusSlides.length)
  }, [])

  const goPrev = useCallback(() => {
    setSlideIndex(
      (prev) => (prev - 1 + campusSlides.length) % campusSlides.length,
    )
  }, [])

  useEffect(() => {
    const id = setInterval(goNext, 6000)
    return () => clearInterval(id)
  }, [goNext])

  function finishSwipe(endX) {
    if (pointerStartX.current == null) return
    const dx = endX - pointerStartX.current
    pointerStartX.current = null
    isDragging.current = false
    if (dx < -SWIPE_MIN_PX) goNext()
    else if (dx > SWIPE_MIN_PX) goPrev()
  }

  function onPointerStart(clientX) {
    pointerStartX.current = clientX
    isDragging.current = true
  }

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#FFFFFF] py-16 font-['Montserrat',sans-serif] sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
            About Surya Public School
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-[1.5rem] font-black leading-[1.15] tracking-tight text-[#2C4C34] sm:text-4xl lg:text-[2.5rem]"
          >
            A place where ethics, curiosity, and character grow together
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <figure
            className="relative aspect-4/3 cursor-grab overflow-hidden rounded-2xl border border-[#D6A51A] bg-[#2C4C34]/5 active:cursor-grabbing select-none touch-pan-y"
            aria-roledescription="carousel"
            aria-label={`Campus photos, ${slideIndex + 1} of ${campusSlides.length}. Swipe or drag to change.`}
            onTouchStart={(e) => {
              onPointerStart(e.touches[0]?.clientX ?? 0)
            }}
            onTouchEnd={(e) => {
              finishSwipe(e.changedTouches[0]?.clientX ?? 0)
            }}
            onMouseDown={(e) => {
              e.preventDefault()
              onPointerStart(e.clientX)
            }}
            onMouseUp={(e) => {
              if (isDragging.current) finishSwipe(e.clientX)
            }}
            onMouseLeave={(e) => {
              if (isDragging.current) finishSwipe(e.clientX)
            }}
          >
            {campusSlides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={
                  i === slideIndex
                    ? `Surya Public School campus, photo ${i + 1} of ${campusSlides.length}`
                    : ''
                }
                aria-hidden={i !== slideIndex}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-out ${
                  i === slideIndex
                    ? 'z-10 opacity-100'
                    : 'z-0 pointer-events-none opacity-0'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            ))}
          </figure>

          <div className="text-[#2C4C34]">
            <p className="text-[15px] font-medium leading-[1.85] sm:text-base">
              {schoolInfo.about}
            </p>

            <blockquote className="mt-6">
              <p className="text-sm font-medium italic leading-relaxed text-[#2C4C34]/90 sm:text-[15px]">
                &ldquo;{schoolInfo.tagline}&rdquo;
              </p>
            </blockquote>

            <div className="mt-6 flex gap-3 border-l-2 border-[#D6A51A] pl-5">
              <MapPin
                className="mt-0.5 shrink-0 text-[#D6A51A]"
                size={18}
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-sm font-medium leading-relaxed sm:text-[15px]">
                {schoolInfo.address.line1}, {schoolInfo.address.line2} — PIN{' '}
                {schoolInfo.address.pin}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
