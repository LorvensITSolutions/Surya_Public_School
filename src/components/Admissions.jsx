import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { schoolInfo } from '../data/aboutSchool'
import { admissionsContent, admissionsSteps } from '../data/admissions'
import { EmailLink, PhoneLink } from './ContactLinks'

const primaryPhone = schoolInfo.phones[0]

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="scroll-mt-20 bg-[#F7F6F2] py-16 font-['Montserrat',sans-serif] sm:py-20 lg:py-24"
      aria-labelledby="admissions-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="text-center text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
          {admissionsContent.eyebrow}
        </p>
        <h2
          id="admissions-heading"
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-black leading-tight text-[#2C4C34] sm:text-3xl lg:text-[2rem]"
        >
          {admissionsContent.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-relaxed text-[#2C4C34]/85 sm:text-[17px]">
          {admissionsContent.intro}
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {admissionsSteps.map(({ step, icon: Icon, title, description }) => (
            <li key={step} className="relative">
              <article className="flex h-full flex-col rounded-2xl border-2 border-[#D6A51A] bg-[#FFFFFF] px-4 pb-8 pt-4 text-center shadow-sm">
                <span className="mx-auto flex h-8 w-8 items-center justify-center text-[#D6A51A]">
                  <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-black text-[#2C4C34] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#2C4C34]/75 sm:text-[15px]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 flex w-full max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4 lg:mt-14 lg:max-w-none">
          <PhoneLink
            phone={primaryPhone}
            variant="primary"
            className="w-full justify-center sm:w-auto"
          />
          <EmailLink
            email={schoolInfo.email}
            variant="secondary"
            className="w-full justify-center sm:w-auto"
          />
        </div>

        <p className="mt-8 text-center">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2C4C34] transition hover:text-[#D6A51A]"
          >
            View full admissions guide
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  )
}
