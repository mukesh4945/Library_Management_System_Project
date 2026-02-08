import React, { useState } from 'react';
import { RefreshCcw, CheckCircle, XCircle, Clock, Search } from 'lucide-react';
import "./RefundManagement.css";

const RefundManagement = () => {
  const [refunds, setRefunds] = useState([
    { id: "REF106", student: "Neha Gupta", amount: 2500, reason: "Personal Reasons", status: "Pending", date: "2026-02-08" },
    { id: "REF105", student: "Suresh Patel", amount: 4000, reason: "Wrong Course Enrollment", status: "Pending", date: "2026-02-07" },
    { id: "REF104", student: "Rahul Mehta", amount: 1500, reason: "Course Change", status: "Pending", date: "2026-02-06" },
    { id: "REF101", student: "Amit Raj", amount: 2000, reason: "Course Exit", status: "Pending", date: "2026-02-05" },
    { id: "REF102", student: "Vikas Kumar", amount: 5000, reason: "Duplicate Payment", status: "Approved", date: "2026-02-01" },
    { id: "REF103", student: "Priya Singh", amount: 3000, reason: "Technical Issue", status: "Rejected", date: "2026-01-28" }
  ]);

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [modal, setModal] = useState(null);
  const [rotating, setRotating] = useState(false);

  // Counts for tabs
  const counts = {
    All: refunds.length,
    Pending: refunds.filter(r => r.status === "Pending").length,
    Approved: refunds.filter(r => r.status === "Approved").length,
    Rejected: refunds.filter(r => r.status === "Rejected").length
  };

  const handleAction = (id, action) => {
    setRefunds(prev => prev.map(r => 
      r.id === id ? { ...r, status: action === "approve" ? "Approved" : "Rejected" } : r
    ));
    setModal(null);
  };

  const handleRefresh = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 1000);
  };

  // Filtering logic
  let displayedRefunds = refunds.filter(r =>
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.student.toLowerCase().includes(search.toLowerCase()) ||
    r.reason.toLowerCase().includes(search.toLowerCase())
  );

  if (activeTab !== "All") {
    displayedRefunds = displayedRefunds.filter(r => r.status === activeTab);
  }

  return (
    <div className="refund-wrapper">
      {/* Header */}
      <div className="refund-header">
        <h2>🔄 Refund Management</h2>
        <p>Review and process student refund requests with high precision.</p>
      </div>

      {/* Toolbar: Search + Refresh */}
      <div className="toolbar">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search by ID, Student, or Reason..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="refresh-btn" onClick={handleRefresh}>
          <RefreshCcw size={20} className={`refresh-icon ${rotating ? 'rotating' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["All", "Pending", "Approved", "Rejected"].map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} ({counts[tab]})
          </button>
        ))}
      </div>

      {/* Refund Grid */}
      <div className="refund-grid">
        {displayedRefunds.length > 0 ? (
          displayedRefunds.map((req, index) => (
            <div
              className="refund-card glass-effect"
              key={req.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`refund-badge ${req.status.toLowerCase()}`}>
                {req.status}
              </div>
              <div className="refund-body">
                <div className="refund-id">{req.id}</div>
                <h3>{req.student}</h3>
                <p className="refund-reason">"{req.reason}"</p>
                <h2 className="refund-amt">₹{req.amount.toLocaleString()}</h2>
                <div className="refund-date">
                  <Clock size={14} />
                  {req.date}
                </div>
              </div>

              {req.status === "Pending" && (
                <div className="refund-actions">
                  <button
                    className="approve-btn"
                    onClick={() => setModal({ id: req.id, action: "approve" })}
                  >
                    <CheckCircle size={16} />
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => setModal({ id: req.id, action: "reject" })}
                  >
                    <XCircle size={16} />
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No refund requests found matching your criteria.</p>
        )}
      </div>

      {/* Confirmation Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Confirm {modal.action === "approve" ? "Approval" : "Rejection"}</h3>
            {(() => {
              const refund = refunds.find(r => r.id === modal.id);
              return refund ? (
                <p>
                  Are you sure you want to <strong>{modal.action === "approve" ? "approve" : "reject"}</strong> the refund request <strong>{refund.id}</strong> for <strong>{refund.student}</strong> (₹{refund.amount.toLocaleString()})?
                </p>
              ) : null;
            })()}
            <div className="modal-actions">
              <button
                className="confirm-btn"
                style={{ backgroundColor: modal.action === "approve" ? "#27ae60" : "#e74c3c" }}
                onClick={() => handleAction(modal.id, modal.action)}
              >
                Yes, {modal.action === "approve" ? "Approve" : "Reject"}
              </button>
              <button className="cancel-btn" onClick={() => setModal(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RefundManagement;