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
          Cada profesional tiene una especialidad marcada para que tu turno quede en
          manos del perfil indicado.
        </p>
      </div>

      <div className="team-grid">
        {professionals.map((professional) => (
          <article className="team-card reveal" key={professional.id}>
            <div className="avatar" aria-hidden="true">
              {professional.name.slice(0, 1)}
            </div>
            <span className="badge">{professional.badge}</span>
            <h3>{professional.name}</h3>
            <p className="team-specialty">{professional.specialty}</p>
            <p>{professional.description}</p>
            <div className="team-meta">
              <span>{professional.experience}</span>
              <strong>★ {professional.rating}</strong>
            </div>
            <button
              className="button button-small button-secondary"
              type="button"
              onClick={() => onReserveProfessional(professional.id)}
            >
              Reservar con {professional.name}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
