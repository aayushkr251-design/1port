import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />

        <section className="section about-section" id="about">
          <div className="section-inner about-layout">
            <SectionHeading
              eyebrow="A little about me"
              title={<>Creative thinking.<br />Practical digital work.</>}
            />
            <div className="about-copy">
              <p className="lead-copy">
                I’m Aayush Kumar, a digital creative working across marketing,
                design, websites, and social media.
              </p>
              <p>
                I’m interested in how thoughtful branding, useful content, and
                well-planned digital experiences can help a business show up
                with more clarity. I enjoy bringing those pieces together—from
                shaping a visual idea to building a website or exploring an
                AI-assisted workflow.
              </p>
              <p>
                My approach is curious and hands-on: understand the goal, make
                the work feel considered, and keep improving the details.
              </p>
              <a className="text-link" href="#contact">
                Have a project in mind? <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
