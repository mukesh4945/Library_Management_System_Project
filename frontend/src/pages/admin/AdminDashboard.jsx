import "./AdminDashboard.css";
import AdminLayout from "../../layouts/AdminLayout";

function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,245", icon: "👥" },
    { title: "Total Courses", value: "32", icon: "📚" },
    { title: "Active Students", value: "980", icon: "🎓" },
    { title: "Revenue", value: "₹1,20,000", icon: "💰" }
  ];

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        {/* Header */}
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>System overview & recent activities</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="activity-card">
          <h2>Recent Activity</h2>

          <ul className="activity-list">
            <li>👤 New user registered: Rahul</li>
            <li>📘 Course added: React Mastery</li>
            <li>⭐ User upgraded to Premium</li>
            <li>🚀 New course published</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
