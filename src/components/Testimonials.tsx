import { testimonials } from '../data/testimonials'

export function Testimonials() {
  return (
    <section className="section section-shell testimonials-section" id="opiniones">
      <div className="section-heading reveal">
        <span className="eyebrow">Opiniones</span>
        <h2>Clientes que vuelven por atención y resultado</h2>
        <p>
          Puntualidad, precios claros y un espacio cómodo son parte de la experiencia
          desde el primer mensaje.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card reveal" key={`${testimonial.name}-${testimonial.service}`}>
            <div className="stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
              {'★'.repeat(testimonial.rating)}
            </div>
            <p>“{testimonial.text}”</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.service}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
