import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import EventsGalleryIndex from './pages/EventsGalleryIndex'
import EventsGalleryPage from './pages/EventsGalleryPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/events-gallery" element={<EventsGalleryIndex />} />
        <Route path="/events-gallery/:eventId" element={<EventsGalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
