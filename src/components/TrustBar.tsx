const benefits = [
  { title: 'Atención con turno', text: 'Menos espera, más tiempo para cada detalle.' },
  { title: 'Profesionales especializados', text: 'Cada servicio queda en manos del perfil indicado.' },
  { title: 'Productos premium', text: 'Color, styling y cuidado con marcas de salón.' },
  { title: 'Recordatorio por WhatsApp', text: 'Confirmación simple antes de venir.' },
]

export function TrustBar() {
  return (
    <section className="trust-bar section-shell" aria-label="Beneficios de NOVA Studio">
      {benefits.map((benefit) => (
        <article className="trust-item reveal" key={benefit.title}>
          <span aria-hidden="true" />
          <div>
            <h2>{benefit.title}</h2>
            <p>{benefit.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
