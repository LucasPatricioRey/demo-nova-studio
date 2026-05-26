export type GalleryCategory = 'Todos' | 'Cortes' | 'Color' | 'Uñas' | 'Estética'

export type GalleryItem = {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'Todos'>
  description: string
  image: string
  alt: string
  featured?: boolean
}

export const galleryCategories: GalleryCategory[] = ['Todos', 'Cortes', 'Color', 'Uñas', 'Estética']

export const galleryItems: GalleryItem[] = [
  {
    id: 'fade-texturizado',
    title: 'Fade texturizado',
    category: 'Cortes',
    description: 'Laterales prolijos, textura arriba y acabado mate.',
    image: '/images/nova/fade-texturizado.jpg',
    alt: 'Corte fade texturizado en barbería premium',
    featured: true,
  },
  {
    id: 'bob-iluminado',
    title: 'Bob iluminado',
    category: 'Color',
    description: 'Base natural con reflejos suaves y brillo sellado.',
    image: '/images/nova/bob-iluminado.jpg',
    alt: 'Bob iluminado con reflejos cálidos en salón boutique',
  },
  {
    id: 'semi-nude',
    title: 'Semi nude',
    category: 'Uñas',
    description: 'Semipermanente elegante, corto y fácil de mantener.',
    image: '/images/nova/semi-nude.jpg',
    alt: 'Manicura semipermanente nude prolija y natural',
  },
  {
    id: 'limpieza-glow',
    title: 'Limpieza glow',
    category: 'Estética',
    description: 'Rutina express para piel fresca y luminosa.',
    image: '/images/nova/limpieza-glow.jpg',
    alt: 'Limpieza facial glow en cabina de estética cálida',
    featured: true,
  },
  {
    id: 'barba-definida',
    title: 'Barba definida',
    category: 'Cortes',
    description: 'Perfilado con navaja y terminación hidratante.',
    image: '/images/nova/barba-definida.jpg',
    alt: 'Barba definida con perfilado profesional',
  },
  {
    id: 'bronde-palermo',
    title: 'Bronde Palermo',
    category: 'Color',
    description: 'Mezcla cálida de rubios y castaños con bajo mantenimiento.',
    image: '/images/nova/bronde-palermo.jpg',
    alt: 'Color bronde Palermo con ondas y brillo de salón',
    featured: true,
  },
]
