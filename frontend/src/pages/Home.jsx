import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Learning <span>Management</span> System
          </h1>
          <p>
            Empower learners with a modern, cloud-based LMS designed for
            performance, scalability, and success.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn primary">
              Get Started
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="LMS Platform"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Our LMS</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>📚</span>
            <h3>Smart Learning</h3>
            <p>Structured, interactive, and engaging learning modules.</p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Progress Tracking</h3>
            <p>Real-time insights into learner performance.</p>
          </div>

          <div className="feature-card">
            <span>👨‍🏫</span>
            <h3>Expert Instructors</h3>
            <p>Learn from industry-experienced mentors.</p>
          </div>

          <div className="feature-card">
            <span>☁</span>
            <h3>Cloud Based</h3>
            <p>Access courses anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Digital Learning Journey</h2>
        <p>Join thousands of learners building their future with LMS.</p>
        <Link to="/register" className="btn primary large">
          Join LMS Today
        </Link>
      </section>

      {/* FOOTER */}
      
            {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-card">
          <h3>50K+</h3>
          <p>Active Students</p>
        </div>
        <div className="stat-card">
          <h3>1.2K+</h3>
          <p>Expert Trainers</p>
        </div>
        <div className="stat-card">
          <h3>300+</h3>
          <p>Premium Courses</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Success Rate</p>
        </div>
      </section>

      {/* COURSE PREVIEW */}
      <section className="courses-preview">
        <h2>Popular Courses</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Full Stack Development</h3>
            <p>React, Node, MongoDB & Cloud Deployment</p>
            <span>⭐ 4.9</span>
          </div>

          <div className="course-card">
            <h3>Data Structures & Algorithms</h3>
            <p>Master DSA with real interview problems</p>
            <span>⭐ 4.8</span>
          </div>

          <div className="course-card">
            <h3>AI & Machine Learning</h3>
            <p>Build intelligent systems from scratch</p>
            <span>⭐ 4.7</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Learners Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “This LMS completely transformed my learning experience. The
              interface and tracking are next level.”
            </p>
            <h4>— Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Best platform for upskilling. The trainers and content quality
              are amazing.”
            </p>
            <h4>— Anjali Verma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “I cracked my first developer job after completing courses on
              this LMS.”
            </p>
            <h4>— Aman Singh</h4>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
    

            {/* LIBRARY MANAGEMENT */}
      <section className="library-system">
        <h2>Smart Library Management</h2>

        <div className="library-grid">
          <div className="library-card">
            <h3>Digital Book Library</h3>
            <p>
              Access thousands of eBooks, PDFs, journals, and research material
              with advanced search and filtering.
            </p>
          </div>

          <div className="library-card">
            <h3>Issue & Return Automation</h3>
            <p>
              Automated book issue, return tracking, late fine calculation, and
              due date reminders.
            </p>
          </div>

          <div className="library-card">
            <h3>Student Library Accounts</h3>
            <p>
              Personalized dashboards showing issued books, history, fines, and
              recommendations.
            </p>
          </div>

          <div className="library-card">
            <h3>Cloud Storage</h3>
            <p>
              All resources are securely stored and accessible 24/7 from any
              device.
            </p>
          </div>
        </div>
      </section>

      {/* ADMIN & MANAGEMENT SYSTEM */}
      <section className="management-system">
        <h2>Advanced Administration Panel</h2>

        <div className="management-layout">
          <div className="management-content">
            <h3>Complete System Control</h3>
            <p>
              Manage students, trainers, librarians, courses, books, payments,
              and reports from a centralized dashboard.
            </p>

            <ul>
              <li>✔ Role-based access control (Admin / Trainer / Student)</li>
              <li>✔ Course & library resource approval workflows</li>
              <li>✔ Fee, subscription & payment monitoring</li>
              <li>✔ Activity logs & audit trails</li>
            </ul>
          </div>

          <div className="management-visual">
            <div className="glass-box">
              <p>📊 Live Analytics</p>
              <p>📚 Library Usage</p>
              <p>👥 User Growth</p>
              <p>💰 Revenue Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM WORKFLOW */}
      <section className="workflow">
        <h2>How The System Works</h2>

        <div className="workflow-steps">
          <div className="workflow-step">
            <span>01</span>
            <h4>User Registration</h4>
            <p>Students & staff register and get role-based access.</p>
          </div>

          <div className="workflow-step">
            <span>02</span>
            <h4>Course & Library Access</h4>
            <p>Enroll in courses and access digital/physical library.</p>
          </div>

          <div className="workflow-step">
            <span>03</span>
            <h4>Tracking & Reports</h4>
            <p>System tracks progress, usage, and performance.</p>
          </div>

          <div className="workflow-step">
            <span>04</span>
            <h4>Admin Monitoring</h4>
            <p>Admins monitor everything via real-time dashboards.</p>
          </div>
        </div>
      </section>

      {/* SECURITY & SCALABILITY */}
      <section className="security">
        <h2>Enterprise Grade Security & Scalability</h2>

        <div className="security-grid">
          <div className="security-card">
            🔐 Secure Authentication
            <p>JWT, role-based authorization & encrypted passwords.</p>
          </div>

          <div className="security-card">
            ⚡ High Performance
            <p>Optimized APIs, caching, and scalable cloud infra.</p>
          </div>

          <div className="security-card">
            🗄 Backup & Recovery
            <p>Automatic backups and disaster recovery support.</p>
          </div>
        </div>
      </section>
       <footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h2>LMS Platform</h2>
      <p>
        A next-generation Learning & Library Management System built for
        scalability, performance, and digital transformation.
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Management</h4>
      <ul>
        <li>Admin Dashboard</li>
        <li>User Management</li>
        <li>Reports & Analytics</li>
        <li>System Settings</li>
      </ul>
    </div>

    <div className="footer-newsletter">
      <h4>Stay Connected</h4>
      <p>Get updates about new courses & library resources.</p>
      <form>
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </form>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 LMS Platform. All rights reserved.</p>
  </div>
</footer>

    </>
  );
}

export default Home;
