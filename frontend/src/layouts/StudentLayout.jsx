import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/sidebars/StudentSidebar";
import "../pages/student/StudentDashboard.css"; // layout styling reuse

const StudentLayout = () => {
  return (
    <div className="student-container">
      <StudentSidebar />

      <main className="student-content">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
