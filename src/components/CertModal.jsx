import { CONTACT } from '../data'

export default function CertModal({ open, onClose }) {
  const shareContact = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT.email).then(() => alert('Email copied!'))
    }
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-title">🎓 Certificate of Completion</div>
        <div className="modal-sub">
          Java Full Stack Development · Login360 Institute · Aug 2025
        </div>

        <div
          className="cert-preview"
          style={{ padding: 0, overflow: 'hidden', borderRadius: '12px', position: 'relative' }}
        >
          <div className="cert-border-dec"></div>
          <img src="" alt="" />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '12px 16px',
              background: 'linear-gradient(to top,rgba(10,12,18,.95),transparent)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg,var(--gold),var(--orange))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: 'var(--dark)',
                flexShrink: 0,
              }}
            >
              <i className="fas fa-certificate"></i>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)' }}>
                Java Full Stack Development
              </div>
              <div style={{ fontSize: '10px', color: 'var(--gold)' }}>
                Login360 Institute · August 2025
              </div>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                background: 'rgba(245,166,35,.15)',
                border: '1px solid rgba(245,166,35,.3)',
                borderRadius: '100px',
                padding: '3px 10px',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--gold)',
              }}
            >
              ✔ Certified
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(10,12,18,.7)',
              border: '1px solid rgba(255,255,255,.1)',
              borderRadius: '7px',
              padding: '4px 10px',
              fontSize: '10px',
              color: 'var(--text-muted)',
            }}
          >
            📎 Soft copy coming soon
          </div>
        </div>

        <div className="modal-actions">
          <a href={CONTACT.resume} download className="modal-dl">
            <i className="fas fa-download"></i> Download Resume
          </a>
          <button className="modal-share" onClick={shareContact}>
            <i className="fas fa-share-alt"></i> Share Contact
          </button>
        </div>
      </div>
    </div>
  )
}
