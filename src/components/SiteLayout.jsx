import { useEffect, useState } from 'react'
import ArrowMark from './ArrowMark.jsx'
import { magneticHandlers } from './motion.js'
import { profile } from '../data/portfolio.js'
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import SkillsPage from '../pages/SkillsPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import CertificationsPage from '../pages/CertificationsPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
]

function SiteHeader({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name} home`} onClick={closeMenu}>
          <span className="wordmark__stamp">QA</span>
          <span>{profile.name}<small>Portfolio / 2026</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span>
        </button>
        <nav
          className={`main-navigation${menuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              href={`#${item.id}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`navigation-contact${activeSection === 'contact' ? ' is-active' : ''}`}
            href="#contact"
            onClick={closeMenu}
            {...magneticHandlers}
          >
            Get in touch <ArrowMark />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default function SiteLayout() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const revealElements = document.querySelectorAll('#main .reveal:not(.is-visible)')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 680px)').matches

    if (prefersReducedMotion || isMobile || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' })

      revealElements.forEach((element, index) => {
        element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 55}ms`)
        const bounds = element.getBoundingClientRect()
        const isInViewport = bounds.top < window.innerHeight - 20 && bounds.bottom > 0

        if (isInViewport) {
          element.classList.add('is-visible')
        } else {
          revealObserver.observe(element)
        }
      })

      return () => revealObserver.disconnect()
    }

    return undefined
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('#main [data-section]'))

    function updateActiveSection() {
      const marker = window.innerHeight * 0.38
      let current = sections[0]?.dataset.section ?? 'home'

      for (const section of sections) {
        const bounds = section.getBoundingClientRect()
        if (bounds.top <= marker && bounds.bottom > marker) {
          current = section.dataset.section
          break
        }
      }

      setActiveSection(current)

      if (window.location.hash !== `#${current}`) {
        window.history.replaceState(null, '', `#${current}`)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    let sectionObserver
    if ('IntersectionObserver' in window) {
      sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.dataset.section) {
          const current = visible.target.dataset.section
          setActiveSection(current)
          if (window.location.hash !== `#${current}`) {
            window.history.replaceState(null, '', `#${current}`)
          }
        }
      }, { rootMargin: '-82px 0px -45% 0px', threshold: [0.2, 0.5, 0.75] })

      sections.forEach((section) => sectionObserver.observe(section))
    }

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      sectionObserver?.disconnect()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader activeSection={activeSection} />
      <main id="main">
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <CertificationsPage />
        <ContactPage />
      </main>
    </>
  )
}