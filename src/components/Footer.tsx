import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#turnos', label: 'Turnos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            NS
          </span>
          <span>
            <strong>NOVA Studio</strong>
            <small>Barbería & Estética Integral</small>
          </span>
        </a>
        <p>Sitio demostrativo para presentación comercial.</p>
        <p>Demo creada por Lucas Rey</p>
      </div>

      <nav aria-label="Navegación del footer">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="footer-contact">
        <a href={createWhatsAppUrl(whatsappMessages.barberiaEstetica)} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <span>Instagram: @nova.studio.ba</span>
        <span>Av. Santa Fe 3240, Palermo, CABA</span>
        <span>Lun a vie 10:00 a 20:00 · Sáb 10:00 a 18:00</span>
      </div>
    </footer>
  )
}
