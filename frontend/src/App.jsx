import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import HtmlCourse from "./pages/HtmlCourse";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EnrollCourse from "./pages/EnrollCourse";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import CommunicationHub from "./pages/Common/CommunicationHub";
import ProtectedRoute from './components/ProtectedRoute';

import SuperAdminLayout from "./layouts/SuperAdminLayout";
import SuperAdminDashboard from "./pages/superadmin/SuperAdminDashboard";
import ManageAdmins from "./pages/superadmin/ManageAdmins";
import SystemSettings from "./pages/superadmin/SystemSettings";
import RoleManagement from "./pages/superadmin/RoleManagement";
import RoleRoute from "./components/RoleRoute";
import Report from "./pages/superadmin/Report";


/* ===== ADMIN ===== */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageBooks from "./pages/admin/ManageBooks";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import InvoiceGenerator from './pages/admin/InvoiceGenerator';
import FeeManagement from './pages/admin/FeeManagement';
import RefundManagement from './pages/admin/RefundManagement';



/* ===== STUDENT ===== */
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import SearchBooks from "./pages/student/SearchBooks";
import MyIssuedBooks from "./pages/student/MyIssuedBooks";
import MyReservations from "./pages/student/MyReservations";
import MyFines from "./pages/student/MyFines";
import MyCourses from "./pages/student/MyCourses";
import Profile from "./pages/student/Profile";
import StudentGrades from './pages/student/StudentGrades';
import SubmitTask from './pages/student/SubmitTask';

/* ===== TRAINER ===== */
import TrainerLayout from "./layouts/TrainerLayout";
import TrainerDashboard from "./pages/trainer/TrainerDashboard";
import IssueBook from "./pages/trainer/IssueBook";
import ReturnBook from "./pages/trainer/ReturnBook";
import Reservations from "./pages/trainer/Reservations";
import EditTrainerProfile from "./pages/trainer/EditTrainerProfile";
import Setting from "./pages/trainer/Settings";
import AssessmentManager from "./pages/trainer/AssessmentManager";
import Submissions from "./pages/trainer/Submissions";
import MarkingInterface from "./pages/trainer/MarkingInterface";
import AddResource from './pages/trainer/AddResource';
import AttendanceTracker from "./pages/trainer/AttendanceTracker";


function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <BrowserRouter>
      

      <Routes>
        <Route element={<PublicLayout />}>
        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<Home />} />
         </Route>
         
        <Route path="/htmlcourse" element={<HtmlCourse />} />
        <Route path="/enrollcourse" element={<EnrollCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/communication" element={<CommunicationHub />} />
          <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        {/* ===== SUPER ADMIN ===== */}
        <Route
          path="/superadmin"
          element={
            <RoleRoute role="SUPER_ADMIN" user={user}>
              <SuperAdminLayout />
            </RoleRoute>
          }
        >
          <Route index element={<SuperAdminDashboard />} />
          <Route path="manage-admins" element={<ManageAdmins />} />
          <Route path="settings" element={<SystemSettings />} />
          <Route path="role-management" element={<RoleManagement />} />
           <Route path="report" element={<Report />} />
        </Route>

        {/* ===== ADMIN ===== */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/books" element={<ManageBooks />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/invoices" element={<InvoiceGenerator />} />
        <Route path="/admin/fee-management" element={<FeeManagement />} />
        <Route path="/admin/refunds" element={<RefundManagement />} />

        {/* ===== STUDENT ===== */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="STUDENT">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="search" element={<SearchBooks />} />
          <Route path="issued" element={<MyIssuedBooks />} />
          <Route path="reservations" element={<MyReservations />} />
          <Route path="fines" element={<MyFines />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="profile" element={<Profile />} />
          <Route path="grades" element={<StudentGrades />} />
          <Route path="submit-task" element={<SubmitTask />} />
        </Route>

        {/* ===== TRAINER ===== */}
        <Route
          path="/trainer"
          element={
            <ProtectedRoute role="TRAINER">
              <TrainerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<TrainerDashboard />} />
          <Route path="issue" element={<IssueBook />} />
          <Route path="return" element={<ReturnBook />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="edit-profile" element={<EditTrainerProfile />} />
          <Route path="assessments" element={<AssessmentManager />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="settings" element={<Setting />} />
          <Route path="grade/:id" element={<MarkingInterface />} />
          <Route path="add-resource" element={<AddResource />} />
          <Route path="attendance" element={<AttendanceTracker />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;

