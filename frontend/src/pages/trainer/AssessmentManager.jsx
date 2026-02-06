import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  Search, 
  FileText,
  Filter,
  MoreVertical,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import "./AssessmentManager.css";

const AssessmentManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const submissions = [
    { id: 1, student: "Rahul Singh", email: "rahul@lms.com", task: "React Fundamentals Quiz", date: "2 Hours ago", status: "Needs Grading", initial: "RS", color: "#6366f1" },
    { id: 2, student: "Priya Sharma", email: "priya@lms.com", task: "Advanced CSS Lab", date: "Yesterday", status: "Completed", initial: "PS", color: "#10b981" },
    { id: 3, student: "Amit Verma", email: "amit@lms.com", task: "JS Logic Challenge", date: "3 Days ago", status: "Overdue", initial: "AV", color: "#f59e0b" },
    { id: 4, student: "Sana Sheikh", email: "sana@lms.com", task: "Node API Project", date: "5 Hours ago", status: "Needs Grading", initial: "SS", color: "#ec4899" },
  ];

  // Filtering Logic
  const filteredSubmissions = submissions.filter(sub => 
    sub.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="assessment-container">
      {/* Background Blobs for Glassmorphism Effect */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <header className="assessment-header">
        <div className="header-info">
          <div className="badge-mini">Management Console</div>
          <h1>Assessment Hub</h1>
          <p>Track student performance & evaluate submissions in real-time.</p>
        </div>
        <div className="header-actions">
           <button className="btn-secondary"><ArrowUpRight size={18}/> Export Report</button>
           <button className="btn-primary"><Plus size={20} /> New Test</button>
        </div>
      </header>

      {/* Stats Cards with Hover Glow */}
      <div className="stats-wrapper">
        <div className="stat-card glass-morph">
          <div className="stat-icon-wrap ic-orange"><Clock /></div>
          <div className="stat-content">
            <span className="label">Pending</span>
            <h3>14</h3>
          </div>
        </div>
        <div className="stat-card glass-morph">
          <div className="stat-icon-wrap ic-green"><CheckCircle /></div>
          <div className="stat-content">
            <span className="label">Evaluated</span>
            <h3>125</h3>
          </div>
        </div>
        <div className="stat-card glass-morph">
          <div className="stat-icon-wrap ic-blue"><FileText /></div>
          <div className="stat-content">
            <span className="label">Active</span>
            <h3>08</h3>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="content-card glass-morph">
        <div className="table-toolbar">
          <div className="toolbar-left">
            <h3>Recent Submissions</h3>
            <span className="live-indicator">● Live</span>
          </div>
          <div className="toolbar-right">
            <div className="search-box">
              <Search size={18} className="search-icon"/>
              <input 
                type="text" 
                placeholder="Search name or task..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-btn"><Filter size={18}/></button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Student Profile</th>
                <th>Assessment Task</th>
                <th>Submission Timing</th>
                <th>Status</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions.map((sub) => (
                <tr key={sub.id} className="row-hover">
                  <td>
                    <div className="profile-cell">
                      <div className="avatar-pro" style={{backgroundColor: sub.color}}>{sub.initial}</div>
                      <div className="name-wrap">
                        <span className="st-name">{sub.student}</span>
                        <span className="st-email">{sub.email}</span>
                      </div>
                    </div>
                  </td>
                  <td><span className="task-text">{sub.task}</span></td>
                  <td><span className="time-text">{sub.date}</span></td>
                  <td>
                    <span className={`status-tag ${sub.status.toLowerCase().replace(" ", "-")}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      <button className="grade-btn">Grade</button>
                      <button className="more-btn"><MoreVertical size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssessmentManager;