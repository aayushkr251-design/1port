import SectionHeading from './SectionHeading.jsx'

const areas = [
  {
    id: 'education-details',
    label: 'Education',
    copy: 'Add your education details when ready.',
  },
  {
    id: 'certifications',
    label: 'Certifications',
    copy: 'Add verified certificates and course details.',
  },
  {
    id: 'seminars',
    label: 'Seminars',
    copy: 'Add seminars or events you have attended.',
  },
]

function EducationSection() {
  return (
    <section className="section education-section" id="education">
      <div className="section-inner">
        <SectionHeading
          number="05"
          eyebrow="Learning & development"
          title={<>Always building<br />new perspective.</>}
          description="These sections are intentionally left open for accurate, verified details."
        />
        <div className="education-grid">
          {areas.map((area, index) => (
            <article className="education-card" key={area.id}>
              <span className="education-index">0{index + 1}</span>
              <h3>{area.label}</h3>
              <p>{area.copy}</p>
              <span className="editable-note">DETAILS TO BE ADDED</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
