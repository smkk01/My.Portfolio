import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../data/profile.json'
import resumeUrl from '../assets/resume/Khin-Khin-Su-Mon-Resume.pdf'

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [typedTitle, setTypedTitle] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = profile.typingTitles[titleIndex]
    const isComplete = typedTitle === currentTitle
    const delay = isComplete ? 1500 : isDeleting ? 45 : 90
    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true)
      } else if (isDeleting && typedTitle.length === 0) {
        setIsDeleting(false)
        setTitleIndex((index) => (index + 1) % profile.typingTitles.length)
      } else {
        setTypedTitle(currentTitle.slice(0, typedTitle.length + (isDeleting ? -1 : 1)))
      }
    }, delay)
    return () => window.clearTimeout(timer)
  }, [isDeleting, titleIndex, typedTitle])

  return (
    <section className="hero-section">
      <div className="container-narrow hero-grid">
        <div className="hero-copy" data-aos="fade-up">
          <span className="eyebrow"><span className="availability-dot" /> {profile.title} · {profile.location}</span>
          <h1>Hi, I&apos;m <span className="text-primary">{profile.name}</span></h1>
          <div className="hero-role" aria-label={profile.typingTitles[titleIndex]}>{typedTitle}<span className="typing-caret" aria-hidden="true">|</span></div>
          <p className="hero-summary">{profile.summary}</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a className="btn btn-primary btn-lg" href={resumeUrl} download="Khin-Khin-Su-Mon-Resume.pdf"><i className="bi bi-download me-2" />Download résumé</a>
            <Link className="btn btn-outline-primary btn-lg" to="/contact">Contact me <i className="bi bi-arrow-up-right ms-1" /></Link>
            <Link className="btn btn-link btn-lg text-decoration-none" to="/projects">View projects <i className="bi bi-arrow-right ms-1" /></Link>
          </div>
          <div className="hero-socials">
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><i className="bi bi-github" /></a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><i className="bi bi-linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="bi bi-envelope" /></a>
          </div>
        </div>
        <div className="hero-art" data-aos="zoom-in" data-aos-delay="150" aria-label="Developer illustration">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-avatar"><i className="bi bi-person-workspace" /></div>
          <div className="floating-chip chip-code"><i className="bi bi-code-slash" /> C# · .NET</div>
          <div className="floating-chip chip-cloud"><i className="bi bi-cloud-check" /> Cloud</div>
          <div className="floating-chip chip-react"><i className="bi bi-layers" /> React</div>
          <div className="hero-art-caption"><strong>20+ years</strong><span>building software that works</span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero