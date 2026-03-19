/**
 * MovieSlider Component (Reusable)
 * Props: title, movies (array of { id, image, alt, badge })
 * Demonstrates props usage — receives movie data from parent
 */
function MovieSlider({ title, movies }) {
  return (
    <section className="container-fluid py-5 slider-section" id={title.toLowerCase().includes('popular') ? 'popular-section' : 'trending-section'}>
      <h3 className="text-white px-4 d-flex align-items-center gap-2">
        <span></span> {title}
      </h3>
      <div className="movie-slider px-4">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <img src={movie.image} alt={movie.alt} />
            {movie.badge && <div className="movie-badge">{movie.badge}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MovieSlider
