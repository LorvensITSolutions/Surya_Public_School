import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, GraduationCap } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { EmailLink, PhoneLink } from '../components/ContactLinks'
import { schoolInfo } from '../data/aboutSchool'
import { admissionsContent, admissionsSteps } from '../data/admissions'

const primaryPhone = schoolInfo.phones[0]

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-['Montserrat',sans-serif] text-[#2C4C34]">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#FFFFFF] py-8 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="order-1"
              >
                <p className="text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
                  {admissionsContent.eyebrow}
                </p>
                <h1 className="mt-3 text-[1.65rem] font-black leading-[1.15] text-[#2C4C34] sm:mt-4 sm:text-4xl lg:text-[2.5rem]">
                  {admissionsContent.title}
                </h1>
                <p className="mt-5 max-w-xl text-[15px] font-medium leading-[1.75] text-[#2C4C34]/90 sm:mt-6 sm:text-[17px]">
                  {admissionsContent.pageIntro}
                </p>

                <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-md sm:flex-row lg:max-w-none">
                  <PhoneLink phone={primaryPhone} variant="heroPrimary" />
                  <EmailLink email={schoolInfo.email} variant="heroSecondary" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
                className="order-2 overflow-hidden rounded-2xl border border-[#D6A51A] shadow-md"
              >
                <img
                  src={admissionsContent.heroImage}
                  alt="Surya Public School campus"
                  className="aspect-4/3 w-full object-cover object-center lg:aspect-[5/4]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section
          className="bg-[#F7F6F2] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
          aria-labelledby="admissions-steps-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2
                id="admissions-steps-heading"
                className="text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase"
              >
                How to apply
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2C4C34]/85">
                {admissionsContent.intro}
              </p>
            </motion.div>

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
              {admissionsSteps.map(({ step, icon: Icon, title, description }, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <article className="flex h-full flex-col rounded-2xl border-2 border-[#D6A51A] bg-[#FFFFFF] px-4 pb-8 pt-4 text-center shadow-sm">
                    <span className="mx-auto flex h-8 w-8 items-center justify-center text-[#D6A51A]">
                      <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className="mt-3 text-xs font-bold tracking-wide text-[#D6A51A]">
                      Step {step}
                    </p>
                    <h3 className="mt-2 text-lg font-black text-[#2C4C34] sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#2C4C34]/75 sm:text-[15px]">
                      {description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Documents & info */}
        <section className="border-t border-[#2C4C34]/10 bg-[#FFFFFF] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="text-xs font-bold tracking-[0.22em] text-[#D6A51A] uppercase">
                {admissionsContent.documentsTitle}
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2C4C34]/85">
                {admissionsContent.documentsIntro}
              </p>
              <ul className="mt-6 space-y-3">
                {admissionsContent.documents.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-medium leading-relaxed text-[#2C4C34] sm:text-[15px]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A51A]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-2xl bg-[#F7F6F2] p-6 sm:p-8">
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#D6A51A]" aria-hidden />
                  <div>
                    <h3 className="text-sm font-black text-[#2C4C34]">
                      {admissionsContent.officeHours.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#2C4C34]/85">
                      {admissionsContent.officeHours.schedule}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#2C4C34]/70">
                      {admissionsContent.officeHours.note}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#2C4C34]/5 p-6 sm:p-8">
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 shrink-0 text-[#D6A51A]" aria-hidden />
                  <div>
                    <h3 className="text-sm font-black text-[#2C4C34]">
                      {admissionsContent.grades.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#2C4C34]/85">
                      {admissionsContent.grades.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 border-l-2 border-[#D6A51A] pl-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D6A51A]" aria-hidden />
                <p className="text-sm font-medium leading-relaxed sm:text-[15px]">
                  {schoolInfo.address.line1}, {schoolInfo.address.line2} — PIN{' '}
                  {schoolInfo.address.pin}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F6F2] px-4 py-14 sm:px-6 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-black text-[#2C4C34] sm:text-3xl">
              Ready to visit our campus?
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-[#2C4C34]/85">
              Speak with our team today or explore more about life at Surya Public
              School.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PhoneLink phone={primaryPhone} variant="primary" />
              <Link
                to="/about"
                className="inline-flex w-full min-w-[220px] items-center justify-center gap-2 rounded-xl bg-[#D6A51A] px-6 py-3.5 text-sm font-extrabold text-[#2C4C34] transition hover:opacity-90 sm:w-auto"
              >
                About our school
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
