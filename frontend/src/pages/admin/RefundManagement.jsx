import React, { useState } from 'react';
import { RefreshCcw, CheckCircle, XCircle, Clock } from 'lucide-react';
import "./RefundManagement.css";

const RefundManagement = () => {
  const [refunds, setRefunds] = useState([
    { id: "REF101", student: "Amit Raj", amount: 2000, reason: "Course Exit", status: "Pending", date: "2026-02-05" },
    { id: "REF102", student: "Vikas Kumar", amount: 5000, reason: "Duplicate Payment", status: "Approved", date: "2026-02-01" }
  ]);

  return (
    <div className="refund-wrapper">
      <div className="refund-header">
        <h2>🔄 Refund Management</h2>
        <p>Review and process student refund requests with high precision.</p>
      </div>

      <div className="refund-grid">
        {refunds.map((req) => (
          <div className="refund-card glass-effect" key={req.id}>
            <div className="refund-badge">{req.status}</div>
            <div className="refund-body">
              <div className="refund-id">{req.id}</div>
              <h3>{req.student}</h3>
              <p className="refund-reason">"{req.reason}"</p>
              <h2 className="refund-amt">₹{req.amount}</h2>
              <div className="refund-date"><Clock size={14}/> {req.date}</div>
            </div>
            
            {req.status === "Pending" && (
              <div className="refund-actions">
                <button className="approve-btn"><CheckCircle size={16}/> Approve</button>
                <button className="reject-btn"><XCircle size={16}/> Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundManagement;