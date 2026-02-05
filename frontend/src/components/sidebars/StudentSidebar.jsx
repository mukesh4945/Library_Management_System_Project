import { NavLink } from "react-router-dom";
import "./StudentSidebar.css";

const StudentSidebar = () => {
  // 🔹 frontend dummy student data
  const student = {
    name: "Mukesh",
    photo: "/image/profile.png"
  };

  return (
    <aside className="student-sidebar">

      {/* ===== STUDENT PROFILE SECTION ===== */}
      <div className="student-profile">
        <img
          src={student.photo}
          alt="Student"
          className="student-avatar"
        />

        <h3 className="student-name">{student.name}</h3>

        <NavLink to="profile" className="edit-profile">
          Edit Profile
        </NavLink>
      </div>

      {/* ===== NAV LINKS ===== */}
      <nav>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="search">Search Books</NavLink>
        <NavLink to="issued">My Issued Books</NavLink>
        <NavLink to="reservations">My Reservations</NavLink>
        <NavLink to="fines">My Fines</NavLink>
      </nav>

    </aside>
  );
};

export default StudentSidebar;
