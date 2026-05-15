import { useState, useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Bus } from 'lucide-react'

const campusSlides = [
  'https://res.cloudinary.com/dqiraozow/image/upload/f_auto,q_auto/v1778675481/IMG_0851_kylryl.heic',
  'https://res.cloudinary.com/dqiraozow/image/upload/f_auto,q_auto/v1778668445/image2_fzkfu9.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778737807/IMG_0835.jpg_akpl5c.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778738181/IMG_0839.jpg_nqgs7j.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778738181/IMG_0837.jpg_usocvb.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778738181/IMG_0838.jpg_jhqvhm.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778738182/IMG_0840.jpg_j7vgmj.jpg',
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778738182/IMG_0841.jpg_yhjnze.jpg',
  
]

const highlights = [
  {
    icon: GraduationCap,
    label: 'Established',
    value: '2005',
  },
  {
    icon: MapPin,
    label: 'Campus',
    value: '2-acre green',
  },
  {
    icon: Bus,
    label: 'Transport',
    value: 'Safe routes',
  },
]

const SWIPE_MIN_PX = 48

function NavWave() {
  return (
    <div className="relative -mt-px h-5 w-full overflow-hidden leading-0 sm:h-6">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block h-full w-full fill-[#2C4C34]"
        aria-hidden
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  )
}

export default function AboutUs() {
  const [slideIndex, setSlideIndex] = useState(0)
  const touchStartX = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % campusSlides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  function goNext() {
    setSlideIndex((prev) => (prev + 1) % campusSlides.length)
  }

  function goPrev() {
    setSlideIndex(
      (prev) => (prev - 1 + campusSlides.length) % campusSlides.length,
    )
  }

  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden bg-[#FFFFFF] pb-16 pt-10 font-['Montserrat',sans-serif] sm:pb-20 lg:pb-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1320px] px-4 pt-0 sm:px-6">
        {/* Intro — nav-like typography */}
        <div className="mx-auto max-w-4xl pt-3 text-center sm:pt-4">
          <p className="text-xs font-bold tracking-[0.25em] text-[#D6A51A] uppercase">
            About Surya Public School
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-[#2C4C34] sm:text-3xl lg:text-4xl"
          >
            A place where ethics, curiosity, and character grow together
          </h2>
        </div>

        {/* Highlights — match bottom nav: border-b-2 gold, shadow-sm */}
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-4 border-b-2 border-[#D6A51A] bg-[#FFFFFF] px-5 py-4 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2C4C34] text-[#D6A51A]">
                <Icon size={22} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wide text-[#D6A51A] uppercase">
                  {label}
                </p>
                <p className="text-[15px] font-bold text-[#2C4C34]">{value}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Campus + Our school — same stack as navbar: green bar → wave → white row */}
        <div className="mt-16 overflow-hidden rounded-2xl border-2 border-[#2C4C34] lg:mt-20">
          <div className="bg-[#2C4C34] px-4 py-2.5 text-[#FFFFFF] sm:px-6 sm:py-3">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 text-[13px] font-semibold sm:text-[14px]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#D6A51A]" aria-hidden />
                <span className="font-bold uppercase tracking-wide text-[#D6A51A]">
                  Our campus
                </span>
              </div>
              <span className="hidden text-[#FFFFFF] sm:inline">
                Serene learning environment &amp; modern facilities
              </span>
            </div>
          </div>
          <NavWave />

          <div className="border-b-2 border-[#D6A51A] bg-[#FFFFFF] px-4 py-6 shadow-sm sm:px-6 sm:py-8 lg:py-10">
            <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <figure
                className="relative aspect-4/3 overflow-hidden rounded-lg border-2 border-[#D6A51A] bg-[#2C4C34] sm:aspect-16/10 lg:aspect-auto lg:max-h-[min(520px,55vh)] lg:min-h-[320px]"
                aria-roledescription="carousel"
                aria-label="Campus photos"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0]?.clientX ?? null
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current == null) return
                  const endX = e.changedTouches[0]?.clientX
                  if (endX == null) return
                  const dx = endX - touchStartX.current
                  touchStartX.current = null
                  if (dx < -SWIPE_MIN_PX) goNext()
                  else if (dx > SWIPE_MIN_PX) goPrev()
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
                    className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-out ${
                      i === slideIndex
                        ? 'z-10 opacity-100'
                        : 'z-0 opacity-0 pointer-events-none'
                    }`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                ))}

             

                <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-1.5 px-3">
                  {campusSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show campus photo ${i + 1}`}
                      aria-current={i === slideIndex ? 'true' : undefined}
                      onClick={() => setSlideIndex(i)}
                      className="flex h-9 w-9 items-center justify-center sm:h-8 sm:w-8"
                    >
                      <span
                        className={`block rounded-full border-2 border-[#D6A51A] transition ${
                          i === slideIndex
                            ? 'h-2 w-7 bg-[#D6A51A]'
                            : 'h-2 w-2 bg-[#FFFFFF]/90'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </figure>

              <div className="text-[#2C4C34]">
                <p className="text-[14px] font-bold uppercase tracking-wide text-[#D6A51A] xl:text-[15px]">
                  Our school
                </p>
                <p className="mt-4 text-[14px] font-bold leading-relaxed sm:text-[15px] xl:text-[16px]">
                  Surya Public School, Aswaraopeta, is spread across a serene
                  2-acre green campus with spacious classrooms, digital
                  classrooms, large playgrounds, and a peaceful learning
                  environment surrounded by trees. With safe transport
                  facilities connecting nearby villages, the school provides
                  students with a comfortable, vibrant, and student-friendly
                  atmosphere for holistic growth and learning.
                </p>
                <p className="mt-5 text-sm font-semibold italic leading-relaxed text-[#2C4C34] sm:text-base lg:text-lg">
                  &quot;Inspiring ethics, igniting curiosity, shaping
                  well-rounded individuals.&quot;
                </p>
                <div className="mt-6 flex gap-3 border-l-2 border-[#D6A51A] pl-6">
                  <MapPin
                    className="mt-0.5 shrink-0 text-[#D6A51A]"
                    size={16}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <p className="text-[13px] font-semibold leading-relaxed sm:text-[14px]">
                    Gurrala Cheruvu Road, Aswaraopeta, Bhadradri Kothagudem
                    District, Telangana — PIN 507301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
