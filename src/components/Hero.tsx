import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

type HeroProps = {
  onStartBooking: () => void
}

const stats = [
  { value: '+850', label: 'clientes atendidos' },
  { value: '4.9/5', label: 'valoración promedio' },
  { value: '24 hs', label: 'respuesta por WhatsApp' },
  { value: 'Palermo', label: 'local a la calle' },
]

export function Hero({ onStartBooking }: HeroProps) {
  return (
    <section className="hero-section section-shell" id="inicio">
      <div className="hero-copy reveal">
        <span className="eyebrow">Palermo, CABA · Turnos esta semana</span>
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

      <div className="hero-visual reveal" aria-label="Composición editorial de NOVA Studio">
        <figure className="hero-photo hero-photo-main">
          <img
            src="/images/nova/bronde-palermo.jpg"
            alt="Color bronde con ondas en un salón premium"
            fetchPriority="high"
          />
        </figure>
        <figure className="hero-photo hero-photo-secondary">
          <img
            src="/images/nova/fade-texturizado.jpg"
            alt="Corte fade texturizado realizado en barbería premium"
            loading="eager"
          />
        </figure>
        <figure className="hero-photo hero-photo-accent">
          <img
            src="/images/nova/semi-nude.jpg"
            alt="Manicura semi nude prolija y elegante"
            loading="eager"
          />
        </figure>

        <div className="hero-ticket hero-ticket-rating">
          <span aria-hidden="true">★★★★★</span>
          <strong>4.9</strong>
          <small>valoración realista</small>
        </div>
        <div className="hero-ticket hero-ticket-booking">
          <small>Próximo turno</small>
          <strong>Hoy 17:30</strong>
          <span>Corte + barba</span>
        </div>
      </div>
    </section>
  )
}
