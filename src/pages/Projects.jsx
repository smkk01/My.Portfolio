import Projects from '../components/Projects.jsx'

function ProjectsPage() {
  return (
    <>
      <header className="page-hero"><div className="container-narrow" data-aos="fade-up"><span className="eyebrow">Selected work</span><h1 className="page-title">Projects &amp; applications</h1><p className="lead text-muted-custom mb-0">A portfolio of software projects. Explore by technology or search for a project that interests you.</p></div></header>
      <section className="section-space pt-0"><div className="container-narrow"><Projects /></div></section>
    </>
  )
}

export default ProjectsPage