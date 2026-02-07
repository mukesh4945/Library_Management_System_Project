import React, { useState } from 'react';
import { IndianRupee, Search, Filter, ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react';
import "./FeeManagement.css";

const FeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // State Management for Students Data
  const [studentsData, setStudentsData] = useState([
    { id: "STU001", name: "Rahul Verma", course: "Full Stack", total: 45000, paid: 15000, status: "Partial", lastPaid: "2026-01-15" },
    { id: "STU002", name: "Sneha Kapoor", course: "Data Science", total: 60000, paid: 60000, status: "Paid", lastPaid: "2026-02-01" },
    { id: "STU003", name: "Amit Raj", course: "UI/UX", total: 30000, paid: 5000, status: "Overdue", lastPaid: "2025-12-20" },
  ]);

  // --- LOGIC: Fee Collection with Validation ---
  const collectFee = (id) => {
    const amountStr = prompt("Enter installment amount to collect:");
    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
      alert("⚠️ Please enter a valid amount!");
      return;
    }

    setStudentsData(prevData => prevData.map(student => {
      if (student.id === id) {
        const newPaidTotal = student.paid + amount;

        // CRITICAL VALIDATION: System Invalidation Check
        if (newPaidTotal > student.total) {
          alert(`❌ Error: Collection exceeds total fees! Max allowed: ₹${student.total - student.paid}`);
          return student;
        }

        // Auto Status Update Logic
        let newStatus = "Partial";
        if (newPaidTotal === student.total) newStatus = "Paid";

        alert(`✅ Payment of ₹${amount} recorded for ${student.name}`);
        return { ...student, paid: newPaidTotal, status: newStatus, lastPaid: new Date().toISOString().split('T')[0] };
      }
      return student;
    }));
  };

  // --- CALCULATIONS: Accurate Tracking ---
  const totalReceivable = studentsData.reduce((sum, s) => sum + s.total, 0);
  const totalCollected = studentsData.reduce((sum, s) => sum + s.paid, 0);
  const totalOutstanding = totalReceivable - totalCollected;

  // Filter Logic
  const filteredStudents = studentsData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fee-mgmt-wrapper">
      <div className="fee-header">
        <h1>Fee & Instalment Management</h1>
        <div className="header-actions">
          <div className="search-bar-mini">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search student or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="refund-master-btn">
            <RefreshCcw size={16} /> Refund Requests
          </button>
        </div>
      </div>

      <div className="fee-stats-grid">
        <div className="stat-box collected">
          <ArrowUpRight className="icon" />
          <div className="info">
            <p>Total Collected</p>
            <h3>₹{totalCollected.toLocaleString()}</h3>
          </div>
        </div>
        <div className="stat-box pending">
          <ArrowDownRight className="icon" />
          <div className="info">
            <p>Outstanding Fees</p>
            <h3>₹{totalOutstanding.toLocaleString()}</h3>
          </div>
        </div>
      </div>

      <div className="fee-table-card glass-effect">
        <table className="fee-master-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Total Fees</th>
              <th>Paid (Instalments)</th>
              <th>Remaining</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => {
              const remaining = student.total - student.paid;
              return (
                <tr key={student.id}>
                  <td><span className="id-badge">{student.id}</span></td>
                  <td><strong>{student.name}</strong><br/><small>{student.course}</small></td>
                  <td>₹{student.total.toLocaleString()}</td>
                  <td className="paid-col">₹{student.paid.toLocaleString()}</td>
                  <td className="due-col">₹{remaining.toLocaleString()}</td>
                  <td>
                    <span className={`status-pill ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="update-fee-btn"
                      onClick={() => collectFee(student.id)}
                      disabled={student.status === "Paid"}
                      style={{ opacity: student.status === "Paid" ? 0.5 : 1 }}
                    >
                      {student.status === "Paid" ? "Fully Paid" : "Collect Fee"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeManagement;