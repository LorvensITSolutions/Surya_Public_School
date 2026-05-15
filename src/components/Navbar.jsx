import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events-celebrations', label: 'News and Media' },
  { to: '/events-gallery', label: 'Events and Gallery' },
  { href: '#admissions', label: 'Admissions' },
]

export default function Navbar() {
  return (
    <header className="m-0 w-full p-0 font-['Montserrat',sans-serif]">
      <nav className="sticky top-0 z-50 m-0 border-b-2 border-[#D6A51A] bg-[#FFFFFF] py-1 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-3 leading-none sm:gap-4 lg:gap-10 xl:gap-14">
          <Link to="/" className="flex shrink-0 items-center py-0.5">
            <img
              src="https://res.cloudinary.com/dqiraozow/image/upload/v1778663749/Gemini_Generated_Image_xgfq3sxgfq3sxgfq-removebg-preview_le4l6d.png"
              className="h-12 w-[min(260px,50vw)] object-contain object-left sm:h-14 sm:w-[min(300px,42vw)] md:h-16 md:w-[min(360px,30rem)]"
              alt="Surya Public School"
            />
          </Link>

          <ul className="hidden flex-wrap items-center justify-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {'to' in link ? (
                  <Link
                    to={link.to}
                    className="text-[13px] font-bold text-[#2C4C34] transition-colors hover:text-[#D6A51A] xl:text-[15px]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[13px] font-bold text-[#2C4C34] transition-colors hover:text-[#D6A51A] xl:text-[15px]"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 sm:gap-6">
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
