import { lazy, Suspense, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import './index.css'
import Layout from './components/Layout.jsx'
import { usePageMeta } from './hooks/usePageMeta.js'
import { refreshAnimations } from './services/animations.js'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Skills = lazy(() => import('./pages/Skills.jsx'))
const Experience = lazy(() => import('./pages/Experience.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

const routeMeta = {
  '/': ['Senior Software Developer', 'Portfolio of Khin Khin Su Mon, Senior Software Developer with 20+ years of enterprise software experience.'],
  '/about': ['About', 'Learn about Khin Khin Su Mon, a Senior Software Developer with more than 20 years of experience.'],
  '/skills': ['Skills', 'Backend, frontend, cloud, database, and DevOps skills of Khin Khin Su Mon.'],
  '/experience': ['Experience', 'Professional experience and career highlights of Khin Khin Su Mon.'],
  '/projects': ['Projects', 'Selected software projects by Khin Khin Su Mon.'],
  '/contact': ['Contact', 'Contact Khin Khin Su Mon about software development opportunities and projects.'],
}

function PortfolioRoutes() {
  const location = useLocation()
  const [title, description] = routeMeta[location.pathname] ?? routeMeta['/']
  usePageMeta(title, description)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    refreshAnimations()
  }, [location.pathname])

  return (
    <Suspense fallback={<div className="page-loading" role="status">Loading page…</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <PortfolioRoutes />
      </Layout>
    </HashRouter>
  )
}

export default App
