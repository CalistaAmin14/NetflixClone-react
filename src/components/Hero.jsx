/**
 * Hero Component
 * Feature 1 — "Join Now" button triggers modal via callback prop
 * Props: onJoinNow
 */
function Hero({ onJoinNow }) {
  return (
    <header className="hero-section text-white d-flex align-items-center" id="hero-section">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Unlimited Entertainment</h1>
        <p className="lead">Watch movies and shows anytime, anywhere.</p>
        <button className="btn btn-danger btn-lg" onClick={onJoinNow}>
          Join Now
        </button>
      </div>
    </header>
  )
}

export default Hero
