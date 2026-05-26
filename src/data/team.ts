export type Professional = {
  id: string
  name: string
  specialty: string
  experience: string
  description: string
  badge: string
  rating: string
}

export const professionals: Professional[] = [
  {
    id: 'martina',
    name: 'Martina',
    specialty: 'Color & Styling',
    experience: '8 años de experiencia',
    description: 'Especialista en coloraciones naturales, corrección de tono y peinados con movimiento.',
    badge: 'Color experto',
    rating: '4.9',
  },
  {
    id: 'nico',
    name: 'Nico',
    specialty: 'Barbería',
    experience: '6 años de experiencia',
    description: 'Trabaja cortes limpios, fades precisos y barbas con terminación premium.',
    badge: 'Más reservado',
    rating: '5.0',
  },
  {
    id: 'sofia',
    name: 'Sofía',
    specialty: 'Uñas & estética',
    experience: '7 años de experiencia',
    description: 'Cuida cada detalle en esmaltado, perfilado, limpieza facial y protocolos express.',
    badge: 'Detalle fino',
    rating: '4.8',
  },
  {
    id: 'leo',
    name: 'Leo',
    specialty: 'Cortes modernos',
    experience: '5 años de experiencia',
    description: 'Ideal para cambios de look, texturas, capas y cortes urbanos de bajo mantenimiento.',
    badge: 'Tendencia',
    rating: '4.9',
  },
]
