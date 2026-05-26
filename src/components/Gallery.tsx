import { useEffect, useMemo, useState } from 'react'
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from '../data/gallery'

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Todos')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todos') {
      return galleryItems
    }

    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section className="section section-shell gallery-section" id="galeria">
      <div className="section-heading reveal">
        <span className="eyebrow">Trabajos recientes</span>
        <h2>Resultados recientes para inspirar tu próximo cambio</h2>
        <p>
          Un portfolio realista de salón: cortes, color, uñas y estética con imágenes
          grandes, recortes cuidados y detalle de cada servicio.
        </p>
      </div>

      <div className="filter-row reveal" aria-label="Filtrar galería por categoría">
        {galleryCategories.map((category) => (
          <button
            className={`filter-pill ${activeCategory === category ? 'is-active' : ''}`}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <button
            className={`gallery-card reveal ${item.featured ? 'is-featured' : ''}`}
            type="button"
            key={item.id}
            onClick={() => setSelectedItem(item)}
            aria-label={`Ver detalle de ${item.title}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
            <span className="gallery-content">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedItem(null)}>
          <div
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Cerrar detalle de galería"
              onClick={() => setSelectedItem(null)}
            >
              Cerrar
            </button>
            <img
              className="modal-image"
              src={selectedItem.image}
              alt={selectedItem.alt}
              decoding="async"
            />
            <div className="modal-body">
              <span className="badge">{selectedItem.category}</span>
              <h3 id="gallery-modal-title">{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
