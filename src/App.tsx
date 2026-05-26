import { useState } from 'react'
import { BeforeAfter } from './components/BeforeAfter'
import { BookingSimulator } from './components/BookingSimulator'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Promos } from './components/Promos'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { TrustBar } from './components/TrustBar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

function scrollToSection(sectionId: string) {
  document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [bookingPreset, setBookingPreset] = useState<{
    serviceId: string | null
    professionalId: string | null
    version: number
  }>({
    serviceId: null,
    professionalId: null,
    version: 0,
  })

  useRevealOnScroll()

  function startBooking() {
    scrollToSection('#turnos')
  }

  function reserveService(serviceId: string) {
    setBookingPreset((current) => ({
      serviceId,
      professionalId: null,
      version: current.version + 1,
    }))
    scrollToSection('#turnos')
  }

  function reserveProfessional(professionalId: string) {
    setBookingPreset((current) => ({
      serviceId: null,
      professionalId,
      version: current.version + 1,
    }))
    scrollToSection('#turnos')
  }

  return (
    <>
      <Header />
      <main>
        <Hero onStartBooking={startBooking} />
        <TrustBar />
        <Services onReserve={reserveService} />
        <BookingSimulator
          key={bookingPreset.version}
          initialServiceId={bookingPreset.serviceId}
          initialProfessionalId={bookingPreset.professionalId}
        />
        <Gallery />
        <BeforeAfter />
        <Team onReserveProfessional={reserveProfessional} />
        <Testimonials />
        <Promos />
        <Location />
        <FAQ />
        <FinalCTA onStartBooking={() => scrollToSection('#servicios')} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
