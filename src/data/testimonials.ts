export type Testimonial = {
  name: string
  service: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Julián R.',
    service: 'Corte + barba',
    rating: 5,
    text: 'Reservé por WhatsApp y me atendieron puntual. El corte quedó impecable y la barba súper prolija.',
  },
  {
    name: 'Camila S.',
    service: 'Color + nutrición',
    rating: 5,
    text: 'Me explicaron todo antes de empezar y el resultado fue excelente. El color quedó natural y con mucho brillo.',
  },
  {
    name: 'María P.',
    service: 'Manicura semipermanente',
    rating: 5,
    text: 'Muy buena atención, el lugar es hermoso y los precios están claros desde el primer mensaje.',
  },
  {
    name: 'Agustín M.',
    service: 'Corte masculino premium',
    rating: 5,
    text: 'Se nota que trabajan con turno. Llegué, me senté y salí en horario. Volvería sin dudar.',
  },
]
