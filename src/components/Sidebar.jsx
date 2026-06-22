import { NAV_LINKS, CONTACT } from '../data'

export default function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <div className="avatar-wrap">
        <div className="avatar-ring"></div>
        <img src={CONTACT.avatar} alt={CONTACT.name} />
        <div className="online"></div>
      </div>
      <div className="sb-name">{CONTACT.name}</div>
      <div className="sb-role">{CONTACT.role}</div>
      <div className="sb-info">📞 {CONTACT.phone}</div>

      <div className="socials">
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href={`mailto:${CONTACT.email}`} title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href={`tel:${CONTACT.phoneRaw}`} title="Call">
          <i className="fas fa-phone"></i>
        </a>
      </div>

      <nav className="sidebar-nav">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link${active === link.id ? ' active' : ''}`}
          >
            <i className={link.icon}></i> {link.label}
          </a>
        ))}
      </nav>

      <a href={CONTACT.resume} className="dl-btn" download>
        <i className="fas fa-download"></i> Download CV
      </a>
    </aside>
  )
}
