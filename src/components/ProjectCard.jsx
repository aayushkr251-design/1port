function ProjectCard({ project }) {
  const imageFitClass = project.imageFit === 'contain' ? ' project-card--contain-image' : ''

  return (
    <article className={`project-card ${project.tone}${imageFitClass}`}>
      <div
        className={`project-preview${project.image ? ' has-image' : ''}`}
        aria-label={`${project.title} project preview`}
      >
        {project.image ? (
          <img
            className="project-preview-image"
            src={project.image}
            alt={project.imageAlt || `${project.title} social media creative`}
          />
        ) : (
          <>
            <span className="preview-label">PROJECT PREVIEW</span>
            <span className="preview-mark" aria-hidden="true">{project.number}</span>
            <span className="preview-instruction">Add verified project image</span>
          </>
        )}
        <span className="preview-corner" aria-hidden="true">↗</span>
      </div>
      <div className="project-meta">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-note">{project.note}</p>
        </div>
        <span className="project-number">{project.number}</span>
      </div>
    </article>
  )
}

export default ProjectCard
