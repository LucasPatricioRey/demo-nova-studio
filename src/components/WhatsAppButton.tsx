import { createWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'

export function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppUrl(whatsappMessages.demoSimilar)}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      WA
    </a>
  )
}
