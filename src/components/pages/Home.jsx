import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Discover Timeless Artifacts</h1>
        <p>
          Explore a curated collection of sculptures, paintings, and historical
          artifacts from around the world.
        </p>
        <div className="hero-actions">
          <Link to="/gallery" className="btn btn-primary">
            Browse Gallery
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
      <div className="home-features">
        <div className="feature-card">
          <h3>Curated Collections</h3>
          <p>Hand-picked pieces spanning centuries of human history.</p>
        </div>
        <div className="feature-card">
          <h3>Detailed Stories</h3>
          <p>Every artifact tells the story of its era and culture.</p>
        </div>
        <div className="feature-card">
          <h3>For Collectors and Curators</h3>
          <p>Built for artists, collectors, and museum curators alike.</p>
        </div>
      </div>
    </section>
  )
}