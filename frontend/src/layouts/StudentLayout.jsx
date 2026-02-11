import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/sidebars/StudentSidebar";
import "./StudentLayout.css";


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
