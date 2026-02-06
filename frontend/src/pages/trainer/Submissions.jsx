import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Download,
  Filter,
  Search
} from 'lucide-react';
import "./Submissions.css";

const Submissions = () => {
  const [filter, setFilter] = useState("All");

  const submissionData = [
    { id: 1, student: "Rahul Singh", task: "React Hooks Assignment", file: "hooks_v1.zip", size: "2.4 MB", status: "Pending", time: "12:40 PM" },
    { id: 2, student: "Sneha Kapoor", task: "CSS Grid Layout", file: "portfolio.pdf", size: "1.1 MB", status: "Graded", time: "Yesterday" },
    { id: 3, student: "Vikram Rathore", task: "JS Logic Task", file: "logic.js", size: "45 KB", status: "Pending", time: "2 Days ago" },
  ];

  return (
    <div className="submissions-page">
      <div className="sub-header">
        <div>
          <h1>Submissions Review</h1>
          <p>Review and provide feedback on student assignments.</p>
        </div>
        <div className="header-stats">
          <div className="mini-stat"><strong>24</strong><span>New</span></div>
          <div className="mini-stat"><strong>158</strong><span>Total</span></div>
        </div>
      </div>

      <div className="sub-controls-card glass-morph">
        <div className="tabs">
          {["All", "Pending", "Graded"].map((t) => (
            <button 
              key={t} 
              className={`tab-btn ${filter === t ? "active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
        
        <div className="search-group">
          <Search size={18} />
          <input type="text" placeholder="Search by student or task..." />
        </div>
      </div>

      <div className="submissions-grid">
        {submissionData.map((item) => (
          <div key={item.id} className="submission-item-card glass-morph">
            <div className="item-top">
              <div className="file-icon-box">
                <FileText size={24} color="#6366f1" />
              </div>
              <div className="item-meta">
                <h4>{item.task}</h4>
                <span>Submitted by <strong>{item.student}</strong></span>
              </div>
              <span className={`status-dot ${item.status.toLowerCase()}`}>
                {item.status === "Graded" ? <CheckCircle2 size={14}/> : <Clock size={14}/>}
                {item.status}
              </span>
            </div>

            <div className="file-details">
              <p>Filename: <code>{item.file}</code></p>
              <p>Size: {item.size}</p>
              <p>Sent: {item.time}</p>
            </div>

            <div className="item-actions">
              <button className="btn-download"><Download size={16}/> Download</button>
              <button className="btn-review">Review & Grade <ExternalLink size={14}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submissions;