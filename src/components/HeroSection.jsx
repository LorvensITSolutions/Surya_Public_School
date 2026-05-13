import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778668779/ChatGPT_Image_May_13_2026_04_09_22_PM_vkeoei.png',
  },
  {
    image:
      'https://res.cloudinary.com/dqiraozow/image/upload/v1778669516/ChatGPT_Image_May_13_2026_04_16_48_PM_h98out.png',
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

  return (
    <section
      id="home"
      className="relative -mt-px box-border m-0 h-[600px] w-full max-w-none shrink-0 overflow-hidden p-0 leading-none"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 m-0 box-border block p-0"
        >
          <img
            src={slides[index].image}
            alt="School banner"
            className="block h-full w-full object-cover object-top"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
