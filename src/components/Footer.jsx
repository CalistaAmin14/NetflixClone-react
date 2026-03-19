import { useState, useEffect } from 'react'
import { footerLinks } from '../data/data'

/**
 * Footer Component
 * Feature 2 — Email form validation using state
 * Feature 7 (Bonus) — Visit counter with localStorage + useEffect
 */
function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [inputClass, setInputClass] = useState('')
  const [visitCount, setVisitCount] = useState(0)

  // Visit counter — localStorage bonus (useEffect)
  useEffect(() => {
    let visits = parseInt(localStorage.getItem('visitCount') || '0', 10)
    visits += 1
    localStorage.setItem('visitCount', String(visits))
    setVisitCount(visits)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setInputClass('')

    const value = email.trim()

    if (value === '') {
      setError('\u26A0 Email address cannot be empty.')
      setInputClass('input-error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setError('\u26A0 Please enter a valid email address (e.g. user@example.com).')
      setInputClass('input-error')
      return
    }

    setInputClass('input-ok')
    setSuccess(`\u2705 Great! We'll send your link to ${value}. Check your inbox!`)
    setEmail('')
  }

  return (
    <section className="bg-dark text-light pt-5 pb-4" id="email-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 text-center">
            <p className="h5 mb-3">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit} noValidate>
              <div className="input-group input-group-lg w-75">
                <input
                  type="email"
                  className={`form-control bg-secondary bg-opacity-10 text-light border-secondary ${inputClass}`}
                  placeholder="Email address"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-danger ms-2" type="submit">
                  Get Started &rarr;
                </button>
              </div>
              {error && <p className="email-error mt-2 mb-0">{error}</p>}
              {success && <p className="email-success mt-2 mb-0">{success}</p>}
            </form>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="mb-0">
              Questions? Call{' '}
              <a href="tel:0008009191743" className="text-decoration-underline text-secondary">
                000-800-919-1743
              </a>
            </p>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-3 mb-4">
          {footerLinks.map((col, i) => (
            <div className="col" key={i}>
              <ul className="list-unstyled">
                {col.map((link) => (
                  <li key={link}>
                    <a className="text-secondary text-decoration-underline" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="row align-items-center mb-3">
          <div className="col-auto">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                &#127760; English
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item">English</button></li>
                <li><button className="dropdown-item">&#2361;&#2367;&#2306;&#2342;&#2368;</button></li>
                <li><button className="dropdown-item">Espa&#241;ol</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="mb-1 text-secondary">Netflix India</p>
            <p className="small text-muted mb-1">
              You have visited this page {visitCount} time{visitCount !== 1 ? 's' : ''}.
            </p>
            <small className="text-muted">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <a href="#" className="link-primary">Learn more.</a>
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
