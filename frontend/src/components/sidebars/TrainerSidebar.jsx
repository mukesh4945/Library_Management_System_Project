import { NavLink, useNavigate } from "react-router-dom"; // 1. useNavigate import kiya
import "./TrainerSidebar.css";

const TrainerSidebar = () => {
  const navigate = useNavigate(); // 2. Hook ko initialize kiya

  return (
    <aside className="trainer-sidebar-premium">
      {/* --- Profile Section --- */}
      <div className="sidebar-brand">
        <div className="brand-logo">LMS</div>
        <span className="brand-tag">PRO PANEL</span>
      </div>

      <div className="trainer-profile-box">
        <div className="profile-img-wrapper">
          <img src="/image/profile.png" alt="Trainer" />
          <div className="online-indicator"></div>
        </div>
        <h3>Mukesh Sir</h3>
        <p className="trainer-role">Senior Faculty</p>
        
        {/* 3. Button mein onClick event add kar diya */}
        <button 
          className="edit-profile-mini" 
          onClick={() => navigate("edit-profile")}
        >
          Edit Profile
        </button>
      </div>

      {/* --- Navigation --- */}
      <nav className="sidebar-nav">
        <small className="nav-label">MAIN MENU</small>
        
        <NavLink to="dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink to="issue" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📤</span>
          <span className="nav-text">Issue Book</span>
        </NavLink>

        <NavLink to="return" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📥</span>
          <span className="nav-text">Return Book</span>
        </NavLink>

        <NavLink to="reservations" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📅</span>
          <span className="nav-text">Reservations</span>
          <span className="count-badge">3</span>
        </NavLink>

        <NavLink 
  to="/trainer/assessments" 
  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
>
  <span className="nav-icon">📝</span>
  <span className="nav-text">Assessments</span>
</NavLink>

<NavLink 
  to="/trainer/submissions" 
  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
>
  <span className="nav-icon">📥</span>
  <span className="nav-text">Submissions</span>
  <span className="count-badge">24</span> {/* Optional: New submissions count */}
</NavLink>
        {/* --- Ek extra setting link agar aap chaho toh --- */}
        <NavLink to="settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </NavLink>
      </nav>
      
      <NavLink to="add-resource">➕ Add New Item</NavLink>

      {/* --- Bottom Section --- */}
      <div className="sidebar-footer">
        <NavLink to="/logout" className="logout-btn-premium">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default TrainerSidebar;