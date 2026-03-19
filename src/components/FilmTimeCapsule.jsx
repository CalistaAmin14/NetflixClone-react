import { useState, useEffect } from 'react'

/**
 * FilmTimeCapsule Component
 * Feature 2 — Form Validation using state
 * Feature 7 (Bonus) — localStorage with useEffect
 */
function FilmTimeCapsule() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [memory, setMemory] = useState('')
  const [message, setMessage] = useState({ text: '', color: '' })
  const [capsules, setCapsules] = useState([])

  // Static demo capsules
  const demoCapsules = [
    { title: 'The Midnight Bike', year: '1999', memory: 'Watched during a thunderstorm — comfort film.' },
    { title: 'City Lights', year: '1931', memory: 'Silent scenes made me notice small things.' },
  ]

  // Load capsules from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('filmCapsules') || '[]')
    setCapsules(saved)
  }, [])

  // Save capsules to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('filmCapsules', JSON.stringify(capsules))
  }, [capsules])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Form validation using state
    if (!title.trim() || !year.trim() || !memory.trim()) {
      setMessage({ text: '\u26A0 Please fill in all fields.', color: '#ff6b6b' })
      return
    }

    // Add new capsule
    const newCapsules = [...capsules, { title: title.trim(), year: year.trim(), memory: memory.trim() }]
    setCapsules(newCapsules)

    // Success feedback
    setMessage({ text: '\u2705 Capsule saved!', color: '#2ecc71' })
    setTitle('')
    setYear('')
    setMemory('')

    // Clear message after 3 seconds
    setTimeout(() => setMessage({ text: '', color: '' }), 3000)
  }

  const handleClear = () => {
    setCapsules([])
    localStorage.removeItem('filmCapsules')
  }

  const allCapsules = [...demoCapsules, ...[...capsules].reverse()]

  return (
    <section className="capsule-section py-5" id="capsule-section">
      <div className="container">
        <h2 className="text-center text-white mb-3">Film Time Capsule</h2>
        <p className="text-center text-white mb-4">
          Capture a movie moment &mdash; leave a short memory, recommendation, or nostalgic note.
        </p>

        <div className="row align-items-start">
          <div className="col-md-5 mb-3">
            <div className="capsule-card p-4 rounded-3">
              <h4 className="mb-2 text-white">Create a Capsule</h4>
              <form className="mt-3" onSubmit={handleSubmit} noValidate>
                <input
                  className="form-control mb-2 bg-transparent text-white border-secondary"
                  placeholder="Movie title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  className="form-control mb-2 bg-transparent text-white border-secondary"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                <textarea
                  className="form-control mb-2 bg-transparent text-white border-secondary"
                  rows="3"
                  placeholder="Why this film matters..."
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                />
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-outline-light">Save to Capsule</button>
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleClear}>
                    Clear All
                  </button>
                </div>
                {message.text && (
                  <p className="small mt-2 mb-0" style={{ color: message.color }}>{message.text}</p>
                )}
              </form>
              <p className="small text-secondary mt-3">Stored locally in your browser.</p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="capsule-grid">
              {allCapsules.map((cap, index) => (
                <article className="capsule bg-dark text-white p-3 rounded-3" key={index}>
                  <h5>{cap.title}</h5>
                  <small className="text-secondary">{cap.year}</small>
                  <p className="mt-2 mb-0">{cap.memory}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmTimeCapsule
