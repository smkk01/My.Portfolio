import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile from '../data/profile.json'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Experience', '/experience'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

function Navbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg sticky-top site-navbar">
      <div className="container-narrow">
        <NavLink className="navbar-brand fw-bold" to="/" aria-label={`${profile.name} home`}>
          <span className="brand-mark">S</span> Sumon<span className="text-primary">.</span>
        </NavLink>
        <button className="navbar-toggler" type="button" aria-controls="portfolioNav" aria-expanded={expanded} onClick={() => setExpanded((isExpanded) => !isExpanded)} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="portfolioNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map(([label, path]) => (
              <NavLink key={path} end={path === '/'} onClick={() => setExpanded(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to={path}>
                {label}
              </NavLink>
            ))}
            <a className="btn btn-primary btn-sm ms-lg-3 px-3" href={`mailto:${profile.email}`} onClick={() => setExpanded(false)}>Let&apos;s talk</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar