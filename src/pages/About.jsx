import profile from '../data/profile.json'

function About() {
  return (
    <>
      <header className="page-hero"><div className="container-narrow"><span className="eyebrow">A little about me</span><h1 className="page-title">Experience, curiosity, <span className="text-primary">and craft.</span></h1><p className="lead text-muted-custom mb-0">{profile.summary}</p></div></header>
      <section className="section-space"><div className="container-narrow row g-5 align-items-start">
        <div className="col-lg-5" data-aos="fade-up"><div className="about-summary card-surface"><span className="icon-tile"><i className="bi bi-award" /></span><strong>20+ years</strong><p>Developing enterprise software, web and mobile applications, and cloud solutions. Experienced in designing, developing, deploying, and supporting solutions across finance, travel, inventory, ERP, CRM, HR, and e-commerce.</p><span className="text-muted-custom">{profile.name} · {profile.title}</span></div></div>
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100"><span className="eyebrow">Career highlights</span><h2 className="h3 fw-bold mt-2 mb-4">A career shaped by real-world challenges</h2><ul className="highlight-list">{profile.careerHighlights.map((highlight) => <li key={highlight}><i className="bi bi-check-circle-fill" />{highlight}</li>)}</ul></div>
      </div></section>
      <section className="section-space section-tint"><div className="container-narrow"><div className="section-heading" data-aos="fade-up"><span className="eyebrow">Education</span><h2>Learning that built a strong foundation</h2><p>Formal study in computer science and systems analysis, including advanced web technologies.</p></div><div className="row g-4">{profile.education.map((item, index) => <div className="col-md-6" key={item.institution} data-aos="fade-up" data-aos-delay={index * 100}><article className="card-surface education-card"><span className="icon-tile"><i className="bi bi-mortarboard" /></span><h3 className="h5 fw-bold mt-3">{item.qualification}</h3><p className="text-primary fw-semibold mb-1">{item.institution}</p>{item.major && <p className="text-muted-custom mb-0">Major: {item.major}</p>}</article></div>)}</div></div></section>
    </>
  )
}

export default About