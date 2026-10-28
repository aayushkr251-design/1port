import SectionHeading from './SectionHeading.jsx'

const contactItems = ['Email', 'LinkedIn', 'Instagram']

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <div className="contact-intro">
          <SectionHeading
            number="06"
            eyebrow="Let’s create something"
            title={<>Good ideas start<br />with a conversation.</>}
            description="Have a project, opportunity, or collaboration in mind? I’d be glad to hear about it."
          />
          <div className="contact-details">
            <p className="contact-details-label">FIND ME HERE</p>
            {contactItems.map((item) => (
              <div className="contact-detail" key={item}>
                <span>{item}</span>
                <span className="detail-placeholder">Add {item.toLowerCase()} details</span>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" aria-label="Contact form preview">
          <p className="form-eyebrow">SEND A NOTE</p>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="Name" autoComplete="name" />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          <label htmlFor="contact-message">A little about your project</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me what you have in mind..." />
          <button className="button button-gold form-button" type="button" disabled>
            Form preview — not connected <span aria-hidden="true">↗</span>
          </button>
          <p className="form-notice">
            This form does not send messages yet. Add a verified contact method or connect a form service to enable submissions.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
