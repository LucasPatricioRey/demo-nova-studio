export type ServiceCategory =
  | 'Todos'
  | 'Barbería'
  | 'Peluquería'
  | 'Estética'
  | 'Uñas'
  | 'Tratamientos'

export type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: string
  category: Exclude<ServiceCategory, 'Todos'>
  highlight?: boolean
}

export const serviceCategories: ServiceCategory[] = [
  'Todos',
  'Barbería',
  'Peluquería',
  'Estética',
  'Uñas',
  'Tratamientos',
]

export const services: Service[] = [
  {
    id: 'corte-masculino-premium',
    name: 'Corte masculino premium',
    description: 'Diseño de corte, lavado, styling y terminación con producto profesional.',
    duration: '45 min',
    price: '$9.500',
    category: 'Barbería',
    highlight: true,
  },
  {
    id: 'corte-barba',
    name: 'Corte + barba',
    description: 'Corte a medida, perfilado con toalla caliente y aceite final.',
    duration: '60 min',
    price: '$13.500',
    category: 'Barbería',
    highlight: true,
  },
  {
    id: 'barba-premium',
    name: 'Barba premium',
    description: 'Perfilado, navaja, vapor y acabado prolijo para barba corta o larga.',
    duration: '35 min',
    price: '$7.800',
    category: 'Barbería',
  },
  {
    id: 'color-completo',
    name: 'Color completo',
    description: 'Diagnóstico, coloración completa, lavado técnico y sellado de brillo.',
    duration: '120 min',
    price: 'desde $32.000',
    category: 'Peluquería',
    highlight: true,
  },
  {
    id: 'brushing',
    name: 'Brushing',
    description: 'Lavado, secado modelado y acabado natural para evento o uso diario.',
    duration: '45 min',
    price: '$11.000',
    category: 'Peluquería',
  },
  {
    id: 'perfilado-cejas',
    name: 'Perfilado de cejas',
    description: 'Diseño y limpieza de cejas respetando facciones y estilo personal.',
    duration: '20 min',
    price: '$5.500',
    category: 'Estética',
  },
  {
    id: 'manicura-semi',
    name: 'Manicura semipermanente',
    description: 'Preparación de uña, esmaltado semipermanente y cuidado de cutículas.',
    duration: '60 min',
    price: '$12.000',
    category: 'Uñas',
    highlight: true,
  },
  {
    id: 'limpieza-facial-express',
    name: 'Limpieza facial express',
    description: 'Higiene profunda, exfoliación suave, máscara y protección final.',
    duration: '45 min',
    price: '$18.000',
    category: 'Tratamientos',
  },
  {
    id: 'nutricion-capilar',
    name: 'Nutrición capilar',
    description: 'Tratamiento reparador para recuperar suavidad, brillo y movimiento.',
    duration: '50 min',
    price: '$16.500',
    category: 'Tratamientos',
  },
  {
    id: 'pack-evento',
    name: 'Pack evento',
    description: 'Peinado, brushing o barba, retoque express y detalles finales.',
    duration: '75 min',
    price: 'desde $24.000',
    category: 'Peluquería',
  },
]
