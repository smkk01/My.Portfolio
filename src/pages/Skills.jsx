import skills from '../data/skills.json'
import Skills from '../components/Skills.jsx'

function SkillsPage() {
  const skillCount = skills.reduce((count, group) => count + group.skills.length, 0)

  return (
    <>
      <header className="page-hero"><div className="container-narrow"><span className="eyebrow">Technical toolkit</span><h1 className="page-title">Skills &amp; technologies</h1><p className="lead text-muted-custom mb-0">A broad, hands-on toolkit across backend and frontend engineering, cloud platforms, databases, and delivery practices. Proficiency indicators represent areas of experience and focus.</p></div></header>
      <section className="section-space pt-0">
        <div className="container-narrow">
          <div className="skills-overview mb-4" aria-label={`${skills.length} skill categories and ${skillCount} technologies`}>
            <span><strong>{skills.length}</strong> categories</span>
            <span><strong>{skillCount}</strong> technologies and tools</span>
          </div>
          <Skills />
        </div>
      </section>
    </>
  )
}

export default SkillsPage