import "./StudentDashboard.css";
import { Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="student-container">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="student-content">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentDashboard;
