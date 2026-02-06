import { NavLink } from "react-router-dom";
import "./StudentSidebar.css";

const StudentSidebar = () => {
  const student = {
    name: "Mukesh",
    photo: "/image/profile.png" // Ensure this path is correct in public folder
  };

  return (
    <aside className="student-sidebar">
      {/* ===== STUDENT PROFILE SECTION ===== */}
      <div className="student-profile">
        <div className="avatar-wrapper">
           <img
            src={student.photo}
            alt="Student"
            className="student-avatar"
            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Mukesh&background=23d5ab&color=fff"; }}
          />
        </div>

        <h3 className="student-name">{student.name}</h3>

        <NavLink to="profile" className="edit-profile">
          ⚙️ Edit Profile
        </NavLink>
      </div>

      {/* ===== NAV LINKS ===== */}
      <nav>
        <NavLink to="/student/dashboard">📊 Dashboard</NavLink>
        <NavLink to="search">🔍 Search Books</NavLink>
        <NavLink to="issued">📚 My Issued Books</NavLink>
        <NavLink to="reservations">📅 My Reservations</NavLink>
        <NavLink to="fines">💰 My Fines</NavLink>
        
        {/* Logout Link for better UX */}
        <NavLink to="/logout" className="logout-nav">🚪 Logout</NavLink>
      </nav>
    </aside>
  );
};

export default StudentSidebar;