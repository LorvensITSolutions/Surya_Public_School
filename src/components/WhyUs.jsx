import {
  Leaf,
  Monitor,
  Trophy,
  Bus,
  BookOpenCheck,
  Shield,
} from 'lucide-react'

const whyUsBackgroundImage =
  'https://res.cloudinary.com/dqiraozow/image/upload/f_auto,q_auto/v1778675481/IMG_0851_kylryl.heic'

const reasons = [
  {
    icon: Leaf,
    title: 'Green 2-acre campus',
    text: 'A serene campus with trees, spacious classrooms, and room to learn and play every day.',
  },
  {
    icon: Monitor,
    title: 'Digital & modern classrooms',
    text: 'Digital classrooms support engaging, student-friendly learning alongside traditional strengths.',
  },
  {
    icon: Trophy,
    title: 'Playgrounds & holistic growth',
    text: 'Large playgrounds and a peaceful atmosphere support physical activity and balanced development.',
  },
  {
    icon: Bus,
    title: 'Safe transport',
    text: 'Reliable transport connects nearby villages so more families can access quality education safely.',
  },
  {
    icon: BookOpenCheck,
    title: 'Activity-based & experiential learning',
    text: 'Lessons go beyond textbooks with hands-on, experiential methods that build understanding.',
  },
  {
    icon: Shield,
    title: 'Values & leadership',
    text: 'We focus on ethics, discipline, and leadership so students grow into responsible individuals.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 overflow-hidden bg-[#2C4C34] font-['Montserrat',sans-serif]"
      aria-labelledby="why-us-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={whyUsBackgroundImage}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[#2C4C34]/58"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-[#D6A51A] uppercase">
            Why choose us
          </p>
          <h2
            id="why-us-heading"
            className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-[#FFFFFF] sm:text-3xl lg:text-4xl"
          >
            What sets Surya Public School apart
          </h2>
          <p className="mt-5 text-sm font-semibold italic leading-relaxed text-[#FFFFFF] sm:text-base lg:text-lg">
            Our approach combines a joyful environment with structured academics
            and strong values — so every child can thrive with confidence and
            curiosity.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group flex gap-4 rounded-lg border-2 border-[#D6A51A] bg-[#FFFFFF]/60 px-5 py-5 shadow-sm transition hover:border-[#2C4C34] sm:flex-col sm:gap-0 sm:px-6 sm:py-6 lg:flex-col lg:gap-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2C4C34] text-[#D6A51A] transition group-hover:bg-[#D6A51A] group-hover:text-[#2C4C34]">
                <Icon size={22} strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0 sm:mt-4 lg:mt-5">
                <h3 className="text-[15px] font-bold leading-snug text-[#2C4C34] sm:text-base">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] font-semibold leading-relaxed text-[#2C4C34] sm:text-sm">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
