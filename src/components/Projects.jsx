import { useMemo, useState } from 'react'
import { useEffect } from 'react'
import projects from '../data/projects.json'
import { refreshAnimations } from '../services/animations.js'
import storeImage from '../assets/images/project-store.svg'
import eventEaseImage from '../assets/images/project-event-ease.svg'
import mangoImage from '../assets/images/project-mango.svg'
import nibbleImage from '../assets/images/project-nibble.svg'
import safeVaultImage from '../assets/images/project-safevault.svg'
import logiTrackImage from '../assets/images/project-logitrack.svg'
import posReportImage from '../assets/images/project-pos-report.svg'
import productsDashboardImage from '../assets/images/project-products-dashboard.svg'
import eshopImage from '../assets/images/project-eshop.svg'
import microservicesImage from '../assets/images/project-microservices.svg'
import airlineImage from '../assets/images/project-airline.svg'
import studentsImage from '../assets/images/project-students.svg'
import inventoryImage from '../assets/images/project-inventory.svg'
import crumbImage from '../assets/images/project-crumb.svg'

const images = {
  store: storeImage,
  crumb: crumbImage,
  'event-ease': eventEaseImage,
  mango: mangoImage,
  nibble: nibbleImage,
  'safe-vault': safeVaultImage,
  logitrack: logiTrackImage,
  'pos-report': posReportImage,
  'products-dashboard': productsDashboardImage,
  eshop: eshopImage,
  microservices: microservicesImage,
  airline: airlineImage,
  students: studentsImage,
  inventory: inventoryImage,
}
const filters = ['All', '.NET', 'React', 'Angular', 'Microservices', 'Cloud']

function Projects({ featuredOnly = false }) {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const list = useMemo(() => projects.filter((project) => {
    const matchesFeatured = !featuredOnly || project.featured
    const matchesFilter = filter === 'All' || project.categories.includes(filter)
    const searchable = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase()
    return matchesFeatured && matchesFilter && searchable.includes(query.trim().toLowerCase())
  }), [featuredOnly, filter, query])

  useEffect(() => {
    refreshAnimations({ hard: true })
  }, [filter, query, featuredOnly])

  return (
    <>
      {!featuredOnly && (
        <div className="project-controls" data-aos="fade-up">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((item) => <button className={`filter-button${filter === item ? ' active' : ''}`} aria-pressed={filter === item} type="button" key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <label className="project-search"><i className="bi bi-search" aria-hidden="true" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" aria-label="Search projects" /></label>
        </div>
      )}
      <div className="row g-4">
        {list.map((project, index) => (
          <div className="col-md-6 col-xl-4 d-flex" key={project.id} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
            <article className="project-card card-surface">
              <img className="project-image" src={images[project.image]} alt={`${project.title} illustration`} width="960" height="540" loading="lazy" decoding="async" fetchPriority="low" />
              <div className="project-body">
                <h3 className="h5 fw-bold">{project.title}</h3>
                <p className="text-muted-custom">{project.description}</p>
                {project.technologies.length > 0 && <div className="project-tags">{project.technologies.map((technology) => <span className="pill" key={technology}>{technology}</span>)}</div>}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><i className="bi bi-github" /> Code</a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right" /> Live demo</a>}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      {list.length === 0 && <p className="empty-state">No projects match your search. Try another keyword or filter.</p>}
    </>
  )
}

export default Projects