import SectionHeading from '../components/SectionHeading.jsx'
import CharacterIllustration from '../components/CharacterIllustration.jsx'
import ArrowMark from '../components/ArrowMark.jsx'

export default function ProjectsPage() {
  return (
    <section id="projects" data-section="projects" className="projects section-band portfolio-section" aria-labelledby="projects-title">
      <div className="page-width">
        <SectionHeading
          number="03"
          eyebrow="SELECTED WORK"
          titleId="projects-title"
          title="Projects & contributions."
          description="A closer look at the work I can share and the part I played in it."
        />
        <div className="projects__showcase">
          <article className="project-card reveal">
            <div className="project-card__details">
              <div className="project-card__meta"><span>TEAM THESIS PROJECT</span><span>01 / 01</span></div>
              <h2>MANA</h2>
              <p className="project-card__formal-name">Manila Advisory Network Alert</p>
              <p className="project-card__summary">MANA is a disaster response social media analytics system that turns Facebook and X posts into cluster-based emergency insights, sentiment scores, priority monitoring, and recommendations for local government disaster teams.</p>
              <div className="project-card__role">
                <span className="detail-label">MY CONTRIBUTION</span>
                <p>UI/UX design in Figma</p>
              </div>
              <div className="project-card__role">
                <span className="detail-label">TOOL</span>
                <p>Figma</p>
              </div>
              <div className="project-card__links">
                <a className="button button--dark" href="https://mana-by-cosmos.onrender.com/" target="_blank" rel="noreferrer">View MANA <ArrowMark /></a>
                <span className="placeholder-link">Screenshot to add</span>
              </div>
            </div>
            <div className="project-card__visual" aria-label="Placeholder for a MANA project screenshot">
              <div className="project-window">
                <div className="project-window__bar"><span></span><span></span><span></span><small>MANA / PREVIEW</small></div>
                <div className="project-window__body">
                  <span className="project-window__caption">PROJECT VISUAL</span>
                  <div className="project-window__art" aria-hidden="true"><span></span><span></span><span></span></div>
                  <p>Screenshot placeholder</p>
                  <small>Replace with an image you can share</small>
                </div>
              </div>
            </div>
          </article>
          <CharacterIllustration pose="laptop" />
        </div>
        <p className="projects__note reveal"><span aria-hidden="true">+</span> More projects can be added here when you are ready to share their details.</p>
      </div>
    </section>
  )
}