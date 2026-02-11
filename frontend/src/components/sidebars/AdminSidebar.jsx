import { NavLink, useNavigate } from "react-router-dom"; 
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate(); 

  return (
    <aside className="admin-sidebar-premium">
      {/* --- Brand Section --- */}
      <div className="sidebar-brand">
        <div className="brand-logo">LMS</div>
        <span className="brand-tag">ADMIN PANEL</span>
      </div>

      {/* --- Admin Profile Section --- */}
      <div className="admin-profile-box">
        <div className="profile-img-wrapper">
          <img src="/image/profile.png" alt="Admin" />
          <div className="online-indicator"></div>
        </div>
        <h3>Admin Name</h3>
        <p className="admin-role">System Administrator</p>
        
        <button 
          className="edit-profile-mini" 
          onClick={() => navigate("settings")}
        >
          Manage Account
        </button>
      </div>

      {/* --- Navigation --- */}
      <nav className="sidebar-nav">
        <small className="nav-label">CONTROL CENTER</small>
        
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📊</span>
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">👥</span>
          <span className="nav-text">User Management</span>
        </NavLink>

        <NavLink to="/admin/books" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📚</span>
          <span className="nav-text">Books Library</span>
        </NavLink>

        <NavLink to="/admin/reports" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">📈</span>
          <span className="nav-text">Reports</span>
          <span className="count-badge">New</span>
        </NavLink>

        
        
        {/* --- Finance Section (Week 5) --- */}
<small className="nav-label">FINANCIALS</small>

<NavLink to="/admin/fee-management" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
  <span className="nav-icon">💰</span>
  <span className="nav-text">Fee Management</span>
</NavLink>

<NavLink to="/admin/invoices" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
  <span className="nav-icon">📄</span>
  <span className="nav-text">Invoice Generator</span>
</NavLink>

          <NavLink to="/admin/refunds" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
  <span className="nav-icon">🔄</span>
  <span className="nav-text">Refunds</span>
</NavLink>

   <NavLink to="/communication" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
  <span className="nav-icon">📢</span> {/* Mike ya Bell icon */}
  <span className="nav-text">Message Hub</span>
</NavLink>
        <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </NavLink>
      </nav>

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

export default AdminSidebar;