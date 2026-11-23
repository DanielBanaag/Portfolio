import SectionHeading from '../components/SectionHeading.jsx'

const education = [
  {
    degree: 'BS Computer Science',
    school: 'FEU Institute of Technology',
    detail: 'Specialization in Software Engineering',
    date: '2023–Present',
  },
  {
    degree: 'Senior High School',
    school: 'Lorenzo Ruiz De Manila School',
    detail: null,
    date: '2019–2021',
  },
]

export default function AboutPage() {
  return (
    <section id="about" data-section="about" className="about section-band portfolio-section" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          titleId="about-title"
          title={<>Thoughtful in design.<br />Thorough in testing.</>}
          description="I am a Software Engineering student with a main interest in QA and software testing. I am also developing my frontend and UI/UX skills, and I am open to learning and contributing as part of a team."
        />
        <div className="about__education reveal">
          <p className="eyebrow">EDUCATION</p>
          <div className="education__cards">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-card__body">
                  <h2>{item.degree}</h2>
                  <div className="education-card__details">
                    <p className="education-card__school">{item.school}</p>
                    {item.detail && <p className="education-card__detail">{item.detail}</p>}
                  </div>
                  <time className="education-card__date">{item.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}