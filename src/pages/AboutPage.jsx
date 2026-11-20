import SectionHeading from '../components/SectionHeading.jsx'
import CharacterIllustration from '../components/CharacterIllustration.jsx'

export default function AboutPage() {
  return (
    <section id="about" data-section="about" className="about section-band portfolio-section" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading
          number="01"
          eyebrow="A LITTLE ABOUT ME"
          titleId="about-title"
          title={<>Curious by nature.<br />Careful by practice.</>}
          description="I am a Software Engineering student with a main interest in QA and software testing. I am also developing my frontend and UI/UX skills, and I am open to learning and contributing as part of a team."
        />
        <div className="about__body">
          <div className="about__note reveal">
            <span className="about__note-mark" aria-hidden="true">/</span>
            <p>I am ready to learn from a team and contribute while building my experience in software quality.</p>
            <span className="about__note-label">HOW I APPROACH THE WORK</span>
          </div>
          <CharacterIllustration pose="desk" />
        </div>
      </div>
    </section>
  )
}