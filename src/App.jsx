import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyCayola from './components/WhyCayola'
import TheDifference from './components/TheDifference'
import Platform from './components/Platform'
import Transformations from './components/Transformations'
import AboutPatricio from './components/AboutPatricio'
import ContactForm from './components/ContactForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyCayola />
        <TheDifference />
        <Platform />
        <Transformations />
        <AboutPatricio />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
