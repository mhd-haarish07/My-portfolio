import { NAV_LINKS, CONTACT } from '../data'

const TECH_STACK = [
  'Java & Spring Boot',
  'React.js & JavaScript',
  'Node.js & Express.js',
  'MongoDB · MySQL · PostgreSQL',
  'HTML5 · CSS3 · Bootstrap',
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="fs">
          <h4>{CONTACT.name}</h4>
          <div className="f-socials">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href={`tel:${CONTACT.phoneRaw}`}>
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        <div className="fs">
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.filter((l) => l.id !== 'availability').map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="fs">
          <h4>Tech Stack</h4>
          <ul>
            {TECH_STACK.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="fs f-contact">
          <h4>Contact</h4>
          <p>
            <i className="fas fa-envelope"></i>
            <span style={{ wordBreak: 'break-all' }}>{CONTACT.email}</span>
          </p>
          <p>
            <i className="fas fa-phone"></i> {CONTACT.phone}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Tamil Nadu, India
          </p>
          <a href={CONTACT.resume} className="f-dl" download>
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 {CONTACT.name} · Built with passion using React, Vite &amp; CSS</p>
      </div>
    </footer>
  )
}
