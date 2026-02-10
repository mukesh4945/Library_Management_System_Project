import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "../components/sidebars/SuperAdminSidebar";
import "./SuperAdminLayout.css";

const SuperAdminLayout = () => {
  return (
    <div className="sa-layout">
      <SuperAdminSidebar />
      <main className="sa-content">
        <Outlet />
      </main>
    </div>
  );
};

export default SuperAdminLayout;
