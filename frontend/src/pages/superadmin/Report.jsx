import React from 'react';
import { 
  FileText, 
  Users, 
  Activity, 
  CreditCard, 
  Download, 
  ArrowUpRight, 
  BarChart3, 
  TrendingUp, 
  RefreshCw,
  Calendar 
} from 'lucide-react';
import "./Report.css";

const Report = () => {
  const reportsList = [
    { 
      title: "User Growth Report", 
      desc: "Students, trainers & admin registration trends over time", 
      icon: <Users size={26} />, 
      color: "#6366f1",
      type: "growth"
    },
    { 
      title: "Admin Activity Log", 
      desc: "Detailed audit trail of all admin actions & changes", 
      icon: <Activity size={26} />, 
      color: "#10b981",
      type: "activity"
    },
    { 
      title: "Revenue & Payments", 
      desc: "Course sales, refunds, pending fees & transaction summary", 
      icon: <CreditCard size={26} />, 
      color: "#f59e0b",
      type: "finance"
    },
    { 
      title: "Course Engagement", 
      desc: "Completion rates, average time spent, dropout analysis", 
      icon: <BarChart3 size={26} />, 
      color: "#8b5cf6",
      type: "engagement"
    }
  ];

  return (
    <div className="reports-container">
      {/* Header */}
      <div className="reports-header">
        <div className="header-left">
          <h2>Analytics & Reports</h2>
          <p>Track performance, revenue, user behavior and system health</p>
        </div>

        <div className="header-actions">
          
          <button className="export-all-btn">
            <Download size={18} /> Export All Reports
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="reports-summary">
        <div className="summary-card">
          <div className="summary-icon success">
            <TrendingUp size={22} />
          </div>
          <div className="summary-content">
            <span className="label">Active Users Today</span>
            <h3>1,284</h3>
            <small className="positive">+18% from yesterday</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon warning">
            <Calendar size={22} />
          </div>
          <div className="summary-content">
            <span className="label">Revenue This Month</span>
            <h3>₹8,42,600</h3>
            <small className="positive">+12% vs last month</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon danger">
            <Activity size={22} />
          </div>
          <div className="summary-content">
            <span className="label">Server Uptime</span>
            <h3>99.98%</h3>
            <small>Healthy • No incidents</small>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="reports-grid">
        {reportsList.map((report, index) => (
          <div 
            key={index} 
            className="report-card animate-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-header">
              <div 
                className="report-icon"
                style={{ 
                  background: `${report.color}15`,
                  color: report.color 
                }}
              >
                {report.icon}
              </div>
              <button className="preview-btn" title="View report">
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="card-body">
              <h3>{report.title}</h3>
              <p>{report.desc}</p>
            </div>

            <div className="card-footer">
              <button className="format-btn pdf">
                <FileText size={16} /> PDF
              </button>
              <button className="format-btn csv">
                <Download size={16} /> CSV
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="reports-footer">
        <p>Last updated: {new Date().toLocaleString('en-IN', { 
          dateStyle: 'medium', 
          timeStyle: 'short' 
        })}</p>
      </div>
    </div>
  );
};

export default Report;