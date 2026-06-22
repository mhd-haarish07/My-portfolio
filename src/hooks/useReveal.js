import { useEffect } from 'react'

// Reveals .reveal sections as they enter the viewport and animates any
// progress bars (.prog-fill[data-w]) inside them. Mirrors the original
// IntersectionObserver logic.
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')

            if (entry.target.querySelector('.prog-fill')) {
              setTimeout(() => {
                entry.target.querySelectorAll('.prog-fill').forEach((bar) => {
                  bar.style.width = bar.dataset.w + '%'
                })
              }, 200)
            }

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
