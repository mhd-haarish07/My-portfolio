export default function Certifications({ onOpenCert }) {
  return (
    <section id="certifications" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-certificate"></i>
        </div>
        <h2>Certifications</h2>
      </div>
      <div className="cert-card">
        <div className="cert-icon">
          <i className="fas fa-award"></i>
        </div>
        <div className="cert-info">
          <h3>Java Full Stack Development</h3>
          <p>Login360 Software Training Institute, Velachery</p>
          <p style={{ marginBottom: '8px' }}>
            Key Skills: Java · Spring Boot · HTML · CSS · JavaScript · React.js · MySQL
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '4px',
            }}
          >
            <span className="ctag">Aug 2025</span>
            <button
              className="cert-btn"
              style={{ width: 'auto', padding: '5px 14px', fontSize: '11px', marginTop: 0 }}
              onClick={onOpenCert}
            >
              <i className="fas fa-certificate"></i> View Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
