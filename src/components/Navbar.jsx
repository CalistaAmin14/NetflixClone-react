import { useState, useEffect } from 'react'

/**
 * Navbar Component
 * Feature 3 — Theme toggle via props/callback
 * Feature 5 — Navigation highlight (active state)
 * Props: theme, onToggleTheme
 */
function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const navItems = [
    { label: 'Home', href: '#hero-section' },
    { label: 'Movies', href: '#popular-section' },
    { label: 'Series', href: '#trending-section' },
    { label: 'FAQ', href: '#faq-section' },
  ]

  // Sticky navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-black px-4 ${scrolled ? 'navbar-scrolled' : ''}`}
      id="mainNavbar"
    >
      <a className="navbar-brand fw-bold text-danger fs-2" href="#">NETFLIX</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto align-items-center">
          {navItems.map((item) => (
            <li className="nav-item" key={item.label}>
              <a
                className={`nav-link ${activeLink === item.label ? 'active-nav' : ''}`}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-item ms-2">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? '\u2600 Light Mode' : '\uD83C\uDF19 Dark Mode'}
            </button>
          </li>
          <li className="nav-item ms-2">
            <a className="btn btn-danger" href="#email-section">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
