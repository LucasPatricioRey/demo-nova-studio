import { useEffect, useState } from 'react'
import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#turnos', label: 'Turnos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Ir al inicio de NOVA Studio">
        <span className="brand-mark" aria-hidden="true">
          NS
        </span>
        <span>
          <strong>NOVA Studio</strong>
          <small>Barbería & Estética Integral</small>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="primary-navigation"
        className={`primary-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          className="button button-small button-primary nav-cta"
          href={createWhatsAppUrl(whatsappMessages.demoSimilar)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          Reservar por WhatsApp
        </a>
      </nav>
    </header>
  )
}
