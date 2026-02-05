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
      <footer className="footer">
        <p>© 2026 LMS Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
