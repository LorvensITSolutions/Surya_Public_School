import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import WhyUs from '../components/WhyUs'

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col gap-0">
      <Navbar />
      <main className="m-0 flex flex-1 flex-col gap-0 p-0">
        <HeroSection />
        <AboutUs />
        <WhyUs />
      </main>
    </div>
  )
}
