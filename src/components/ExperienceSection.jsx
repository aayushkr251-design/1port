import SectionHeading from './SectionHeading.jsx'

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner experience-layout">
        <SectionHeading
          number="04"
          eyebrow="Experience"
          title={<>Learning by<br />making things.</>}
          description="Professional experience will be added here when role details are confirmed."
        />
        <div className="experience-placeholder">
          <span className="placeholder-index">EXPERIENCE / 01</span>
          <div className="placeholder-symbol" aria-hidden="true">+</div>
          <h3>Your next chapter</h3>
          <p>
            Add verified organization, role, dates, and responsibilities here.
            BizNeeti-related experience can be included once those details are confirmed.
          </p>
          <span className="editable-note">EDITABLE PLACEHOLDER</span>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
