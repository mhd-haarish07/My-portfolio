export default function Experience({ onOpenCert }) {
  return (
    <section id="experience" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <h2>Experience</h2>
      </div>

      <div className="exp-grid">
        {/* Card 1: KnackForge Internship */}
        <div className="exp-card">
          <div className="exp-top">
            <div>
              <div className="exp-role">MERN Stack Intern</div>
              <div className="exp-company">KnackForge Soft Solutions Pvt. Ltd., Ambattur</div>
            </div>
            <span className="exp-badge">✔ Completed</span>
          </div>
          <div className="exp-meta">
            <span>
              <i className="fas fa-calendar"></i> Feb 2026 – Mar 2026
            </span>
            <span>
              <i className="fas fa-clock"></i> 1 Months
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i> Ambattur, Chennai
            </span>
          </div>
          <ul>
            <li>Built and consumed RESTful APIs using Node.js and Express.js for 3+ backend modules.</li>
            <li>Developed reusable React.js components with state management using hooks (useState, useEffect).</li>
            <li>Designed and queried MongoDB collections to store and retrieve dynamic application data.</li>
            <li>Collaborated on version control using Git &amp; GitHub across feature branches.</li>
            <li>Gained hands-on experience in the complete MERN Stack development lifecycle.</li>
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
            <div className="tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express.js</span>
              <span className="tag">React.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Git</span>
              <span className="tag">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Card 2: Java Full Stack Training */}
        <div className="exp-card">
          <div className="exp-top">
            <div>
              <div className="exp-role">Java Full Stack Trainee</div>
              <div className="exp-company">Login360 Software Training Institute, Velachery</div>
            </div>
            <span
              className="exp-badge"
              style={{
                background: 'rgba(245,166,35,.12)',
                borderColor: 'rgba(245,166,35,.25)',
                color: 'var(--gold)',
              }}
            >
              🎓 Certified
            </span>
          </div>
          <div className="exp-meta">
            <span>
              <i className="fas fa-calendar"></i> Aug 2025 – Dec 2025
            </span>
            <span>
              <i className="fas fa-clock"></i>5 Months Training Program
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i> Velachery, Chennai
            </span>
          </div>
          <ul>
            <li>Completed intensive Java Full Stack training covering backend and frontend technologies.</li>
            <li>Built REST APIs with Spring Boot and integrated with MySQL using JPA/Hibernate.</li>
            <li>Developed dynamic frontend interfaces with React.js, HTML5, CSS3, and Bootstrap.</li>
            <li>Practiced CRUD operations, API testing with Postman, and version control with Git.</li>
            <li>Earned certification demonstrating proficiency across the full Java web stack.</li>
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">React.js</span>
              <span className="tag">MySQL</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
            <button className="cert-btn" onClick={onOpenCert}>
              <i className="fas fa-certificate"></i> View Certificate{' '}
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
