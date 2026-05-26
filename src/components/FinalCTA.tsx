import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

type FinalCTAProps = {
  onStartBooking: () => void
}

export function FinalCTA({ onStartBooking }: FinalCTAProps) {
  return (
    <section className="final-cta section-shell reveal">
      <span className="eyebrow">Listo para reservar</span>
      <h2>Tu próximo cambio empieza con un mensaje</h2>
      <p>
        Contanos qué servicio estás buscando y te ayudamos a elegir el turno más
        cómodo para esta semana.
      </p>
      <div className="hero-actions">
        <a
          className="button button-primary"
          href={createWhatsAppUrl(whatsappMessages.demoSimilar)}
          target="_blank"
          rel="noreferrer"
        >
          Reservar por WhatsApp
        </a>
        <button className="button button-secondary" type="button" onClick={onStartBooking}>
          Ver servicios
        </button>
      </div>
    </section>
  )
}
