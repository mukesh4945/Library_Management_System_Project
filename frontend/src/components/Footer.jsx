import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>LMS Platform</h2>
          <p>
            A modern Learning Management System designed to deliver
            high-quality digital education with performance, security,
            and scalability.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* DASHBOARD LINKS */}
        <div className="footer-links">
          <h4>Dashboards</h4>
          <ul>
            <li><Link to="/student/dashboard">Student</Link></li>
            <li><Link to="/trainer/dashboard">Trainer</Link></li>
            <li><Link to="/admin/dashboard">Admin</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 support@lmsplatform.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 India</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© {year} LMS Platform. All rights reserved.</p>

        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="GitHub">🐙</a>
          <a href="#" aria-label="Twitter">🐦</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
