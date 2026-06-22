const PROFICIENCY = [
  { name: 'Java & Spring Boot', pct: 85 },
  { name: 'React.js & JavaScript (ES6+)', pct: 80 },
  { name: 'Node.js & Express.js', pct: 75 },
  { name: 'MySQL · PostgreSQL · MongoDB', pct: 78 },
  { name: 'HTML5 · CSS3 · Bootstrap', pct: 88 },
  { name: 'Git & GitHub', pct: 80 },
]

export default function Summary() {
  return (
    <section id="summary" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-user-tie"></i>
        </div>
        <h2>Profile Summary</h2>
      </div>

      <div className="summary-box">
        <div className="sicon">
          <i className="fas fa-quote-left"></i>
        </div>
        <p>
          Detail-oriented Computer Science graduate with a strong foundation in{' '}
          <strong>Java Full Stack</strong> and <strong>MERN Stack</strong> development. Proficient
          in building backend applications using <strong>Java, Spring Boot, and REST APIs</strong>,
          along with frontend development using{' '}
          <strong>React.js, JavaScript (ES6+), HTML5, CSS3,</strong> and Bootstrap. Hands-on
          experience with <strong>MySQL, PostgreSQL, and MongoDB</strong>. Passionate about
          developing scalable, user-friendly applications and eager to contribute to a
          growth-oriented organization.
        </p>
      </div>

      <div className="prof-box">
        <div className="prof-title">
          <i className="fas fa-chart-line"></i> Technical Proficiency
        </div>
        <div className="prof-grid">
          {PROFICIENCY.map((item) => (
            <div className="prof-item" key={item.name}>
              <div className="prof-meta">
                <span className="prof-name">{item.name}</span>
                <span className="prof-pct">{item.pct}%</span>
              </div>
              <div className="prog-bar">
                <div className="prog-fill" data-w={item.pct}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
