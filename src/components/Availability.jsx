const ITEMS = [
  {
    icon: 'fas fa-bolt',
    title: 'Immediate Availability',
    desc: 'Ready to start immediately. Flexible with notice period for the right opportunity.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    desc: 'Open to on-site, hybrid, or remote. Currently based in Tamil Nadu, India.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Employment Type',
    desc: 'Seeking full-time roles with growth, mentorship, and technical challenges in a strong team.',
  },
  {
    icon: 'fas fa-language',
    title: 'Languages',
    desc: 'Fluent in English and Tamil. Strong written and verbal communication skills.',
  },
]

export default function Availability() {
  return (
    <section id="availability" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-calendar-check"></i>
        </div>
        <h2>Availability &amp; Preferences</h2>
      </div>
      <div className="avail-grid">
        {ITEMS.map((item) => (
          <div className="av-card" key={item.title}>
            <div className="av-icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
