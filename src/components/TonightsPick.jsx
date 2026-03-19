import { useState } from 'react'

/**
 * Tonight's Pick Component
 * Feature 1 — "Watch Now" triggers modal, "My List" toggles button state
 * Props: onWatchNow
 */
function TonightsPick({ onWatchNow }) {
  const [addedToList, setAddedToList] = useState(false)

  return (
    <section className="container py-5" id="tonights-pick">
      <h2 className="section-title mb-4">&#127916; Tonight's Pick</h2>

      <div className="pick-card-upgraded d-flex align-items-center gap-4 position-relative">
        <div className="badge-trending position-absolute" style={{ top: 15, right: 15 }}>
          TRENDING
        </div>
        <img src="/images/movie7.webp" alt="Jolly LLB 3 poster" className="pick-poster" />

        <div className="pick-content">
          <div className="d-flex align-items-center gap-2 mb-2">
            <h3 style={{ margin: 0 }}>Jolly LLB 3</h3>
            <span className="badge-rating">&#11088; 8.2/10</span>
          </div>

          <div className="d-flex gap-2 mb-3">
            <span className="badge-quality">4K</span>
            <span className="badge-quality">HD</span>
            <span className="badge-quality">Dolby</span>
          </div>

          <p className="text-muted">
            "A sharp-witted lawyer returns to the courtroom to fight corruption, challenge powerful
            forces, and prove that justice can still prevail."
          </p>

          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-danger btn-lg" onClick={onWatchNow}>
              &#9654; Watch Now
            </button>
            <button
              className={`btn btn-lg ${addedToList ? 'btn-success' : 'btn-outline-light'}`}
              disabled={addedToList}
              onClick={() => setAddedToList(true)}
            >
              {addedToList ? '\u2714 Added to List' : '+ My List'}
            </button>
          </div>

          <div className="mt-3 d-flex gap-3">
            <div className="text-info small">&#128250; Drama, Thriller</div>
            <div className="text-info small">&#9201; 2h 15m</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TonightsPick
