import { useMemo, useState } from 'react'
import { services } from '../data/services'
import { professionals } from '../data/team'
import { createBookingMessage, createWhatsAppUrl } from '../utils/whatsapp'

type BookingSimulatorProps = {
  initialServiceId: string | null
  initialProfessionalId: string | null
}

const days = ['Hoy', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const times = ['10:00', '11:30', '13:00', '15:00', '17:30', '19:00']

const occupiedSlots: Record<string, string[]> = {
  'nico-Hoy': ['11:30', '19:00'],
  'nico-Viernes': ['17:30'],
  'martina-Hoy': ['10:00', '13:00'],
  'martina-Jueves': ['15:00', '17:30'],
  'sofia-Miércoles': ['11:30', '15:00'],
  'sofia-Sábado': ['13:00', '17:30'],
  'leo-Hoy': ['15:00'],
  'leo-Viernes': ['10:00', '19:00'],
}

export function BookingSimulator({ initialServiceId, initialProfessionalId }: BookingSimulatorProps) {
  const [serviceId, setServiceId] = useState(initialServiceId ?? '')
  const [professionalId, setProfessionalId] = useState(initialProfessionalId ?? '')
  const [day, setDay] = useState(days[0])
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [notice, setNotice] = useState(() => {
    if (initialServiceId) {
      return 'Servicio seleccionado. Completá profesional y horario para confirmar.'
    }

    if (initialProfessionalId) {
      return 'Profesional seleccionado. Elegí un horario disponible.'
    }

    return ''
  })

  const selectedService = useMemo(
    () => services.find((service) => service.id === serviceId),
    [serviceId],
  )

  const selectedProfessional = useMemo(
    () => professionals.find((professional) => professional.id === professionalId),
    [professionalId],
  )

  const unavailableTimes = useMemo(
    () => (professionalId ? occupiedSlots[`${professionalId}-${day}`] ?? [] : []),
    [professionalId, day],
  )

  const summaryItems = [
    ['Servicio', selectedService?.name ?? 'Pendiente'],
    ['Profesional', selectedProfessional?.name ?? 'Pendiente'],
    ['Día', day],
    ['Horario', time || 'Pendiente'],
    ['Nombre', name.trim() || 'Opcional'],
  ]

  function confirmBooking() {
    if (!selectedService || !selectedProfessional || !day || !time) {
      setNotice('Falta seleccionar servicio, profesional y horario disponible.')
      return
    }

    const message = createBookingMessage({
      service: selectedService.name,
      professional: selectedProfessional.name,
      day,
      time,
      name,
    })

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section section-shell booking-section" id="turnos">
      <div className="section-heading reveal">
        <span className="eyebrow">Turnos simulados</span>
        <h2>Armá tu turno y confirmalo por WhatsApp</h2>
        <p>
          Elegí servicio, profesional, día y horario. Después te llevamos a WhatsApp
          con el mensaje listo para confirmar.
        </p>
      </div>

      <div className="booking-layout reveal">
        <div className="booking-steps" aria-label="Pasos para reservar">
          <span>01 Servicio</span>
          <span>02 Profesional</span>
          <span>03 Día y hora</span>
          <span>04 WhatsApp</span>
        </div>

        <div className="booking-panel">
          <div className="field-group">
            <label htmlFor="booking-service">Servicio</label>
            <select
              id="booking-service"
              value={serviceId}
              onChange={(event) => setServiceId(event.target.value)}
            >
              <option value="">Seleccionar servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} · {service.duration} · {service.price}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="booking-professional">Profesional</label>
            <select
              id="booking-professional"
              value={professionalId}
              onChange={(event) => {
                setProfessionalId(event.target.value)
                setTime('')
              }}
            >
              <option value="">Seleccionar profesional</option>
              {professionals.map((professional) => (
                <option key={professional.id} value={professional.id}>
                  {professional.name} · {professional.specialty}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <span className="label-text">Día</span>
            <div className="choice-grid days-grid">
              {days.map((bookingDay) => (
                <button
                  className={`choice-button ${day === bookingDay ? 'is-active' : ''}`}
                  type="button"
                  key={bookingDay}
                  onClick={() => {
                    setDay(bookingDay)
                    setTime('')
                  }}
                >
                  {bookingDay}
                </button>
              ))}
            </div>
          </div>

          <div className="field-group">
            <span className="label-text">Horario</span>
            <div className="choice-grid time-grid">
              {times.map((slot) => {
                const isOccupied = unavailableTimes.includes(slot)

                return (
                  <button
                    className={`choice-button ${time === slot ? 'is-active' : ''} ${isOccupied ? 'is-disabled' : ''}`}
                    type="button"
                    key={slot}
                    disabled={isOccupied}
                    onClick={() => setTime(slot)}
                  >
                    <span>{slot}</span>
                    {isOccupied ? <small>Ocupado</small> : <small>Disponible</small>}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="booking-name">Nombre opcional</label>
            <input
              id="booking-name"
              type="text"
              placeholder="Ej: Lucas"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <aside className="booking-summary" aria-label="Resumen del turno">
          <span className="summary-kicker">Resumen</span>
          <h3>Confirmá el turno por WhatsApp</h3>
          <dl>
            {summaryItems.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <button className="button button-primary full-width" type="button" onClick={confirmBooking}>
            Confirmar por WhatsApp
          </button>
          <p className="booking-note">
            Los horarios se confirman por WhatsApp según disponibilidad real del salón.
          </p>
          {notice ? (
            <p className="toast" role="status" aria-live="polite">
              {notice}
            </p>
          ) : null}
        </aside>
      </div>
    </section>
  )
}
