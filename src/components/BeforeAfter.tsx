import { createWhatsAppUrl } from '../utils/whatsapp'

export function BeforeAfter() {
  return (
    <section className="section section-shell before-after-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Transformaciones</span>
        <h2>Antes y después con diagnóstico previo</h2>
        <p>
          Una sección visual potente para mostrar resultados concretos y convertir la
          inspiración en una consulta por WhatsApp.
        </p>
      </div>

      <div className="comparison-layout reveal">
        <div className="comparison-copy">
          <span className="badge">Color + nutrición</span>
          <h3>Un cambio visible, cuidado y fácil de mantener</h3>
          <p>
            Diagnóstico previo, coloración cálida y sellado nutritivo para recuperar
            movimiento sin perder naturalidad. Una transformación pensada para verse
            sofisticada desde el primer día.
          </p>
          <ul className="comparison-points">
            <li>Evaluación del estado del pelo</li>
            <li>Coloración cálida con bajo mantenimiento</li>
            <li>Nutrición final para brillo y suavidad</li>
          </ul>
          <a
            className="button button-primary"
            href={createWhatsAppUrl('Hola Lucas, vi la transformación de NOVA Studio y quiero una web similar para mi negocio.')}
            target="_blank"
            rel="noreferrer"
          >
            Quiero un cambio así
          </a>
        </div>

        <figure className="comparison-visual">
          <img
            src="/images/nova/antes-despues.jpg"
            alt="Antes y después de coloración y nutrición capilar en NOVA Studio"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Antes</span>
            <span>Después</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
