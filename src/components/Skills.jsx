import skills from '../data/skills.json'

function Skills({ preview = false }) {
  const groups = preview ? skills.slice(0, 4) : skills
  return (
    <div className="row g-4">
      {groups.map((group) => (
        <div className="col-md-6 col-xl-4" key={group.category}>
          <article className="card-surface skill-group">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="icon-tile"><i className={`bi ${group.icon}`} aria-hidden="true" /></span>
              <h3 className="h5 fw-bold mb-0">{group.category}</h3>
            </div>
            {group.skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="d-flex justify-content-between mb-2"><span>{skill.name}</span><span className="skill-level">{skill.level}%</span></div>
                <div className="progress" role="progressbar" aria-label={`${skill.name} proficiency`} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </article>
        </div>
      ))}
    </div>
  )
}

export default Skills