import SectionHeading from './SectionHeading.jsx'

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner experience-layout">
        <SectionHeading
          number="04"
          eyebrow="Experience"
          title={<>Practical Experience.<br />Real Projects.</>}
          description="Hands-on experience across digital marketing, creative design, social media content, and website-related projects, with a focus on practical execution and continuous learning."
        />
        <div className="experience-placeholder">
          <div className="experience-topline">
            <span className="placeholder-index">EXPERIENCE / 01</span>
            <span className="experience-duration">May 2026 – Present</span>
          </div>
          <h3>BizNeeti</h3>
          <p className="experience-role">Digital Marketing, Creative Design &amp; Business Support</p>
          <p className="experience-description">
            Working across creative and digital projects, contributing to social media creatives,
            digital marketing activities, content development, and website-related work. Gaining
            practical experience through project execution, collaboration, and continuous skill
            development.
          </p>
          <ul className="experience-responsibilities">
            <li>Social media creative design and visual content development.</li>
            <li>Support for digital marketing activities and Meta Ads campaigns.</li>
            <li>Content creation and brand communication.</li>
            <li>Website-related project work and digital business support.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
