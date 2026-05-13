import { Phone, Mail, Search } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#news-media', label: 'News and Media' },
  { href: '#admissions', label: 'Admissions' },
]

export default function Navbar() {
  return (
    <header className="m-0 w-full p-0 font-['Montserrat',sans-serif]">
     

      {/* Bottom layer — stays under green bar at top, then sticks to viewport when scrolling */}
      <nav className="sticky top-0 z-50 m-0 border-b-2 border-[#D6A51A] bg-[#FFFFFF] py-1 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-4 leading-none lg:gap-14 xl:gap-20">
          <a
            href="#home"
            className="flex shrink-0 items-center py-0.5"
          >
            <img
              src="https://res.cloudinary.com/dqiraozow/image/upload/v1778663749/Gemini_Generated_Image_xgfq3sxgfq3sxgfq-removebg-preview_le4l6d.png"
              className="h-12 w-[min(260px,50vw)] object-contain object-left sm:h-14 sm:w-[min(300px,42vw)] md:h-16 md:w-[min(360px,30rem)]"
            />
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] font-bold text-[#2C4C34] transition-colors hover:text-[#D6A51A] xl:text-[15px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 sm:gap-8">
            
            <a
              href="#contact-us"
              className="rounded-lg bg-[#D6A51A] px-4 py-2 text-[13px] font-extrabold text-[#2C4C34] transition hover:opacity-90 sm:px-5 sm:text-[14px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
