import { useEffect, useMemo, useState } from 'react'
import experience from '../data/experience.json'
import { refreshAnimations } from '../services/animations.js'

function Experience({ preview = false }) {
  const [company, setCompany] = useState('All companies')
  const [query, setQuery] = useState('')
  const entries = useMemo(() => {
    const searchableEntries = preview ? experience.slice(0, 1) : experience
    const normalizedQuery = query.trim().toLowerCase()
    return searchableEntries.filter((item) => {
      const matchesCompany = company === 'All companies' || item.company === company
      const searchableText = [
        item.company,
        item.role,
        item.period,
        ...item.achievements,
        ...item.technologies,
      ].join(' ').toLowerCase()
      return matchesCompany && searchableText.includes(normalizedQuery)
    })
  }, [company, preview, query])

  const updateFilter = (setter) => (event) => setter(event.target.value)

  useEffect(() => {
    if (!preview) refreshAnimations({ hard: true })
  }, [entries, preview])

  return (
    <>
      {!preview && (
        <div className="experience-controls">
          <label className="experience-company-filter">
            <span>Filter by company</span>
            <select value={company} onChange={updateFilter(setCompany)} aria-label="Filter experience by company">
              <option>All companies</option>
              {experience.map((item) => <option key={item.company}>{item.company}</option>)}
            </select>
          </label>
          <label className="experience-search">
            <i className="bi bi-search" aria-hidden="true" />
            <input type="search" value={query} onChange={updateFilter(setQuery)} placeholder="Search experience" aria-label="Search experience" />
          </label>
        </div>
      )}
      <div className="experience-list">
        {entries.map((item, index) => {
          const expandedByDefault = preview || item.company === experience[0].company
          return expandedByDefault ? (
          <article className="experience-entry" key={item.company} data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="experience-marker"><i className="bi bi-briefcase" aria-hidden="true" /></div>
            <div className="experience-content card-surface">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-2 mb-3">
                <div><h3 className="h5 fw-bold mb-1">{item.role}</h3><div className="text-primary fw-semibold">{item.company}</div></div>
                <span className="period-badge">{item.period}</span>
              </div>
              <ul className="achievement-list">{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
              {item.technologies.length > 0 && <div>{item.technologies.map((technology) => <span className="pill" key={technology}>{technology}</span>)}</div>}
            </div>
          </article>
        ) : (
          <details className="experience-entry experience-details" key={item.company} data-aos="fade-up" data-aos-delay={index * 80}>
            <summary><div className="experience-marker"><i className="bi bi-briefcase" aria-hidden="true" /></div><span><strong>{item.company}</strong><small>{item.role} · {item.period}</small></span><i className="bi bi-chevron-down ms-auto" /></summary>
            <div className="experience-content card-surface">
              <ul className="achievement-list">{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
              {item.technologies.length > 0 && <div>{item.technologies.map((technology) => <span className="pill" key={technology}>{technology}</span>)}</div>}
            </div>
          </details>
        )
      })}
      </div>
      {!preview && entries.length === 0 && <p className="empty-state" role="status">No experience matches your search or company filter.</p>}
    </>
  )
}

export default Experience