export type FAQItem = {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: '¿Atienden sin turno?',
    answer:
      'Trabajamos principalmente con turno para cuidar los tiempos de cada servicio. Si pasás por el local, te confirmamos disponibilidad del día.',
  },
  {
    question: '¿Puedo cancelar o cambiar mi turno?',
    answer:
      'Sí. Te pedimos avisar con la mayor anticipación posible por WhatsApp para liberar el horario y reprogramarte.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencia y tarjetas. Las promociones pueden tener condiciones específicas que se informan antes de reservar.',
  },
  {
    question: '¿Cuánto dura un servicio de color?',
    answer:
      'Depende del diagnóstico, largo y objetivo del color. Un color completo suele requerir entre 2 y 3 horas.',
  },
  {
    question: '¿Puedo consultar antes de reservar?',
    answer:
      'Sí. Podés mandar una foto de referencia por WhatsApp y te orientamos con servicio, duración estimada y presupuesto.',
  },
  {
    question: '¿Dónde están ubicados?',
    answer:
      'Estamos en Av. Santa Fe 3240, Palermo, CABA, a pocas cuadras de la zona de bares y comercios de Palermo.',
  },
]
