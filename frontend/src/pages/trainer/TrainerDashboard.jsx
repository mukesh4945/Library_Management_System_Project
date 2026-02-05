import "./TrainerDashboard.css";

const TrainerDashboard = () => {
  const stats = [
    { title: "Books Issued", value: 128, icon: "📚" },
    { title: "Books Returned", value: 102, icon: "✅" },
    { title: "Pending Returns", value: 26, icon: "⏳" },
    { title: "Total Fine", value: "₹3,450", icon: "💰" }
  ];

  return (
    <div className="trainer-dashboard">
      <div className="dashboard-header">
        <h2>Trainer Dashboard</h2>
        <p>Overview of library activity & performance</p>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-info">
              <p>{s.title}</p>
              <h3>{s.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerDashboard;
