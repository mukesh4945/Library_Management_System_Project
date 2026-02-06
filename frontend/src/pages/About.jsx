import "./About.css";

function About() {
  return (
    <section className="about-lms">
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>Library Management System</h1>
        <p>
          A smart, scalable, and digital solution to manage libraries efficiently
          in the modern era.
        </p>
      </div>

      {/* INTRO SECTION */}
      <div className="about-section">
        <h2>📚 What is LMS?</h2>
        <div className="glass-card">
          <p>
            Our Library Management System is a modern web-based platform designed
            to automate library operations such as book issuing, returns, user
            management, inventory tracking, and analytics. It bridges the gap between 
            traditional reading and digital convenience.
          </p>
        </div>
      </div>

      {/* ROLES / FEATURES GRID */}
      <div className="about-section">
        <h2>👥 System Roles</h2>
        <div className="grid">
          <div className="glass-card">
            <h3>👨‍🎓 Student Panel</h3>
            <p>
              Students can search books, issue & return books, track due dates,
              view fines, and manage their profiles with ease.
            </p>
          </div>

          <div className="glass-card">
            <h3>👩‍🏫 Librarian Panel</h3>
            <p>
              Librarians can add books, manage inventory, approve requests,
              generate reports, and track library activity in real time.
            </p>
          </div>

          <div className="glass-card">
            <h3>🛡 Admin Dashboard</h3>
            <p>
              Admins have full control over users, roles, permissions, reports,
              and system configuration for maximum security.
            </p>
          </div>
        </div>
      </div>

      {/* WORKFLOW (Animated List) */}
      <div className="dark">
        <h2>⚙️ System Workflow</h2>
        <ul className="workflow">
          <li>📖 Book Registration</li>
          <li>🔍 Advanced Filters</li>
          <li>📆 Issue & Renewal</li>
          <li>⏰ Fine Calculation</li>
          <li>📊 Live Analytics</li>
        </ul>
      </div>

      {/* TECHNOLOGY STACK (Neon Cards) */}
      <div className="about-section">
        <h2>🚀 Tech Stack</h2>
        <div className="grid">
          <div className="neon-card">
            <h3>⚛ Frontend</h3>
            <p>React.js, CSS3 Animations, Framer Motion</p>
          </div>

          <div className="neon-card">
            <h3>🚀 Backend</h3>
            <p>Node.js, Express.js, JWT Auth</p>
          </div>

          <div className="neon-card">
            <h3>🗄 Database</h3>
            <p>MongoDB with Mongoose Modeling</p>
          </div>
        </div>
      </div>

      {/* FUTURE ENHANCEMENTS */}
      <div className="about-section">
        <h2>🔮 Future Roadmap</h2>
        <div className="glass-card" style={{borderLeft: '5px solid #23d5ab'}}>
          <p>
            In future versions, AI-based book recommendations, QR-based book
            issuing, email notifications, and real-time dashboards will be added
            to make the system even more intelligent.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;