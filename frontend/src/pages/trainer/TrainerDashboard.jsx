import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'; // Recharts import karein
import "./TrainerDashboard.css";

const TrainerDashboard = () => {
  // Performance Chart ka Data
  const chartData = [
    { day: "Mon", issues: 12 }, { day: "Tue", issues: 18 },
    { day: "Wed", issues: 15 }, { day: "Thu", issues: 25 },
    { day: "Fri", issues: 22 }, { day: "Sat", issues: 30 },
  ];

  const stats = [
    { title: "Books Issued", value: 128, icon: "📤", color: "#8b5cf6" },
    { title: "Books Returned", value: 102, icon: "📥", color: "#10b981" },
    { title: "Pending Returns", value: 26, icon: "⏳", color: "#f59e0b" },
    { title: "Total Fine", value: "₹3,450", icon: "💰", color: "#ef4444" }
  ];

  const recentTransactions = [
    { id: "T-901", user: "Rahul S.", book: "Modern React", type: "Issue", time: "10 mins ago" },
    { id: "T-902", user: "Amit K.", book: "Python Basics", type: "Return", time: "45 mins ago" },
    { id: "T-903", user: "Priya M.", book: "UX Design", type: "Issue", time: "1 hr ago" },
  ];

  // Quick Issue State
  const [issueData, setIssueData] = useState({ studentId: '', bookId: '' });

  const handleQuickIssue = () => {
    if(!issueData.studentId || !issueData.bookId) return alert("Please fill details");
    alert(`Book ${issueData.bookId} dispatched to ${issueData.studentId}`);
    setIssueData({ studentId: '', bookId: '' });
  };

  return (
    <div className="trainer-dashboard-wrapper">
      {/* --- Header Area --- */}
      <div className="dashboard-top-bar">
        <div className="welcome-msg">
          <h2>Trainer Analytics Portal</h2>
          <p>Real-time tracking of library assets and student returns.</p>
        </div>
        <div className="time-display">
          <span>📅 {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* --- Stats Grid --- */}
      <div className="trainer-stats-container">
        {stats.map((s, i) => (
          <div className="modern-stat-card" key={i} style={{ "--accent": s.color }}>
            <div className="stat-icon-wrap">{s.icon}</div>
            <div className="stat-content">
              <h3>{s.value}</h3>
              <p>{s.title}</p>
            </div>
            <div className="stat-wave"></div>
          </div>
        ))}
      </div>

      {/* --- Charts & Action Section --- */}
      <div className="dashboard-grid-main">
        
        {/* Analytics Graph */}
        <div className="chart-panel glass-effect">
           <div className="panel-head">
             <h3>📈 Weekly Issuance Trend</h3>
           </div>
           <div className="chart-container" style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px' }}
                    itemStyle={{ color: '#8b5cf6' }}
                  />
                  <Area type="monotone" dataKey="issues" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorWave)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Quick Issue Form */}
        <div className="action-panel glass-effect">
          <div className="panel-head">
            <h3>⚡ Quick Issue</h3>
          </div>
          <div className="quick-form">
            <input 
              type="text" 
              placeholder="Student ID (e.g. ST-101)" 
              value={issueData.studentId}
              onChange={(e) => setIssueData({...issueData, studentId: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Book ISBN or Title" 
              value={issueData.bookId}
              onChange={(e) => setIssueData({...issueData, bookId: e.target.value})}
            />
            <button className="flash-issue-btn" onClick={handleQuickIssue}>Confirm Dispatch</button>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Activity Feed --- */}
      <div className="full-width-panel glass-effect">
        <div className="panel-head">
          <h3>🔄 Recent Activity Feed</h3>
          <button className="view-link">View All History</button>
        </div>
        <div className="feed-grid">
          {recentTransactions.map((t, idx) => (
            <div className="feed-item" key={idx}>
              <div className={`type-tag ${t.type.toLowerCase()}`}>{t.type}</div>
              <div className="feed-info">
                <strong>{t.user}</strong>
                <span>{t.book}</span>
              </div>
              <div className="feed-time">{t.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;