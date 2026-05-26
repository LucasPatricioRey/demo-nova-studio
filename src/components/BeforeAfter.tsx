import { useState, type CSSProperties } from 'react'

export function BeforeAfter() {
  const [split, setSplit] = useState(54)

  return (
    <section className="section section-shell before-after-section">
      <div className="section-heading reveal">
        <span className="eyebrow">Transformaciones</span>
        <h2>Antes y después con diagnóstico previo</h2>
        <p>
          Trabajamos cada cambio con una charla inicial para cuidar el pelo, la piel
          y el resultado que querés lograr.
        </p>
      </div>

      <div className="comparison-layout reveal">
        <div
          className="comparison-visual"
          style={{ '--split': `${split}%` } as CSSProperties}
          role="img"
          aria-label="Comparación simulada de color y nutrición antes y después"
        >
          <div className="comparison-side before">
            <span>Antes</span>
          </div>
          <div className="comparison-side after">
            <span>Después</span>
          </div>
          <div className="comparison-handle" aria-hidden="true" />
        </div>

        <div className="comparison-copy">
          <span className="badge">Color + nutrición</span>
          <h3>De tono apagado a brillo saludable</h3>
          <p>
            Diagnóstico previo, coloración cálida y sellado nutritivo para recuperar
            movimiento sin perder naturalidad.
          </p>
          <label className="range-field" htmlFor="comparison-range">
            Comparar resultado
            <input
              id="comparison-range"
              type="range"
              min="28"
              max="72"
              value={split}
              onChange={(event) => setSplit(Number(event.target.value))}
            />
          </label>
        </div>
      </div>
    </section>
  )
}
