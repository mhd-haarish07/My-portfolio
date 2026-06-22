import { CONTACT } from '../data'

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Open to full-time opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Mohammed Harish N</span>
            <span className="typing-cursor"></span>
            <br />
            Java &amp; MERN Stack Developer
          </h1>
          <div className="hero-chips">
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">React.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySQL</span>
            <span className="chip">REST APIs</span>
          </div>
          <p className="hero-desc">
            Detail-oriented Computer Science graduate with a strong foundation in{' '}
            <strong style={{ color: 'var(--text)' }}>Java Full Stack</strong> and{' '}
            <strong style={{ color: 'var(--text)' }}>MERN Stack</strong> development. Proficient
            in building scalable backend APIs and modern responsive frontends. Passionate about
            clean code and impactful user experiences.
          </p>
          <div className="hero-btns">
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn btn-primary">
              <i className="fas fa-phone"></i> Call Me
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-outline">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <a href="#education" className="stat-card">
            <div className="stat-num">B.Sc</div>
            <div className="stat-lbl">Computer Science</div>
            <div className="stat-sub">CGPA 8.04 · 2025</div>
            <div className="stat-arrow">
              <i className="fas fa-arrow-right"></i> Education
            </div>
          </a>
          <a href="#projects" className="stat-card">
            <div className="stat-num">2+</div>
            <div className="stat-lbl">Projects Built</div>
            <div className="stat-sub">Java · MERN Stack</div>
            <div className="stat-arrow">
              <i className="fas fa-arrow-right"></i> Projects
            </div>
          </a>
          <a href="#experience" className="stat-card">
            <div className="stat-num">1</div>
            <div className="stat-lbl">Internship</div>
            <div className="stat-sub">MERN Stack · 3 months</div>
            <div className="stat-arrow">
              <i className="fas fa-arrow-right"></i> Experience
            </div>
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="stat-card stat-github"
          >
            <div className="stat-num github-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="stat-lbl">GitHub Profile</div>
            <div className="stat-sub">{CONTACT.githubHandle}</div>
            <div className="stat-arrow">
              <i className="fas fa-external-link-alt"></i> Visit GitHub
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
