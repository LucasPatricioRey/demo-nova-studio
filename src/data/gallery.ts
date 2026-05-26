export type GalleryCategory = 'Todos' | 'Cortes' | 'Color' | 'Uñas' | 'Estética'

export type GalleryItem = {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'Todos'>
  description: string
  palette: 'copper' | 'champagne' | 'jade' | 'rose' | 'smoke' | 'sand'
}

export const galleryCategories: GalleryCategory[] = ['Todos', 'Cortes', 'Color', 'Uñas', 'Estética']

export const galleryItems: GalleryItem[] = [
  {
    id: 'fade-texturado',
    title: 'Fade texturado',
    category: 'Cortes',
    description: 'Laterales prolijos, textura arriba y acabado mate.',
    palette: 'copper',
  },
  {
    id: 'bob-iluminado',
    title: 'Bob iluminado',
    category: 'Color',
    description: 'Base natural con reflejos suaves y brillo sellado.',
    palette: 'champagne',
  },
  {
    id: 'semi-nude',
    title: 'Semi nude',
    category: 'Uñas',
    description: 'Semipermanente elegante, corto y fácil de mantener.',
    palette: 'rose',
  },
  {
    id: 'limpieza-glow',
    title: 'Limpieza glow',
    category: 'Estética',
    description: 'Rutina express para piel fresca y luminosa.',
    palette: 'jade',
  },
  {
    id: 'barba-definida',
    title: 'Barba definida',
    category: 'Cortes',
    description: 'Perfilado con navaja y terminación hidratante.',
    palette: 'smoke',
  },
  {
    id: 'bronde-palermo',
    title: 'Bronde Palermo',
    category: 'Color',
    description: 'Mezcla cálida de rubios y castaños con bajo mantenimiento.',
    palette: 'sand',
  },
]
