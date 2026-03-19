/**
 * FeaturedCollections Component
 * Props: collections (array of { id, image, title, subtitle })
 * Demonstrates props usage — receives collection data from parent
 */
function FeaturedCollections({ collections }) {
  return (
    <section className="container py-5 featured-collections" id="collections-section">
      <h2 className="section-title mb-5">Featured Collections</h2>
      <div className="row g-4">
        {collections.map((col) => (
          <div className="col-md-6 col-lg-3" key={col.id}>
            <div className="collection-card">
              <img src={col.image} alt={col.title} className="collection-img" />
              <div className="collection-overlay">
                <h4>{col.title}</h4>
                <p>{col.subtitle}</p>
                <button className="btn btn-sm btn-danger">Explore &rarr;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCollections
