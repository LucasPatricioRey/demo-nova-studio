import { useState } from 'react'
import { faqs } from '../data/faq'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section-shell faq-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h2>Antes de reservar, resolvé las dudas típicas</h2>
        <p>
          Turnos, cambios, medios de pago y consultas previas explicadas de forma
          directa.
        </p>
      </div>

      <div className="faq-list reveal">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`

          return (
            <article className="faq-item" key={item.question}>
              <button
                id={buttonId}
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              <div
                id={panelId}
                className={`faq-answer ${isOpen ? 'is-open' : ''}`}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
