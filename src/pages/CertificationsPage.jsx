import SectionHeading from '../components/SectionHeading.jsx'
import CharacterIllustration from '../components/CharacterIllustration.jsx'

export default function CertificationsPage() {
  return (
    <section id="certifications" data-section="certifications" className="certifications page-width section-space portfolio-section" aria-labelledby="certifications-title">
      <SectionHeading
        number="04"
        eyebrow="CONTINUED LEARNING"
        titleId="certifications-title"
        title="Certifications."
        description="Relevant certificates and learning milestones."
      />
      <div className="certifications__content">
        <article className="certificate-row reveal">
          <span className="certificate-row__number">01</span>
          <div className="certificate-row__main">
            <h2>Add certification name</h2>
            <p>Issuing organization / date to add</p>
          </div>
          <span className="certificate-row__link">Add certificate link</span>
        </article>
        <CharacterIllustration pose="certificate" />
      </div>
    </section>
  )
}