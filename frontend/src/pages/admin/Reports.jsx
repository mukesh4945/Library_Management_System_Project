import "./Reports.css";

const reportsData = [
  {
    id: 1,
    title: "Monthly User Report",
    type: "Users",
    date: "Aug 2026",
    status: "Generated",
  },
  {
    id: 2,
    title: "Course Enrollment Report",
    type: "Courses",
    date: "Aug 2026",
    status: "Generated",
  },
  {
    id: 3,
    title: "Revenue Report",
    type: "Finance",
    date: "Jul 2026",
    status: "Pending",
  },
  {
    id: 4,
    title: "Active Students Report",
    type: "Users",
    date: "Jul 2026",
    status: "Generated",
  },
];

function Reports() {
  return (
    <div className="reports-page">
      <h1 className="page-title">Reports</h1>

      {/* SUMMARY CARDS */}
      <div className="reports-stats">
        <div className="stat-card">
          <h3>Total Reports</h3>
          <p>18</p>
        </div>

        <div className="stat-card">
          <h3>Generated</h3>
          <p>14</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>4</p>
        </div>

        <div className="stat-card">
          <h3>Last Updated</h3>
          <p>2 days ago</p>
        </div>
      </div>

      {/* REPORT TABLE */}
      <div className="table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Category</th>
              <th>Period</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reportsData.map((report) => (
              <tr key={report.id}>
                <td data-label="Report Name">{report.title}</td>
                <td data-label="Category">{report.type}</td>
                <td data-label="Period">{report.date}</td>
                <td data-label="Status">
                  <span
                    className={
                      report.status === "Generated"
                        ? "status generated"
                        : "status pending"
                    }
                  >
                    {report.status}
                  </span>
                </td>
                <td data-label="Action">
                  <button className="download-btn">
                    {report.status === "Generated"
                      ? "Download"
                      : "Generate"}
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
