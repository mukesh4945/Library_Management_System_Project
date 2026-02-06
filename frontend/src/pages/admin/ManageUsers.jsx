import { useState } from "react";
import "./ManageUsers.css";

const usersData = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Student", status: "Active", joinDate: "12 Jan 2026" },
  { id: 2, name: "Amit Verma", email: "amit@gmail.com", role: "Trainer", status: "Active", joinDate: "05 Jan 2026" },
  { id: 3, name: "Neha Singh", email: "neha@gmail.com", role: "Student", status: "Blocked", joinDate: "20 Dec 2025" },
  { id: 4, name: "Admin User", email: "admin@gmail.com", role: "Admin", status: "Active", joinDate: "01 Dec 2025" },
];

function ManageUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      )
    );
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page-container">
      {/* Header with Stats Summary */}
      <div className="admin-header-flex">
        <div className="header-left">
          <h1>👥 User Management</h1>
          <p>Control user access, monitor roles, and manage account status.</p>
        </div>
        <div className="header-stats">
          <div className="mini-stat">
            <span>Total:</span> <strong>{users.length}</strong>
          </div>
          <div className="mini-stat">
            <span className="dot active-dot"></span> <strong>{users.filter(u => u.status === 'Active').length}</strong>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="admin-controls">
        <div className="search-wrapper-premium">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="add-user-btn">+ Add New User</button>
      </div>

      {/* Modern Table Layout */}
      <div className="glass-table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>User Info</th>
              <th>Role</th>
              <th>Joined Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className={user.status === "Blocked" ? "row-muted" : ""}>
                  <td>
                    <div className="user-profile-cell">
                      <div className="user-initials">{user.name.charAt(0)}</div>
                      <div className="user-meta">
                        <span className="user-name">{user.name}</span>
                        <span className="user-email">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-pill ${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="date-cell">{user.joinDate}</td>
                  <td>
                    <span className={`status-indicator ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    {user.role !== "Admin" ? (
                      <button
                        className={`action-toggle-btn ${user.status === "Active" ? "btn-block" : "btn-unblock"}`}
                        onClick={() => toggleStatus(user.id)}
                      >
                        {user.status === "Active" ? "Block Access" : "Unblock"}
                      </button>
                    ) : (
                      <span className="protected-tag">Protected</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-state">
                   No users matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;