import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {  schoolInfo, aboutslides } from '../data/aboutSchool'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFFFF] font-['Montserrat',sans-serif] text-[#2C4C34]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#FFFFFF] py-10 sm:py-12 ">
          <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-4 lg:grid-cols-2 lg:items-center lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2C4C34]/5 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#2C4C34]/40" aria-hidden />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#2C4C34] uppercase">
                  Our story
                </span>
              </span>

              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-[#2C4C34] sm:text-5xl">
                {schoolInfo.name}
              </h1>

              <p className="mt-6 max-w-xl text-base font-semibold leading-[1.7] text-[#2C4C34] sm:text-[17px]">
                {schoolInfo.about}
              </p>

              <blockquote className="mt-6 pl-1">
                <p className="text-lg font-semibold italic leading-relaxed text-[#2C4C34]/85 sm:text-xl">
                  &ldquo;{schoolInfo.tagline}&rdquo;
                </p>
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#founder"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#2C4C34] px-5 py-3 text-sm font-bold text-[#2C4C34] transition hover:bg-[#2C4C34]/5"
                >
                  Meet our founder
                </a>
                <Link
                  to="/events-gallery"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D6A51A] px-5 py-3 text-sm font-extrabold text-[#2C4C34] transition hover:opacity-90"
                >
                  Events &amp; gallery
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 lg:gap-5"
            >
              <img
                src={aboutslides[0]}
                alt=""
                className="h-[200px] w-full rounded-2xl object-cover shadow-md sm:h-[220px] lg:h-[240px]"
              />
              <img
                src={aboutslides[1]}
                alt=""
                className="mt-8 h-[200px] w-full rounded-2xl object-cover shadow-md sm:h-[220px] lg:mt-10 lg:h-[240px]"
              />
              <img
                src={aboutslides[2]}
                alt=""
                className="-mt-2 h-[200px] w-full rounded-2xl object-cover shadow-md sm:h-[220px] lg:h-[240px]"
              />
              <div className="flex min-h-[200px] flex-col justify-center rounded-2xl bg-[#2C4C34]/5 p-6 text-[#2C4C34] shadow-sm sm:min-h-[220px] lg:min-h-[240px]">
                <p className="text-[11px] font-bold tracking-[0.16em] text-[#2C4C34]/60 uppercase">
                  Established
                </p>
                <p className="mt-3 text-4xl font-black sm:text-5xl">
                  {schoolInfo.established}
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-[#2C4C34]/80">
                  Value-based education for holistic growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section
          className="bg-[#F7F6F2] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
          aria-labelledby="mission-vision-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h2
              id="mission-vision-heading"
              className="text-base font-bold tracking-[0.22em] text-[#D6A51A] uppercase"
            >
              Mission &amp; vision
            </h2>
            <p className="mt-6 text-base font-medium leading-[1.85] text-[#2C4C34] sm:text-[20px]">
              {schoolInfo.missionVision}
            </p>
          </motion.div>
        </section>

        {/* FOUNDER — image | content */}
        <section
          id="founder"
          className="scroll-mt-24 border-t border-[#2C4C34]/10 bg-[#FFFFFF] py-14 sm:py-16 lg:py-20"
        >
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-[#2C4C34]/5 shadow-lg"
            >
              <img
                src={schoolInfo.founder.image}
                alt={schoolInfo.founder.name}
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4] lg:min-h-[420px] lg:aspect-auto lg:h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#2C4C34]"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#2C4C34]/60 uppercase">
                Founder &amp; correspondent
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                {schoolInfo.founder.name}
              </h2>

              <p className="mt-2 text-sm font-bold tracking-wide text-[#2C4C34]/70">
                {schoolInfo.founder.role}
              </p>

              <p className="mt-6 text-base font-semibold leading-[1.8] text-[#2C4C34] sm:text-[17px]">
                {schoolInfo.founder.bio}
              </p>

              <p className="mt-6 text-base font-semibold italic leading-relaxed text-[#2C4C34]/85">
                &ldquo;{schoolInfo.tagline}&rdquo;
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
