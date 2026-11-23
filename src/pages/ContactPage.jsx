import ArrowMark from '../components/ArrowMark.jsx'
import { profile } from '../data/portfolio.js'

export default function ContactPage() {
  return (
    <section id="contact" data-section="contact" className="contact portfolio-section" aria-labelledby="contact-title">
      <div className="page-width contact__inner">
        <div className="contact__content">
          <div className="contact__intro reveal">
            <p className="eyebrow">CONTACT</p>
            <h1 id="contact-title">Let’s make<br />something work well.</h1>
            <p>I would be glad to connect about an internship, a project, or a chance to learn.</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}<ArrowMark /></a>
          </div>
        </div>
        <div className="contact__links reveal" aria-label="Contact links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><span>View profile <ArrowMark /></span></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><span>GITHUB</span><span>View profile <ArrowMark /></span></a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer"><span>RÉSUMÉ</span><span>PDF placeholder <ArrowMark /></span></a>
        </div>
      </div>
      <footer className="site-footer page-width">
        <span>{profile.name} / Portfolio</span>
        <span>Made with curiosity and care.</span>
        <a href="#home">Back to home <ArrowMark /></a>
      </footer>
    </section>
  )
}