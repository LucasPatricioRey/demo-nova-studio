import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

type HeroProps = {
  onStartBooking: () => void
}

const stats = [
  { value: '+850', label: 'clientes atendidos' },
  { value: '4.9/5', label: 'valoración' },
  { value: 'WhatsApp', label: 'turnos simples' },
  { value: 'Palermo', label: 'CABA' },
]

export function Hero({ onStartBooking }: HeroProps) {
  return (
    <section className="hero-section section-shell" id="inicio">
      <div className="hero-copy reveal">
        <span className="eyebrow">Salón boutique en Palermo</span>
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

        <a
          className="hero-whatsapp-link"
          href={createWhatsAppUrl(whatsappMessages.whatsappBooking)}
          target="_blank"
          rel="noreferrer"
        >
          Consultar disponibilidad por WhatsApp
        </a>

        <div className="hero-stats" aria-label="Indicadores de confianza">
          {stats.map((stat) => (
            <span key={stat.label}>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
            </span>
          ))}
        </div>
      </div>

      <div className="hero-media reveal" aria-label="Trabajo destacado de NOVA Studio">
        <figure className="hero-image-card">
          <img
            src="/images/nova/bronde-palermo.jpg"
            alt="Color bronde con ondas en un salón premium"
            fetchPriority="high"
          />
          <figcaption>
            <span>Color & styling · Bronde Palermo</span>
          </figcaption>
        </figure>

        <div className="hero-floating-card">
          <span>Próximo turno</span>
          <strong>Hoy 17:30</strong>
          <small>Corte + barba · Nico</small>
        </div>
      </div>
    </section>
  )
}
