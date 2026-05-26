import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, ArrowRight } from 'lucide-react'
import { galleryEvents } from '../data/eventsGallery'

export default function EventsCelebrations() {
  return (
    <section
      id="events-celebrations"
      className="overflow-hidden bg-white py-24 font-['Montserrat'] lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#D6A51A] uppercase"
            >
               Campus Highlights
            </motion.div>
            <h2 className="text-4xl font-black text-[#2C4C34] md:text-5xl">
              Moments that <span className="text-[#D6A51A]">inspire</span> <br />{' '}
              our community.
            </h2>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: 'tween', duration: 0.15 }}
          >
            <Link
              to="/events-gallery"
              className="flex items-center gap-2 border-b-2 border-[#D6A51A] pb-2 text-sm font-bold text-[#2C4C34]"
            >
              View More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: i * 0.04 }}
              viewport={{ once: true, margin: '-20px' }}
              className={`min-h-0 ${
                event.featured ? 'md:row-span-2' : 'row-span-1'
              }`}
            >
              <Link
                to={`/events-gallery/${event.id}`}
                className={`group relative block h-full min-h-[300px] overflow-hidden rounded-xl ${
                  event.featured ? 'md:min-h-[calc(300px*2+1.5rem)]' : ''
                }`}
              >
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#2C4C34] via-[#2C4C34]/20 to-transparent opacity-60 transition-opacity duration-200 ease-out group-hover:opacity-80" />

                <div className="absolute inset-0 flex translate-y-4 transform flex-col justify-end p-8 transition-transform duration-200 ease-out group-hover:translate-y-0">
                 
                  <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                    {event.title}
                  </h3>
                  <motion.div className="mt-4 h-1 w-0 bg-[#D6A51A] transition-all duration-200 ease-out group-hover:w-12" />
                </div>

                <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/20 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
