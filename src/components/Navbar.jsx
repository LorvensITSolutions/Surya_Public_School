import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function scrollPageTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events-gallery', label: 'Events and Gallery' },
  { to: '/admissions', label: 'Admissions' },
]

const LOGO_SRC =
  'https://res.cloudinary.com/dqiraozow/image/upload/v1778663749/Gemini_Generated_Image_xgfq3sxgfq3sxgfq-removebg-preview_le4l6d.png'

const menuPanel = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.32, ease: [0.32, 0, 0.67, 0] },
  },
}

const menuBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const menuHeader = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.12, duration: 0.35, ease: 'easeOut' },
  },
}

const linkItem = {
  hidden: { opacity: 0, x: 28 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.18 + i * 0.07,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const menuFooter = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.42, duration: 0.38, ease: 'easeOut' },
  },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleNavClick(to) {
    setMenuOpen(false)
    if (to === '/') scrollPageTop()
  }

  return (
    <header className="m-0 w-full p-0 font-['Montserrat',sans-serif]">
      <nav className="sticky top-0 z-50 m-0 border-b-2 border-[#D6A51A] bg-[#FFFFFF] shadow-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:justify-center lg:gap-10 lg:py-1 xl:gap-14">
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            className="flex shrink-0 items-center py-0.5"
          >
            <img
              src={LOGO_SRC}
              className="h-11 w-[min(200px,55vw)] object-contain object-left sm:h-12 lg:h-14 lg:w-[min(300px,42vw)] xl:h-16"
              alt="Surya Public School"
            />
          </Link>

          <ul className="hidden flex-wrap items-center justify-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-[13px] font-bold text-[#2C4C34] transition-colors hover:text-[#D6A51A] xl:text-[15px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            <Link
              to="/admissions"
              className="rounded-lg bg-[#D6A51A] px-4 py-2 text-[13px] font-extrabold text-[#2C4C34] transition hover:opacity-90 sm:px-5 sm:text-[14px]"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-[#2C4C34]/15 text-[#2C4C34] transition hover:border-[#D6A51A] hover:text-[#D6A51A] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <X className="h-6 w-6" strokeWidth={2.25} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <Menu className="h-6 w-6" strokeWidth={2.25} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              key="menu-backdrop"
              variants={menuBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[90] bg-[#2C4C34]/25 lg:hidden"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="menu-panel"
              id="mobile-nav-menu"
              variants={menuPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-100 flex flex-col bg-[#FFFFFF] shadow-2xl lg:hidden"
              aria-hidden={false}
            >
              <motion.div
                variants={menuHeader}
                initial="hidden"
                animate="visible"
                className="flex shrink-0 items-center justify-between border-b-2 border-[#D6A51A] px-4 py-3 sm:px-6"
              >
                <Link
                  to="/"
                  onClick={() => handleNavClick('/')}
                  className="flex items-center"
                >
                  <img
                    src={LOGO_SRC}
                    className="h-11 w-[min(220px,60vw)] object-contain object-left"
                    alt="Surya Public School"
                  />
                </Link>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border-2 border-[#2C4C34]/15 text-[#2C4C34] transition hover:border-[#D6A51A] hover:text-[#D6A51A]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-6 w-6" strokeWidth={2.25} aria-hidden />
                </button>
              </motion.div>

              <nav
                className="flex flex-1 flex-col justify-center px-6 sm:px-10"
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      custom={i}
                      variants={linkItem}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.to}
                        onClick={() => handleNavClick(link.to)}
                        className="block rounded-xl px-4 py-4 text-center text-lg font-black text-[#2C4C34] transition hover:bg-[#F7F6F2] hover:text-[#D6A51A] sm:text-xl"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                variants={menuFooter}
                initial="hidden"
                animate="visible"
                className="shrink-0 border-t border-[#2C4C34]/10 px-6 py-8 sm:px-10"
              >
                <Link
                  to="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-[#D6A51A] px-6 py-4 text-base font-extrabold text-[#2C4C34] transition hover:opacity-90"
                >
                  Contact Us
                </Link>
                <p className="mt-6 text-center text-xs font-bold tracking-[0.2em] text-[#D6A51A] uppercase">
                  Surya Public School
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
