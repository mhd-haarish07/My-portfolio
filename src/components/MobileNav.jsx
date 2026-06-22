import { NAV_LINKS, CONTACT } from '../data'

export function MobileBar({ onOpen }) {
  return (
    <div className="mob-bar">
      <button className="mob-menu-btn" onClick={onOpen} aria-label="Open menu">
        <i className="fas fa-bars"></i>
      </button>
      <div className="mob-logo">
        <span className="mob-fullname">{CONTACT.name}</span>
        <span className="mob-subrole">{CONTACT.role}</span>
      </div>
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        className="btn btn-primary"
        style={{ padding: '8px 13px', fontSize: '11px', borderRadius: '9px', flexShrink: 0 }}
      >
        <i className="fas fa-phone"></i> Call
      </a>
    </div>
  )
}

export function MobileDrawer({ open, onClose }) {
  return (
    <>
      <div
        className={`overlay${open ? ' on' : ''}`}
        style={{ display: open ? 'block' : 'none' }}
        onClick={onClose}
      ></div>

      <div className={`drawer${open ? ' on' : ''}`}>
        <button className="drawer-close" onClick={onClose} aria-label="Close menu">
          <i className="fas fa-times"></i>
        </button>
        <div className="drawer-top">
          <img src={CONTACT.avatar} alt={CONTACT.name} />
          <div className="dname">{CONTACT.name}</div>
          <div className="drole">{CONTACT.role}</div>
        </div>

        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="mob-nav-link"
            onClick={onClose}
          >
            <i className={link.icon}></i> {link.label}
          </a>
        ))}

        <a
          href={CONTACT.resume}
          className="dl-btn"
          style={{ marginTop: '14px' }}
          download
          onClick={onClose}
        >
          <i className="fas fa-download"></i> Download CV
        </a>
      </div>
    </>
  )
}
