import { useState } from 'react'
import { Link } from 'react-router-dom'
import artifacts from '../../data/artifacts'

export default function Gallery() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const categories = [...new Set(artifacts.map((artifact) => artifact.category))]

  const filtered = artifacts.filter((artifact) => {
    const matchesSearch = artifact.title
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesCategory = category === '' || artifact.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <section className="gallery">
      <h1>Japan Artifact Gallery</h1>
      <p className="gallery-subtitle">
        Explore our collection of Japanese artifacts.
      </p>

      <div className="gallery-controls">
        <input
          type="search"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No artifacts match your search.</p>
      ) : (
        <div className="artifact-grid">
          {filtered.map((artifact) => (
            <Link
              to={`/artifacts/${artifact.id}`}
              key={artifact.id}
              className="artifact-card"
            >
              <img
                src={artifact.image}
                alt={artifact.title}
                className="artifact-image"
              />
              <div className="artifact-info">
                <h3 className="artifact-title">{artifact.title}</h3>
                <p className="artifact-meta">
                  <span className="artifact-category">
                    {artifact.category}
                  </span>
                  <span className="artifact-year">{artifact.year}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}