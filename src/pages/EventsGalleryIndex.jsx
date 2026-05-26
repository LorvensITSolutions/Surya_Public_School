import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { galleryEvents } from '../data/eventsGallery'

export default function EventsGalleryIndex() {
  return (
    <div className="flex min-h-svh flex-col bg-[#FFFFFF] font-['Montserrat',sans-serif]">
      <Navbar />
      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <nav className="mb-6 text-sm font-semibold text-[#2C4C34]">
            <Link to="/" className="hover:text-[#D6A51A]">
              Home
            </Link>
            <span className="mx-2 text-[#D6A51A]">/</span>
            <span>Events &amp; gallery</span>
          </nav>

          <p className="text-xs font-bold tracking-[0.2em] text-[#D6A51A] uppercase">
            Surya Public School
          </p>
          <h1 className="mt-3 text-3xl font-black text-[#2C4C34] sm:text-4xl lg:text-5xl">
            Events &amp; gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base font-semibold text-[#2C4C34]">
            Browse celebrations, excursions, and campus highlights. Select an
            event to view photos and details.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryEvents.map((e) => (
              <li key={e.id}>
                <Link
                  to={`/events-gallery/${e.id}`}
                  className="group block overflow-hidden rounded-2xl  shadow-sm transition hover:border-[#2C4C34]"
                >
                  <div className="aspect-4/3 overflow-hidden rounded-t-2xl sm:aspect-video">
                    <img
                      src={e.coverImage}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t-2 border-[#D6A51A] bg-[#FFFFFF] px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#D6A51A]">
                      {e.category}
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#2C4C34] group-hover:text-[#D6A51A]">
                      {e.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-[#2C4C34]/90">
                      {e.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
