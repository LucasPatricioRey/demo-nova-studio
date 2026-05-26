import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = new WeakSet<Element>()

    if (shouldReduceMotion) {
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    const observeRevealItems = () => {
      document.querySelectorAll('.reveal').forEach((item) => {
        if (!revealItems.has(item)) {
          revealItems.add(item)
          observer.observe(item)
        }
      })
    }

    observeRevealItems()

    const mutationObserver = new MutationObserver(observeRevealItems)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
