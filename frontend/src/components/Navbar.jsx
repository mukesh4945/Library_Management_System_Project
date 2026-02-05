import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const role = localStorage.getItem("userRole"); // null | student | trainer | admin

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">LMS</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/courses">COURSES</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>

        {!role && (
          <>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
            <li><Link to="/logout">LOGOUT</Link></li>
          </>
        )}

        {role && (
          <li>
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("userRole");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
