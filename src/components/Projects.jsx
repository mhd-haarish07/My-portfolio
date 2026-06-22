const PROJECTS = [
  {
    num: 'PROJECT 01',
    icon: 'fas fa-university',
    title: 'Banking Management System',
    desc: 'Console-based Java application simulating real banking operations — account creation, deposit, withdrawal, and balance inquiry for 100+ simulated user accounts.',
    points: [
      'Developed a console-based Bank Management System in Java supporting both admin and user login with PIN-based authentication',
      'Implemented core banking operations including account creation, deposit, withdrawal, and balance inquiry using Object-Oriented Programming principles',
      "Designed a random account number generator with a fixed prefix using Java's Random class to simulate real bank account formatting",
      'Managed multiple user accounts using Java Collections (HashMap) for efficient in-memory data storage and retrieval',
      'Applied OOP concepts such as Encapsulation, Inheritance, and Abstraction across User, Account, Bank, and BankService classes',
      'Implemented exception handling for scenarios like insufficient balance and invalid account access',
      'Improved Java control structures and method-based programming through real-world simulation.',
      'Published source code on GitHub with version control using Git',
    ],
    github: 'https://github.com/mhd-haarish07/Banking-management-system',
    demo: null,
    tags: ['Java', 'Spring Boot', 'OOP', 'ArrayList', 'Console App'],
  },
  {
    num: 'PROJECT 02',
    icon: 'fas fa-shopping-bag',
    title: "E-Commerce Men's Wear",
    desc: "Fully responsive front-end e-commerce website for men's fashion with 30+ product listings, dynamic cart, and modern UI — compatible across 5+ screen sizes.",
    points: [
      'Developed a fully responsive React.js (Vite) storefront with 45+ product listings, featuring live search, category & price filters, pagination, shopping cart with coupon codes, and wishlist using Context API and reusable hooks/components',
      'Implemented dynamic cart functionality with real-time total price calculation using JavaScript (ES6+).',
      'Built a RESTful API with Node.js and Express.js implementing JWT-based authentication, password hashing, protected/role-based routes, and full CRUD endpoints for products, orders, reviews, addresses, and inventory',
      'Modeled and queried MongoDB collections with Mongoose (User, Order, Review, Address, Stock) for persistent storage of users, orders, reviews, and live inventory data',
      'Integrated the Razorpay payment gateway (test mode) with server-side signature verification (HMACSHA256) for secure checkout, alongside a multi-step address → payment → confirmation flow',
      'Built a role-based admin dashboard for order-status management, live stock/inventory control, and sales analytics, with an order-tracking timeline and toast notifications across the app',
      'Ensured full mobile responsiveness with media queries and Bootstrap breakpoints.',
      'Published source code on GitHub with version control using Git',
    ],
    github: 'https://github.com/mhd-haarish07/TN91-MENS-WEAR',
    demo: 'https://tn91-mens-wear.vercel.app/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="sh">
        <div className="sh-icon">
          <i className="fas fa-folder-open"></i>
        </div>
        <h2>Projects</h2>
      </div>
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <div className="proj-card" key={p.num}>
            <div className="proj-num">{p.num}</div>
            <h3>
              <i className={p.icon}></i> {p.title}
            </h3>
            <p>{p.desc}</p>
            <ul>
              {p.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="proj-footer">
              <div className="proj-btns">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                  <i className="fab fa-github"></i> View on GitHub{' '}
                  <i className="fas fa-arrow-right"></i>
                </a>
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link-demo">
                    <i className="fas fa-external-link-alt"></i> Live Demo{' '}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                ) : (
                  <span className="proj-link-demo na">
                    <i className="fas fa-desktop"></i> Live Demo <i className="fas fa-ban"></i>
                  </span>
                )}
              </div>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
