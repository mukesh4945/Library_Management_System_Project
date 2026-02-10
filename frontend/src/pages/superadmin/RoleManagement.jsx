import React, { useState } from 'react';
import { UserCog, ShieldCheck, Search, RefreshCw, AlertTriangle } from 'lucide-react';
import "./RoleManagement.css";

const RoleManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul.student@platform.in", role: "Student" },
    { id: 2, name: "Anita Verma", email: "anita.trainer@platform.in", role: "Trainer" },
    { id: 3, name: "Karan Singh", email: "karan@admin.in", role: "Admin" },
    { id: 4, name: "Priya Mehta", email: "priya@superadmin.in", role: "SuperAdmin" },
    { id: 5, name: "Vikram Patel", email: "vikram.student2@platform.in", role: "Student" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("All");

  const roles = ["Student", "Trainer", "Admin", "SuperAdmin"];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRoleFilter === "All" || user.role === selectedRoleFilter;
    
    return matchesSearch && matchesRole;
  });

  const handleRoleChange = (userId, newRole) => {
    if (newRole === "SuperAdmin") {
      if (!window.confirm("Are you sure you want to grant SUPER ADMIN access? This user will have full system control.")) {
        return;
      }
    }

    setUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      )
    );

    // Here you would normally call your API
    // toast.success(`Role updated to ${newRole}`);
  };

  return (
    <div className="rm-container">
      {/* Header */}
      <div className="rm-header">
        <div className="header-left">
          <h2>Role Management</h2>
          <p>Control user permissions and access levels across the platform</p>
        </div>
        <div className="security-badge">
          <ShieldCheck size={18} />
          Super Admin Area
        </div>
      </div>

      {/* Controls */}
      <div className="rm-controls">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <select
            value={selectedRoleFilter}
            onChange={e => setSelectedRoleFilter(e.target.value)}
            className="role-filter"
          >
            <option value="All">All Roles</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>

          <button className="refresh-btn" title="Refresh list">
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="role-stats">
        <div className="stat-item">
          <span className="stat-label">Total Users</span>
          <span className="stat-value">{users.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">SuperAdmins</span>
          <span className="stat-value danger">
            {users.filter(u => u.role === "SuperAdmin").length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Admins</span>
          <span className="stat-value warning">
            {users.filter(u => u.role === "Admin").length}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="rm-table-wrapper">
        {filteredUsers.length === 0 ? (
          <div className="empty-state">
            <AlertTriangle size={32} />
            <h3>No users found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <table className="rm-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Current Role</th>
                <th>Assign New Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">{user.name.charAt(0)}</div>
                      <div className="user-info">
                        <div className="user-name">{user.name}</div>
                        <div className="user-id">ID: {user.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="email-cell">{user.email}</td>
                  <td>
                    <span className={`role-badge ${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className={`role-select ${user.role.toLowerCase()}`}
                    >
                      {roles.map(role => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Security Reminder */}
      <div className="security-reminder">
        <div className="reminder-icon">
          <ShieldCheck size={20} />
        </div>
        <div className="reminder-text">
          <strong>Important:</strong> Role changes are applied instantly. 
          SuperAdmin role grants complete access — use with extreme caution.
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;