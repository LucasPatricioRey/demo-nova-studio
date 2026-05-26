# NOVA Studio

Demo profesional para una barbería y estética integral ficticia ubicada en Palermo, CABA.

## Objetivo comercial

Mostrar cómo podría verse una presencia digital vendible para un negocio local: servicios, precios, horarios, galería, opiniones, promos, contacto y turnos por WhatsApp desde una experiencia mobile-first.

La demo está pensada para que Lucas pueda mostrarla en el celular y explicar una web inicial para barberías, peluquerías, centros de estética, salones de uñas o estudios boutique.

## Stack usado

- Vite
- React
- TypeScript
- CSS moderno sin framework
- Frontend estático, sin backend, sin base de datos y sin autenticación

Se eligió este stack porque permite una demo rápida, liviana, fácil de mantener y simple de deployar en Vercel, Netlify, GitHub Pages o cualquier hosting estático.

## Funcionalidades

- Header sticky con menú mobile.
- Hero editorial con composición fotográfica, CTAs y elementos de confianza.
- Beneficios del local.
- Servicios con filtros por categoría.
- Simulador de turnos con selección de servicio, profesional, día y horario.
- Horarios ocupados simulados.
- Confirmación por WhatsApp con mensaje prellenado.
- Galería con imágenes demo premium, filtros y modal.
- Sección de antes y después con imagen de transformación.
- Equipo ficticio con fotos demo y reserva por profesional.
- Opiniones de clientes.
- Promos del mes.
- Ubicación, horarios, Instagram ficticio y botones de contacto.
- FAQ accesible con acordeón.
- Botón flotante premium con ícono de WhatsApp.
- Animaciones suaves de hero, cards, filtros, FAQ, botón flotante y reveal on scroll.
- SEO básico, Open Graph y favicon.

## Cómo correr localmente

```bash
npm install
npm run dev
```

## Cómo buildear

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Cómo adaptar esta demo para un cliente real

1. Cambiar nombre, dirección, horarios, WhatsApp e Instagram.
2. Reemplazar servicios, precios y duración por la carta real del negocio.
3. Reemplazar las imágenes demo por fotos reales de trabajos, equipo y local.
4. Ajustar colores y tono de marca.
5. Conectar los CTAs al WhatsApp del negocio.
6. Si el cliente lo necesita, reemplazar el simulador por un sistema real de reservas.

## Qué cosas son simuladas

- NOVA Studio es un negocio ficticio.
- Los profesionales, opiniones, promociones, precios y horarios son ficticios.
- El simulador de turnos no guarda datos ni consulta disponibilidad real.
- Las imágenes son assets demo/virtuales optimizados para presentación comercial.
- El mapa es una composición visual propia, no un mapa real.
- Los CTAs usan el WhatsApp real de Lucas Rey para fines comerciales.

## Nota

Demo creada por Lucas Rey.
