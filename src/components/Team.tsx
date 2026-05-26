import { professionals } from '../data/team'

type TeamProps = {
  onReserveProfessional: (professionalId: string) => void
}

export function Team({ onReserveProfessional }: TeamProps) {
  return (
    <section className="section section-shell" id="equipo">
      <div className="section-heading reveal">
        <span className="eyebrow">Equipo</span>
        <h2>Elegí con quién querés atenderte</h2>
        <p>
          Profesionales con perfiles claros, fotos cuidadas y reserva directa para que
          el cliente sienta confianza antes de escribir.
        </p>
      </div>

      <div className="team-grid">
        {professionals.map((professional) => (
          <article className="team-card reveal" key={professional.id}>
            <div className="team-photo">
              <img
                src={professional.image}
                alt={professional.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="team-rating">★ {professional.rating}</span>
            </div>
            <div className="team-card-body">
              <span className="badge">{professional.badge}</span>
              <h3>{professional.name}</h3>
              <p className="team-specialty">{professional.specialty}</p>
              <p>{professional.description}</p>
              <div className="team-meta">
                <span>{professional.experience}</span>
              </div>
              <button
                className="button button-small button-secondary"
                type="button"
                onClick={() => onReserveProfessional(professional.id)}
              >
                Reservar con {professional.name}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
