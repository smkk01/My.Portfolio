import { Link } from 'react-router-dom'
import profile from '../data/profile.json'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-narrow d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span>© {new Date().getFullYear()} {profile.name}. Built with care.</span>
        <div className="d-flex gap-3 align-items-center">
          <Link to="/projects">Projects</Link>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer