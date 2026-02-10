import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  UserCog, 
  Settings, 
  BarChart3, 
  LogOut, 
  ShieldCheck 
} from "lucide-react";
import "./SuperAdminSidebar.css";

const SuperAdminSidebar = () => {
  return (
    <aside className="sa-sidebar">
      <div className="sa-brand">
        <div className="logo-box">
          <ShieldCheck size={28} color="#6366f1" />
        </div>
        <h3>Super<span>Admin</span></h3>
      </div>

      <nav className="sa-nav-links">
        <NavLink to="/superadmin" end className={({ isActive }) => isActive ? "sa-link active" : "sa-link"}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/superadmin/manage-admins" className={({ isActive }) => isActive ? "sa-link active" : "sa-link"}>
          <UserCog size={20} />
          <span>Manage Admins</span>
        </NavLink>

        <NavLink to="/superadmin/role-management" className={({ isActive }) => isActive ? "sa-link active" : "sa-link"}>
          <UserCog size={20} />
          <span>Manage Role</span>
        </NavLink>

        <NavLink to="/superadmin/report" className={({ isActive }) => isActive ? "sa-link active" : "sa-link"}>
          <BarChart3 size={20} />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/superadmin/settings" className={({ isActive }) => isActive ? "sa-link active" : "sa-link"}>
          <Settings size={20} />
          <span>System Settings</span>
        </NavLink>
      </nav>

      <div className="sa-footer">
       <button
  className="logout-btn"
  onClick={() => {
    localStorage.clear();
    window.location.href = "/";}}>
      <span>Logout</span>
    </button>

      </div>
    </aside>
  );
};

export default SuperAdminSidebar;