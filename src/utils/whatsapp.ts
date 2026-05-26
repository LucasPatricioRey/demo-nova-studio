const WHATSAPP_BASE_URL = 'https://wa.me/5491154097209'

export const whatsappMessages = {
  demoSimilar:
    'Hola Lucas, vi la demo de NOVA Studio y quiero una web similar para mi negocio.',
  whatsappBooking:
    'Hola, quiero consultar por una web con turnos por WhatsApp como la demo NOVA Studio.',
  barberiaEstetica: 'Hola, me interesa una página para mi barbería/estética.',
}

export function createWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export function createBookingMessage(params: {
  service: string
  professional: string
  day: string
  time: string
  name?: string
}) {
  const name = params.name?.trim() || 'Sin informar'

  return `Hola, quiero reservar un turno en NOVA Studio. Servicio: ${params.service}. Profesional: ${params.professional}. Día: ${params.day}. Horario: ${params.time}. Mi nombre es: ${name}.`
}
