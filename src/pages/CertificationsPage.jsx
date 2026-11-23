import SectionHeading from '../components/SectionHeading.jsx'

const certifications = [
  { title: 'Software Testing Foundations: Bug Writing and Management', issuer: 'LinkedIn Learning', date: 'November 21, 2026', url: 'https://www.linkedin.com/learning/certificates/f5846effe7709a342395c5def3e400c2ec41e5f9005cc12b5026a436dc93a137?u=1112' },
  { title: 'Introduction to Agent Skills by Anthropic', issuer: 'LinkedIn Learning', date: 'November 13, 2026', url: 'https://www.linkedin.com/learning/certificates/ff9fbfe6592018eaa2da468b80d6f57c2f4dde795a04e4f080d97096268ee1ff?u=1112' },
  { title: 'Introduction to Prompt Engineering for Generative AI', issuer: 'LinkedIn Learning', date: 'November 13, 2026', url: 'https://www.linkedin.com/learning/certificates/987abb0445ccc42671acafdcb72a3af030564c91e72b91af8beb6d500944ef5d?u=1112' },
  { title: 'Learning MATLAB', issuer: 'LinkedIn Learning', date: 'October 27, 2025', url: 'https://www.linkedin.com/learning/certificates/b118ad3ac0a8a22f7a7fc7356edb1080a88fd51d3dc3e00d453b09d94e55e8fe?u=1112' },
  { title: 'Software Testing Foundations: Test Techniques', issuer: 'LinkedIn Learning', date: 'November 12, 2026', url: 'https://www.linkedin.com/learning/certificates/83750d0d9ab6738c29e5967349a080b8e0995a193b0e67406d0ee100a753c8d8?u=1112' },
  { title: 'Software Testing Foundations: Building a Career in Quality', issuer: 'LinkedIn Learning', date: 'November 11, 2026', url: 'https://www.linkedin.com/learning/certificates/a54cc4ae3e9fb3b2fff6bf785590de1cf093ba8c6dd3e15623cf6fae72c02152?u=1112' },
  { title: 'Using Git with Visual Studio Code', issuer: 'LinkedIn Learning', date: 'October 26, 2025', url: 'https://www.linkedin.com/learning/certificates/e8aab8bf4aa4375db7e2db45cdb3b11f17423131d8713ad69fcfa70a236f7a1b?u=1112' },
  { title: 'Information Technology Specialist in Python', issuer: 'Certiport', date: 'July 15, 2025', url: 'https://www.credly.com/badges/69d9ec60-3a0b-4d44-9ce8-e76f1264d7b8/public_url' },
  { title: 'PMI Project Management Ready', issuer: 'PMI / Certiport', date: 'March 3, 2026', url: 'https://www.credly.com/badges/c2850195-e4b7-45bb-84e0-5a3fde711474' },
]

export default function CertificationsPage() {
  return (
    <section id="certifications" data-section="certifications" className="certifications page-width section-space portfolio-section" aria-labelledby="certifications-title">
      <SectionHeading
        eyebrow="CONTINUED LEARNING"
        titleId="certifications-title"
        title="Certifications."
        description="Certificates and learning milestones from coursework and independent study."
      />
      <div className="certifications__content">
        <div className="certification-list" aria-label="Certification list">
          {certifications.map((certification) => (
            <article className="certificate-row reveal" key={`${certification.title}-${certification.date}-${certification.url ?? certification.issuer}`}>
              <div className="certificate-row__main">
                <h2>{certification.title}</h2>
                <p>{certification.issuer} <span aria-hidden="true">/</span> <time>{certification.date}</time></p>
              </div>
              {certification.url && (
                <a className="certificate-row__link" href={certification.url} target="_blank" rel="noopener noreferrer">
                  View Certificate ↗
                </a>
              )}
            </article>
          ))}

          <div className="achievements-block reveal" aria-labelledby="achievements-title">
            <p className="achievements-block__eyebrow">ACHIEVEMENTS</p>
            <article className="achievement-card">
              <span className="achievement-card__place" aria-hidden="true">2nd</span>
              <div>
                <h2 id="achievements-title">2nd Place, Best Project in Design Thinking</h2>
                <p>PETCetera, a social media project for pets</p>
                <p>FEU Institute of Technology <span aria-hidden="true">/</span> <time>2025</time></p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}