import "./Reports.css";

const reportsData = [
  { id: 1, title: "Monthly User Analytics", type: "Users", date: "Feb 2026", status: "Generated", icon: "📊" },
  { id: 2, title: "Book Circulation Report", type: "Inventory", date: "Feb 2026", status: "Generated", icon: "📚" },
  { id: 3, title: "Revenue & Fines Summary", type: "Finance", date: "Jan 2026", status: "Pending", icon: "💰" },
  { id: 4, title: "Student Engagement Log", type: "Users", date: "Jan 2026", status: "Generated", icon: "🎓" },
];

function Reports() {
  const stats = [
    { label: "Total Reports", value: "18", color: "#8b5cf6" },
    { label: "Ready to View", value: "14", color: "#10b981" },
    { label: "In Progress", value: "04", color: "#f59e0b" },
    { label: "Data Integrity", value: "99%", color: "#38bdf8" },
  ];

  return (
    <div className="reports-container">
      {/* --- Header --- */}
      <div className="reports-header">
        <div>
          <h1>📈 Reports & Analytics</h1>
          <p>Generate, schedule, and export system intelligence data.</p>
        </div>
        <button className="primary-action-btn">New Custom Report</button>
      </div>

      {/* --- Advanced Stats Grid --- */}
      <div className="reports-stats-grid">
        {stats.map((s, i) => (
          <div className="analytics-card" key={i} style={{"--accent": s.color}}>
            <div className="card-inner">
              <p>{s.label}</p>
              <h3>{s.value}</h3>
            </div>
            <div className="card-decoration"></div>
          </div>
        ))}
      </div>

      {/* --- Reports Table --- */}
      <div className="table-container-premium">
        <div className="table-header-tools">
          <h2>Archive Library</h2>
          <div className="table-filters">
            <select><option>All Categories</option></select>
            <button className="icon-only-btn">🔍</button>
          </div>
        </div>
        
        <table className="premium-reports-table">
          <thead>
            <tr>
              <th>Report Metadata</th>
              <th>Category</th>
              <th>Period</th>
              <th>Status</th>
              <th>Download / Action</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report) => (
              <tr key={report.id}>
                <td>
                  <div className="report-title-cell">
                    <span className="type-icon">{report.icon}</span>
                    <span className="report-name">{report.title}</span>
                  </div>
                </td>
                <td>
                  <span className="type-pill">{report.type}</span>
                </td>
                <td className="period-cell">{report.date}</td>
                <td>
                  <div className={`status-chip ${report.status.toLowerCase()}`}>
                    {report.status}
                  </div>
                </td>
                <td>
                  <button className={report.status === "Generated" ? "dl-btn" : "gen-btn"}>
                    {report.status === "Generated" ? "📥 Download PDF" : "⚙️ Run Now"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;