export type Promo = {
  title: string
  description: string
  price: string
  tag: string
}

export const promos: Promo[] = [
  {
    title: 'Corte + barba',
    description: 'Cambio completo para renovar forma, textura y perfilado en una sola visita.',
    price: '$12.500',
    tag: 'Más pedido',
  },
  {
    title: 'Color + nutrición',
    description: 'Coloración con tratamiento reparador para terminar con brillo y suavidad.',
    price: 'desde $39.000',
    tag: 'Este mes',
  },
  {
    title: 'Manicura + perfilado',
    description: 'Manos prolijas y cejas definidas para llegar lista al fin de semana.',
    price: '$15.900',
    tag: 'Combo express',
  },
  {
    title: 'Pack evento',
    description: 'Peinado, retoque facial o barba, y terminación final antes de salir.',
    price: 'desde $24.000',
    tag: 'Con reserva',
  },
]
