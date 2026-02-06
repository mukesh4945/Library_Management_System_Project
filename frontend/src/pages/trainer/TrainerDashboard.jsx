import "./TrainerDashboard.css";

const TrainerDashboard = () => {
  const stats = [
    { title: "Books Issued", value: 128, icon: "📤", color: "#8b5cf6" },
    { title: "Books Returned", value: 102, icon: "📥", color: "#10b981" },
    { title: "Pending Returns", value: 26, icon: "⏳", color: "#f59e0b" },
    { title: "Total Fine", value: "₹3,450", icon: "💰", color: "#ef4444" }
  ];

  const recentTransactions = [
    { id: "T-901", user: "Rahul S.", book: "Modern React", type: "Issue", time: "10 mins ago" },
    { id: "T-902", user: "Amit K.", book: "Python Basics", type: "Return", time: "45 mins ago" },
  ];

  return (
    <div className="trainer-dashboard-wrapper">
      {/* --- Header Area --- */}
      <div className="dashboard-top-bar">
        <div className="welcome-msg">
          <h2>Trainer Analytics Portal</h2>
          <p>Real-time tracking of library assets and student returns.</p>
        </div>
        <div className="time-display">
          <span>📅 {new Date().toLocaleDateString()}</span>
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

      {/* --- Middle Section: Quick Action & Recent Trans --- */}
      <div className="dashboard-grid-dual">
        
        {/* Quick Book Issue Form */}
        <div className="action-panel glass-effect">
          <div className="panel-head">
            <h3>⚡ Quick Issue</h3>
          </div>
          <div className="quick-form">
            <input type="text" placeholder="Student ID (e.g. ST-101)" />
            <input type="text" placeholder="Book ISBN or Title" />
            <button className="flash-issue-btn">Confirm Dispatch</button>
          </div>
        </div>

        {/* Live Transaction Feed */}
        <div className="activity-panel glass-effect">
          <div className="panel-head">
            <h3>🔄 Recent Activity</h3>
            <button className="view-link">History</button>
          </div>
          <div className="feed-list">
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
    </div>
  );
};

export default TrainerDashboard;