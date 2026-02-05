import { useState } from "react";
import "./ManageUsers.css";

const usersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Student",
    status: "Active",
  },
  {
    id: 2,
    name: "Amit Verma",
    email: "amit@gmail.com",
    role: "Trainer",
    status: "Active",
  },
  {
    id: 3,
    name: "Neha Singh",
    email: "neha@gmail.com",
    role: "Student",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@gmail.com",
    role: "Admin",
    status: "Active",
  },
];

function ManageUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "Active" ? "Blocked" : "Active",
            }
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
    <div className="manage-users-page">
      {/* Header */}
      <div className="users-header">
        <h1>👥 Manage Users</h1>
        <p>View, block or unblock users by role</p>
      </div>

      {/* Search */}
      <div className="users-search">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table Card */}
      <div className="table-card">
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td data-label="Name">
                      <strong>{user.name}</strong>
                    </td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Role">
                      <span
                        className={`role ${user.role.toLowerCase()}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td data-label="Status">
                      <span
                        className={`status ${
                          user.status === "Active"
                            ? "active"
                            : "blocked"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td data-label="Action">
                      {user.role !== "Admin" ? (
                        <button
                          className="action-btn"
                          onClick={() => toggleStatus(user.id)}
                        >
                          {user.status === "Active"
                            ? "Block"
                            : "Unblock"}
                        </button>
                      ) : (
                        <span className="dash">—</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
