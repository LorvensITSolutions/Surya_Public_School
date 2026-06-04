import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  privacyPolicyMeta,
  privacyPolicySections,
  getPrivacyContactLines,
} from '../data/privacyPolicy'

const contact = getPrivacyContactLines()

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Montserrat',sans-serif] text-[#2C4C34]">
      <Navbar />

      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2C4C34] transition hover:text-[#D6A51A]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to home
            </Link>

            <p className="mt-6 text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-[#2C4C34] sm:text-4xl">
              {privacyPolicyMeta.title}
            </h1>
            <p className="mt-4 text-sm font-medium text-[#2C4C34]/75">
              Last updated: {privacyPolicyMeta.lastUpdated} · Effective:{' '}
              {privacyPolicyMeta.effectiveDate}
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-10 space-y-10"
          >
            {privacyPolicySections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl font-black text-[#2C4C34] sm:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="mt-4 text-base font-medium leading-[1.85] text-[#2C4C34]/90"
                  >
                    {text}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base font-medium leading-[1.85] text-[#2C4C34]/90">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <address className="mt-4 space-y-2 not-italic text-base font-medium leading-relaxed text-[#2C4C34]/90">
                    <p className="font-bold text-[#2C4C34]">{contact.name}</p>
                    <p>{contact.address}</p>
                    {contact.phones.map((phone) => (
                      <p key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-[#2C4C34] underline-offset-2 hover:text-[#D6A51A] hover:underline"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#2C4C34] underline-offset-2 hover:text-[#D6A51A] hover:underline"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </address>
                )}
              </section>
            ))}
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
