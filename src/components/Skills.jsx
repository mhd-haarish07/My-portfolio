const CATEGORIES = [
  {
    title: 'Backend',
    icon: 'fas fa-server',
    tags: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'CRUD Operations'],
  },
  {
    title: 'Frontend',
    icon: 'fas fa-laptop-code',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Database',
    icon: 'fas fa-database',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Queries'],
  },
  {
    title: 'Tools',
    icon: 'fas fa-tools',
    tags: ['VS Code', 'Git', 'GitHub', 'Postman', 'Maven'],
  },
]

const CARDS = [
  {
    icon: 'fab fa-java',
    color: '#f89820',
    title: 'Java & Spring Boot',
    desc: 'Backend applications, RESTful APIs, CRUD operations, and OOP-based architecture with Spring Boot framework.',
  },
  {
    icon: 'fab fa-react',
    color: '#61dafb',
    title: 'React.js',
    desc: 'Dynamic UIs with reusable components, hooks (useState, useEffect), state management and responsive design.',
  },
  {
    icon: 'fab fa-js',
    color: '#f7df1e',
    title: 'JavaScript ES6+',
    desc: 'Modern JS features — arrow functions, promises, destructuring, modules, and real-time dynamic functionality.',
  },
  {
    icon: 'fab fa-node-js',
    color: '#68a063',
    title: 'Node.js & Express',
    desc: 'Server-side apps, REST API development, MongoDB integration, and full MERN stack lifecycle experience.',
  },
  {
    icon: 'fab fa-html5',
    color: '#e34f26',
    title: 'HTML5 & CSS3',
    desc: 'Semantic markup, Flexbox, Grid, responsive layouts, and cross-browser compatible interfaces with Bootstrap.',
  },
  {
    icon: 'fas fa-leaf',
    color: '#4DB33D',
    title: 'MongoDB & SQL',
    desc: 'NoSQL collections design with MongoDB, relational queries with MySQL and PostgreSQL for varied data needs.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-code"></i>
        </div>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-cats">
        {CATEGORIES.map((cat) => (
          <div className="sk-cat" key={cat.title}>
            <div className="sk-cat-title">
              <i className={cat.icon}></i> {cat.title}
            </div>
            <div className="sk-tags">
              {cat.tags.map((tag) => (
                <span className="sk-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-grid">
        {CARDS.map((card) => (
          <div className="sk-card" key={card.title}>
            <div className="sk-icon" style={{ color: card.color }}>
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
