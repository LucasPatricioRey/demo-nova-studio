import { promos } from '../data/promos'
import { createWhatsAppUrl } from '../utils/whatsapp'

export function Promos() {
  return (
    <section className="section section-shell promos-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Combos del mes</span>
        <h2>Promos vigentes para aprovechar esta semana</h2>
        <p>
          Combos pensados para resolver más de un detalle en una sola visita y salir
          listo para el plan que tengas.
        </p>
      </div>

      <div className="promo-grid">
        {promos.map((promo) => (
          <article className="promo-card reveal" key={promo.title}>
            <span className="badge">{promo.tag}</span>
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <div className="promo-footer">
              <strong>{promo.price}</strong>
              <a
                className="button button-small button-primary"
                href={createWhatsAppUrl(
                  `Hola Lucas, vi el combo "${promo.title}" en la demo de NOVA Studio y quiero una web similar para mi negocio.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Consultar promo por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
