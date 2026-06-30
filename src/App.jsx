import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import WhyAmped from './components/WhyAmped'
import Reviews from './components/Reviews'
import Work from './components/Work'
import Hurricane from './components/Hurricane'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCall from './components/FloatingCall'

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyAmped />
        <Reviews />
        <Work />
        <Hurricane />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}
