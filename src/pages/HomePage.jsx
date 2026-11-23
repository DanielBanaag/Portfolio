import { useEffect, useState } from 'react'
import ArrowMark from '../components/ArrowMark.jsx'
import { magneticHandlers } from '../components/motion.js'
import { profile } from '../data/portfolio.js'

const checklistSets = [
  {
    title: 'Form checks',
    label: 'CHECKING A FORM',
    items: [
      'Required fields are validated',
      'Error messages are clear',
      'Valid information can be submitted',
    ],
  },
  {
    title: 'Navigation checks',
    label: 'CHECKING NAVIGATION',
    items: [
      'Links open the right pages',
      'Keyboard focus is visible',
      'The layout works on mobile',
    ],
  },
  {
    title: 'Accessibility checks',
    label: 'CHECKING ACCESSIBILITY',
    items: [
      'Form fields have labels',
      'Text is readable',
      'Errors are easy to identify',
    ],
  },
]

export default function HomePage() {
  const [checklistIndex, setChecklistIndex] = useState(0)
  const [checkedItems, setCheckedItems] = useState(() => checklistSets[0].items.map(() => false))
  const [isFalling, setIsFalling] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const activeChecklist = checklistSets[checklistIndex]

  useEffect(() => {
    if (!isFalling) return undefined

    const timerId = window.setTimeout(() => {
      setIsFalling(false)

      if (checklistIndex === checklistSets.length - 1) {
        setIsComplete(true)
        return
      }

      const nextIndex = checklistIndex + 1
      setChecklistIndex(nextIndex)
      setCheckedItems(checklistSets[nextIndex].items.map(() => false))
    }, 880)
    return () => window.clearTimeout(timerId)
  }, [isFalling, checklistIndex])

  function advanceChecklist() {
    setIsFalling(false)

    if (checklistIndex === checklistSets.length - 1) {
      setIsComplete(true)
      return
    }

    const nextIndex = checklistIndex + 1
    setChecklistIndex(nextIndex)
    setCheckedItems(checklistSets[nextIndex].items.map(() => false))
  }

  function toggleChecklistItem(itemIndex) {
    if (isFalling || isComplete) return

    const nextCheckedItems = checkedItems.map((isChecked, index) => (
      index === itemIndex ? !isChecked : isChecked
    ))
    setCheckedItems(nextCheckedItems)

    if (nextCheckedItems.every(Boolean)) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        advanceChecklist()
      } else {
        setIsFalling(true)
      }
    }
  }

  function restartChecklist() {
    setChecklistIndex(0)
    setCheckedItems(checklistSets[0].items.map(() => false))
    setIsFalling(false)
    setIsComplete(false)
  }

  return (
    <section id="home" data-section="home" className="hero page-width portfolio-section" aria-labelledby="hero-title">
      <div className="hero__copy reveal">
        <h1 id="hero-title">{profile.name}<span className="hero__period">.</span></h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__intro">
          I’m Daniel M. Banaag, a Software Engineering student interested in QA and software testing. I am also experienced in frontend development and UI/UX design. I’m open to internship opportunities in QA, software development, web development, and other technical areas where I can learn and contribute.
        </p>
        <div className="hero__actions">
          <a className="button button--dark" href="#projects" {...magneticHandlers}>Explore projects <ArrowMark /></a>
          <a className="button button--outline" href="#contact" {...magneticHandlers}>Contact me <ArrowMark /></a>
        </div>
        <p className="hero__availability"><span aria-hidden="true"></span>Open to internship opportunities</p>
      </div>

      <div className="hero__artwork">
        <div className="profile-photo-placeholder reveal">
          <span className="profile-photo-placeholder__halo" aria-hidden="true"></span>
          <img
            className="profile-photo-placeholder__face"
            src="/4f123eac-36d9-4005-a5ec-5a92221eec36.jpg"
            alt="Daniel M. Banaag"
          />
        </div>
        <div className="qa-visual reveal" aria-label="Interactive QA practice checklist">
          <div className="qa-visual__topline">
            <span>FIELD NOTES / 001</span>
            <span>QA PRACTICE</span>
          </div>
          {isComplete ? (
            <div className="qa-sheet qa-sheet--complete">
              <span className="qa-sheet__icon" aria-hidden="true">✓</span>
              <p className="qa-complete__message" role="status">All checks complete. Nice work.</p>
              <button className="qa-restart" type="button" onClick={restartChecklist}>Restart checklist</button>
            </div>
          ) : (
            <div
              className={`qa-sheet${isFalling ? ' qa-sheet--falling' : ''}`}
            >
              <div className="qa-sheet__heading">
                <span className="qa-sheet__icon" aria-hidden="true">Q</span>
                <span>TEST CHECKLIST<small>Exploratory session</small></span>
                <span className="qa-sheet__dots" aria-hidden="true">...</span>
              </div>
              <div className="qa-sheet__rule"></div>
              <div className="qa-sheet__labels">
                <p className="qa-sheet__label">{activeChecklist.label}</p>
                <p className="qa-sheet__progress" aria-live="polite">Checklist {checklistIndex + 1} of {checklistSets.length}</p>
              </div>
              <p className="qa-sheet__set-title">{activeChecklist.title}</p>
              <ul className="check-list">
                {activeChecklist.items.map((item, index) => {
                  const inputId = `qa-check-${checklistIndex}-${index}`

                  return (
                    <li key={item}>
                      <label className="check-list__label" htmlFor={inputId}>
                        <input
                          className="check-list__input"
                          id={inputId}
                          type="checkbox"
                          checked={checkedItems[index]}
                          disabled={isFalling}
                          onChange={() => toggleChecklistItem(index)}
                        />
                        <span>{item}</span>
                      </label>
                      <span className="check-list__index">{String(index + 1).padStart(2, '0')}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="qa-sheet__footer"><span>OBSERVE</span><span>DOCUMENT</span><span>VERIFY</span></div>
            </div>
          )}
          <p className="qa-visual__caption"><span>+</span> A careful eye for the small things.</p>
        </div>
      </div>
    </section>
  )
}