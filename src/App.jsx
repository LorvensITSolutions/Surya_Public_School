import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import PageSeo from './components/PageSeo'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import EventsGalleryIndex from './pages/EventsGalleryIndex'
import EventsGalleryPage from './pages/EventsGalleryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

export default function App() {
  return (
    <BrowserRouter>
      <PageSeo />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/events-gallery" element={<EventsGalleryIndex />} />
        <Route path="/events-gallery/:eventId" element={<EventsGalleryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
