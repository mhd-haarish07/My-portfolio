import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { MobileBar, MobileDrawer } from './components/MobileNav'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CertModal from './components/CertModal'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Availability from './components/Availability'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import useScrollSpy from './hooks/useScrollSpy'
import useReveal from './hooks/useReveal'

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [certOpen, setCertOpen] = useState(false)
  const active = useScrollSpy()

  useReveal()

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      <Sidebar active={active} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <MobileBar onOpen={() => setDrawerOpen(true)} />

      <main className="content">
        <Hero />
        <Summary />
        <Skills />
        <Experience onOpenCert={() => setCertOpen(true)} />
        <CertModal open={certOpen} onClose={() => setCertOpen(false)} />
        <Projects />
        <Education />
        <Certifications onOpenCert={() => setCertOpen(true)} />
        <Availability />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
