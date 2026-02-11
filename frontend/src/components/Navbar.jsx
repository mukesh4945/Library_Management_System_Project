import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole"); // null | student | trainer | admin

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
  <Link to="/">
    <img src="/image/LMS.png" alt="LMS Logo" className="navbar-logo-img" />
    <span className="logo-text-overlay">Library management system</span>
  </Link>
</div>


      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/courses">COURSES</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>

        {/* 👇 IF NOT LOGGED IN */}
        {!role && (
          <div className="login-register">
            <li><Link to="/register">REGISTER</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </div>
        )}

        {/* 👇 IF LOGGED IN */}
        {role && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
