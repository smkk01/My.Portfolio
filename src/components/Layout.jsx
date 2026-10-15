import { useEffect, useState } from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { useTheme } from '../hooks/useTheme.js'
import { initializeAnimations } from '../services/animations.js'

function Layout({ children }) {
  const [theme, setTheme] = useTheme()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    initializeAnimations()
    const onScroll = () => setShowScrollTop(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <ThemeSwitcher theme={theme} onChange={setTheme} />
      {showScrollTop && (
        <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
          <i className="bi bi-arrow-up" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default Layout
