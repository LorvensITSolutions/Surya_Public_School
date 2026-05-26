import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { schoolInfo } from '../data/aboutSchool'
import { EmailLink, PhoneLink } from './ContactLinks'

const LOGO_SRC =
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778906999/Gemini_Generated_Image_xgfq3sxgfq3sxgfq-removebg-preview_1_ihfeim.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/events-gallery', label: 'Events & gallery' },
  { to: '/admissions', label: 'Admissions' },
]

const year = new Date().getFullYear()

function FooterHeading({ children }) {
  return (
    <p className="text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t-2 border-[#D6A51A] bg-[#2C4C34] font-['Montserrat',sans-serif] text-[#FFFFFF]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span id="footer-heading" className="sr-only">
              {schoolInfo.name}
            </span>
            <Link
              to="/"
              className="inline-flex rounded-2xl bg-[#FFFFFF] px-2 py-2 shadow-md transition hover:opacity-95"
              aria-label={`${schoolInfo.name} — home`}
            >
              <img
                src={LOGO_SRC}
                alt={schoolInfo.name}
                className="h-14 w-auto max-w-[150px] object-contain object-left sm:h-16"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed text-[#FFFFFF]/85">
              {schoolInfo.tagline}
            </p>
            <p className="mt-5 inline-flex rounded-full bg-[#D6A51A]/15 px-4 py-1.5 text-xs font-bold tracking-wide text-[#D6A51A]">
              Established {schoolInfo.established}
            </p>
          </div>

          {/* Quick links */}
          <nav
            className="lg:col-span-3 lg:pl-4"
            aria-label="Footer quick links"
          >
            <FooterHeading>Quick links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#FFFFFF]/90 transition hover:text-[#D6A51A]"
                  >
                    <span
                      className="h-1 w-1 rounded-full bg-[#D6A51A] opacity-0 transition group-hover:opacity-100"
                      aria-hidden
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div
            id="contact-us"
            className="scroll-mt-24 md:col-span-2 lg:col-span-4"
          >
            <FooterHeading>Contact us</FooterHeading>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-3 border-l-2 border-[#D6A51A] pl-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D6A51A]"
                  aria-hidden
                />
                <address className="not-italic text-sm font-medium leading-relaxed text-[#FFFFFF]/90">
                  {schoolInfo.address.line1}
                  <br />
                  {schoolInfo.address.line2}
                  <br />
                  PIN {schoolInfo.address.pin}
                </address>
              </li>
              <li className="space-y-2.5">
                {schoolInfo.phones.map((num) => (
                  <PhoneLink
                    key={num}
                    phone={num}
                    variant="footer"
                    size="sm"
                    className="w-full max-w-full justify-start"
                  />
                ))}
              </li>
              <li>
                <EmailLink
                  email={schoolInfo.email}
                  variant="footer"
                  size="sm"
                  className="w-full max-w-full justify-start"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#FFFFFF]/12 pt-8 sm:flex-row">
          <p className="text-center text-xs font-medium text-[#FFFFFF]/60 sm:text-left">
            © {year} {schoolInfo.name}. All rights reserved.
          </p>
          <p className="text-center text-xs font-semibold text-[#D6A51A]/90">
            Aswaraopeta · Telangana
          </p>
        </div>
      </div>
    </footer>
  )
}
