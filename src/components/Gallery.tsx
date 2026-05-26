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
          Una selección de cortes, color, uñas y estética con el estilo urbano y
          prolijo que buscamos en cada visita.
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
        {filteredItems.map((item, index) => (
          <button
            className={`gallery-card reveal gallery-${item.palette} ${index === 1 ? 'is-wide' : ''}`}
            type="button"
            key={item.id}
            onClick={() => setSelectedItem(item)}
            aria-label={`Ver detalle de ${item.title}`}
          >
            <span className="gallery-art" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
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
            <div className={`modal-art gallery-${selectedItem.palette}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="badge">{selectedItem.category}</span>
            <h3 id="gallery-modal-title">{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
