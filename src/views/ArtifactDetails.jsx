import { Link, useParams } from 'react-router-dom'
import artifacts from '../data/artifacts'

export default function ArtifactDetails() {
  const { id } = useParams()
  const artifact = artifacts.find((a) => a.id === Number(id))

  if (!artifact) {
    return (
      <section className="artifact-details">
        <h1>Artifact not found</h1>
        <Link to="/gallery" className="btn btn-primary">
          Back to Gallery
        </Link>
      </section>
    )
  }

  return (
    <section className="artifact-details">
      <Link to="/gallery" className="back-link">
        &larr; Back to Gallery
      </Link>
      <div className="artifact-detail-card">
        <img
          src={artifact.image}
          alt={artifact.title}
          className="artifact-detail-image"
        />
        <div className="artifact-detail-info">
          <h1>{artifact.title}</h1>
          <p className="artifact-meta">
            <span className="artifact-category">{artifact.category}</span>
            <span className="artifact-year">{artifact.year}</span>
          </p>
          <p className="artifact-description">{artifact.description}</p>
        </div>
      </div>
    </section>
  )
}