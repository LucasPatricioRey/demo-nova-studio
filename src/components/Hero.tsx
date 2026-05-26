import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

type HeroProps = {
  onStartBooking: () => void
}

const stats = [
  '+850 clientes atendidos',
  '4.9/5 valoración',
  'Turnos esta semana',
  'WhatsApp directo',
]

export function Hero({ onStartBooking }: HeroProps) {
  return (
    <section className="hero-section section-shell" id="inicio">
      <div className="hero-copy reveal">
        <span className="eyebrow">Palermo, CABA</span>
        <h1>Barbería y estética integral en Palermo</h1>
        <p className="hero-lead">
          Cortes, color, barba, uñas y tratamientos en un espacio moderno, cómodo y
          pensado para que salgas impecable.
        </p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={onStartBooking}>
            Reservar turno
          </button>
          <a className="button button-secondary" href="#servicios">
            Ver servicios
          </a>
        </div>
        <div className="hero-stats" aria-label="Indicadores de confianza">
          {stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </div>

      <div
        className="hero-visual reveal"
        role="img"
        aria-label="Composición visual premium de una barbería y estética moderna"
      >
        <div className="studio-sign">
          <span>NOVA</span>
          <strong>Studio</strong>
        </div>
        <div className="mirror-panel">
          <span className="mirror-line" />
          <span className="mirror-shelf" />
          <span className="chair-shape" />
        </div>
        <div className="service-ticket">
          <small>Próximo turno</small>
          <strong>Hoy 17:30</strong>
          <span>Corte + barba</span>
        </div>
        <div className="rating-ticket">
          <span aria-hidden="true">★★★★★</span>
          <strong>4.9</strong>
          <small>clientes reales</small>
        </div>
      </div>

      <a
        className="hero-whatsapp-link"
        href={createWhatsAppUrl(whatsappMessages.whatsappBooking)}
        target="_blank"
        rel="noreferrer"
      >
        Consultar disponibilidad por WhatsApp
      </a>
    </section>
  )
}
