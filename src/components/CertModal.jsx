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

        {/* ✅ Real Certificate Image */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(245,166,35,0.25)',
          marginBottom: '16px',
          boxShadow: '0 8px 32px rgba(245,166,35,0.1)'
        }}>
          <img
            src="/Certificate-javafullstack.png"
            alt="Java Full Stack Certificate - Mohammed Harish N"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        <div className="modal-actions">
          <a
            href="/Certificate-javafullstack.png"
            download="Mohammed_Harish_Certificate.png"
            className="modal-dl"
          >
            <i className="fas fa-download"></i> Download Certificate
          </a>
          <a href={CONTACT.resume} download className="modal-dl"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
          >
            <i className="fas fa-file-pdf"></i> Download Resume
          </a>
          <button className="modal-share" onClick={shareContact}>
            <i className="fas fa-share-alt"></i> Share Contact
          </button>
        </div>
      </div>
    </div>
  )
}
