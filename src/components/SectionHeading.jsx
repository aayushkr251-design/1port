function SectionHeading({ eyebrow, title, number, description }) {
  return (
    <div className="section-heading">
      {number && <span className="section-number">{number}</span>}
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeading
