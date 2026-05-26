import { useMemo, useState } from 'react'
import { serviceCategories, services, type ServiceCategory } from '../data/services'

type ServicesProps = {
  onReserve: (serviceId: string) => void
}

export function Services({ onReserve }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Todos')

  const filteredServices = useMemo(() => {
    if (activeCategory === 'Todos') {
      return services
    }

    return services.filter((service) => service.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="section section-shell" id="servicios">
      <div className="section-heading reveal">
        <span className="eyebrow">Servicios y precios</span>
        <h2>Elegí el servicio que necesitás antes de reservar</h2>
        <p>
          Precios visibles, duración estimada y categorías ordenadas para que sepas
          qué pedir antes de escribirnos.
        </p>
      </div>

      <div className="filter-row reveal" aria-label="Filtrar servicios por categoría">
        {serviceCategories.map((category) => (
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

      <div className="services-grid">
        {filteredServices.map((service) => (
          <article className={`service-card reveal ${service.highlight ? 'is-highlighted' : ''}`} key={service.id}>
            <div className="card-topline">
              <span className="badge">{service.category}</span>
              <span>{service.duration}</span>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="service-card-footer">
              <strong>{service.price}</strong>
              <button className="button button-small button-secondary" type="button" onClick={() => onReserve(service.id)}>
                Reservar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
