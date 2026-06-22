import { useEffect, useState } from 'react'

// Tracks which section is currently in view so nav links can highlight.
// Mirrors the original updateNav() logic.
export default function useScrollSpy() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const updateNav = () => {
      let current = 'home'
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 220) current = s.id
      })
      setActive(current)
    }

    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })
    return () => window.removeEventListener('scroll', updateNav)
  }, [])

  return active
}
