import React, { useState } from 'react';
import { UserPlus, Search, MoreVertical, ShieldAlert, UserCheck, Mail, RefreshCw } from 'lucide-react';
import "./ManageAdmins.css";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul.admin@platform.in", status: "Active", joined: "12 Jan 2026" },
    { id: 2, name: "Priya Mehta", email: "priya@admin.in", status: "Active", joined: "05 Feb 2026" },
    { id: 3, name: "Vikram Singh", email: "vikram@superadmin.in", status: "Inactive", joined: "18 Dec 2025" },
    { id: 4, name: "Neha Patel", email: "neha.support@platform.in", status: "Active", joined: "29 Oct 2025" },
  ]);

  const [search, setSearch] = useState("");

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(search.toLowerCase()) ||
    admin.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ma-container">
      {/* Header */}
      <div className="ma-header">
        <div>
          <h2>Manage Administrators</h2>
          <p>Control, monitor and manage admin accounts & privileges</p>
        </div>
        <div className="header-actions">
          <button className="add-admin-btn">
            <UserPlus size={18} /> Add New Admin
          </button>
          <button className="refresh-btn" title="Refresh list">
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="ma-controls">
        <div className="ma-search">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="ma-stats">
          <span>Total Admins: <strong>{filteredAdmins.length}</strong></span>
        </div>
      </div>

      {/* Table */}
      <div className="ma-table-wrapper">
        {filteredAdmins.length === 0 ? (
          <div className="no-results">
            No admins found matching your search.
          </div>
        ) : (
          <table className="ma-table">
            <thead>
              <tr>
                <th>Admin Profile</th>
                <th>Date Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map(admin => (
                <tr key={admin.id}>
                  <td>
                    <div className="admin-profile">
                      <div className="avatar">{admin.name.charAt(0)}</div>
                      <div className="info">
                        <div className="name">{admin.name}</div>
                        <div className="email">
                          <Mail size={13} /> {admin.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="date-cell">{admin.joined}</td>
                  <td>
                    <span className={`status-tag ${admin.status.toLowerCase()}`}>
                      {admin.status === "Active" ? <UserCheck size={14} /> : <ShieldAlert size={14} />}
                      {admin.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="action-btn edit">Edit</button>
                      <button className={`action-btn ${admin.status === "Active" ? "block" : "unblock"}`}>
                        {admin.status === "Active" ? "Block" : "Unblock"}
                      </button>
                      <button className="action-btn more">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageAdmins;