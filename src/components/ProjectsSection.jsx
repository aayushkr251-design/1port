import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    number: '01',
    category: 'Creative & digital',
    title: 'BizNeeti',
    note: 'Selected social media creative designed for BizNeeti, showcasing visual communication, branding, and digital marketing creativity.',
    image: '/bizneeti-project.png',
    tone: 'tone-olive',
  },
  {
    number: '02',
    category: 'Paid social',
    title: 'Meta Ads',
    note: 'Add approved campaign visuals; no performance claims included.',
    tone: 'tone-violet',
  },
  {
    number: '03',
    category: 'Visual identity',
    title: 'Graphic design',
    note: 'Add selected designs and the context behind each piece.',
    tone: 'tone-sand',
  },
  {
    number: '04',
    category: 'E-commerce',
    title: 'Shopify websites',
    note: 'Add verified storefront screenshots and project details.',
    tone: 'tone-blue',
  },
  {
    number: '05',
    category: 'Web development',
    title: 'WordPress websites',
    note: 'Add verified website previews and your role in the work.',
    tone: 'tone-rose',
  },
  {
    number: '06',
    category: 'Social presence',
    title: 'Social media',
    note: 'Add approved creative samples and relevant context.',
    tone: 'tone-ochre',
  },
]

function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <div className="projects-heading">
          <SectionHeading
            number="03"
            eyebrow="Selected work"
            title={<>A place for work<br />that speaks for itself.</>}
            description="A portfolio in progress. Each card is an editable placeholder—replace it with verified images and details when ready."
          />
          <span className="project-count">06 / PROJECT AREAS</span>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
