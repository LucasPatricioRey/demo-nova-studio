import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Av.%20Santa%20Fe%203240%2C%20Palermo%2C%20CABA'

export function Location() {
  return (
    <section className="section section-shell location-section" id="contacto">
      <div className="section-heading reveal">
        <span className="eyebrow">Ubicación y horarios</span>
        <h2>Estamos en Palermo, cerca de todo</h2>
        <p>
          Vení con turno reservado y te esperamos en un espacio cómodo sobre Av. Santa
          Fe.
        </p>
      </div>

      <div className="location-layout reveal">
        <div className="map-card" role="img" aria-label="Mapa visual simulado de NOVA Studio en Palermo">
          <div className="map-grid" aria-hidden="true" />
          <div className="map-pin" aria-hidden="true">
            <span>NOVA</span>
          </div>
          <div className="map-label">
            <strong>Av. Santa Fe 3240</strong>
            <span>Palermo, CABA</span>
          </div>
        </div>

        <div className="location-info">
          <div className="info-block">
            <span className="badge">Palermo</span>
            <h3>Av. Santa Fe 3240, Palermo, CABA</h3>
            <p>
              Local a la calle, pensado para atención con turno y servicios de salón
              boutique.
            </p>
          </div>

          <div className="hours-grid" aria-label="Horarios de atención">
            <div>
              <span>Lunes a viernes</span>
              <strong>10:00 a 20:00</strong>
            </div>
            <div>
              <span>Sábados</span>
              <strong>10:00 a 18:00</strong>
            </div>
            <div>
              <span>Domingos</span>
              <strong>Cerrado</strong>
            </div>
          </div>

          <div className="contact-actions">
            <a className="button button-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
            <a
              className="button button-primary"
              href={createWhatsAppUrl(whatsappMessages.whatsappBooking)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className="instagram-line">Instagram ficticio: @nova.studio.ba</p>
        </div>
      </div>
    </section>
  )
}
