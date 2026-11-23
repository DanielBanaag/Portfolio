import SectionHeading from '../components/SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

export default function SkillsPage() {
  const skillNames = skillGroups.flatMap((group) => group.skills)

  return (
    <section id="skills" data-section="skills" className="skills page-width section-space portfolio-section" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="TOOLS & SKILLS"
        titleId="skills-title"
        title="A toolkit in progress."
        description="Skills I am developing and tools I have used across coursework and projects."
      />
      <div className="skills__showcase">
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.number}>
              <div className="skill-group__heading"><h2>{group.title}</h2></div>
              <ul className="skill-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="skills-marquee reveal" role="region" aria-label="Skills and technologies" tabIndex={0}>
        <div className="skills-marquee__track">
          {[false, true].map((isDuplicate) => (
            <ul
              className={`skills-marquee__group${isDuplicate ? ' skills-marquee__group--duplicate' : ''}`}
              key={isDuplicate ? 'duplicate' : 'primary'}
              aria-hidden={isDuplicate || undefined}
            >
              {skillNames.map((skill, index) => <li key={`${skill}-${index}`}>{skill}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}