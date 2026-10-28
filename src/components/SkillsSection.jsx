import SectionHeading from './SectionHeading.jsx'

const skills = [
  { number: '01', name: 'Digital Marketing', detail: 'Campaign thinking & digital presence' },
  { number: '02', name: 'Meta Ads', detail: 'Facebook & Instagram advertising' },
  { number: '03', name: 'Canva Graphic Design', detail: 'Visuals for digital platforms' },
  { number: '04', name: 'Shopify', detail: 'E-commerce website development' },
  { number: '05', name: 'WordPress', detail: 'Website development & content' },
  { number: '06', name: 'Social Media', detail: 'Planning, publishing & management' },
  { number: '07', name: 'WhatsApp API', detail: 'Business messaging workflows' },
  { number: '08', name: 'Content Creation', detail: 'Ideas, copy & creative formats' },
  { number: '09', name: 'Branding', detail: 'Brand identity & personal branding' },
  { number: '10', name: 'Basic SEO', detail: 'Search-friendly foundations' },
  { number: '11', name: 'AI Tools', detail: 'ChatGPT, Gemini & AI workflows' },
]

function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionHeading
          number="02"
          eyebrow="What I bring"
          title={<>Creative skills,<br />connected to strategy.</>}
          description="A practical mix of marketing, creative, and web skills for building a more cohesive digital presence."
        />
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.number}>
              <span className="skill-number">{skill.number}</span>
              <span className="skill-arrow" aria-hidden="true">↗</span>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
