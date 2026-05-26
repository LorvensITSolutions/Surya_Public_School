import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    desktop:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1779271541/Banner_2_x0oatm.png',
    mobile:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1779788737/Mobile_view_1_remxpv.png',
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <section
      id="home"
      className="relative -mt-px w-full max-w-none shrink-0 overflow-hidden bg-[#FFFFFF] leading-none min-[801px]:h-[600px]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative min-[801px]:h-full"
        >
          {/* Mobile — full poster, no crop */}
          <img
            src={slide.mobile}
            alt="Surya Public School — admissions open 2026–2027"
            className="block w-full max-w-full h-auto object-contain min-[801px]:hidden"
            decoding="async"
          />

          {/* Desktop */}
          <img
            src={slide.desktop}
            alt="Surya Public School — admissions open 2026–2027"
            className="absolute inset-0 hidden h-full w-full object-fill object-top min-[801px]:block"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
