import { NavLink, useNavigate } from "react-router-dom";
import "./StudentSidebar.css";

const StudentSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="student-sidebar">
      {/* PROFILE */}
      <div className="student-profile">
        <img
          src="/image/profile.png"
          alt="Student"
          className="student-avatar"
        />
        <h3 className="student-name">Mukesh</h3>

        <NavLink to="profile" className="edit-profile">
          ⚙️ Edit Profile
        </NavLink>
      </div>

      {/* NAV */}
      <nav>
        <NavLink to="/student/dashboard">📊 Dashboard</NavLink>
        <NavLink to="search">🔍 Search Books</NavLink>
        <NavLink to="issued">📚 My Issued Books</NavLink>
        <NavLink to="reservations">📅 My Reservations</NavLink>
        <NavLink to="submit-task">📤 Submit Assignment</NavLink>
        <NavLink to="grades">📝 My Grades & Feedback</NavLink>
        <NavLink to="fines">💰 My Fines</NavLink>

        {/* ✅ LOGOUT */}
        <button onClick={handleLogout} className="logout-nav">
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
};

export default StudentSidebar;
