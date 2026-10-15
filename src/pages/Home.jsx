import { Link } from 'react-router-dom'
import Experience from '../components/Experience.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import AnimatedStat from '../components/AnimatedStat.jsx'
import profile from '../data/profile.json'

function Home() {
  return (
    <>
      <Hero />
      <section className="stats-section">
        <div className="container-narrow row g-3">
          {profile.statistics.map((stat) => (
            <div className="col-6 col-lg-3" key={stat.label} data-aos="fade-up">
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-narrow">
          <div className="section-heading" data-aos="fade-up"><span className="eyebrow">What I do</span><h2>Building digital solutions from idea to impact</h2><p>Broad experience across the disciplines and technologies that power dependable business software.</p></div>
          <div className="row g-4">
            {profile.focusAreas.map((area, index) => (
              <div className="col-md-6 col-lg-4" key={area.title} data-aos="fade-up" data-aos-delay={index * 50}>
                <article className="card-surface focus-card"><span className="icon-tile"><i className={`bi ${area.icon}`} /></span><h3 className="h5 fw-bold mt-3">{area.title}</h3><p className="text-muted-custom mb-0">{area.description}</p></article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space section-tint">
        <div className="container-narrow">
          <div className="section-heading" data-aos="fade-up"><span className="eyebrow">Selected work</span><h2>Projects built to solve real problems</h2><p>A selection of applications spanning commerce, travel, services, and business operations.</p></div>
          <Projects featuredOnly />
          <div className="text-center mt-4"><Link to="/projects" className="btn btn-outline-primary">Explore all projects <i className="bi bi-arrow-right ms-2" /></Link></div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-narrow">
          <div className="section-heading" data-aos="fade-up"><span className="eyebrow">Career journey</span><h2>Experience that delivers</h2><p>More than two decades building and supporting enterprise applications.</p></div>
          <Experience preview />
          <div className="text-center mt-4"><Link to="/experience" className="primary-link">View career history <i className="bi bi-arrow-right" /></Link></div>
        </div>
      </section>
      <section className="section-space section-tint">
        <div className="container-narrow">
          <div className="section-heading" data-aos="fade-up"><span className="eyebrow">Technical toolkit</span><h2>Skills for end-to-end delivery</h2><p>From application architecture and data through user experience and cloud operations.</p></div>
          <Skills preview />
          <div className="text-center mt-4"><Link to="/skills" className="primary-link">Explore all skills <i className="bi bi-arrow-right" /></Link></div>
        </div>
      </section>
      <section className="container-narrow">
        <div className="home-cta">
          <div><span className="eyebrow">Have a project in mind?</span><h2 className="h3 fw-bold mt-2 mb-0">Let&apos;s make it work.</h2></div>
          <Link to="/contact" className="btn btn-light btn-lg">Start a conversation <i className="bi bi-arrow-up-right ms-2" /></Link>
        </div>
      </section>
    </>
  )
}

export default Home