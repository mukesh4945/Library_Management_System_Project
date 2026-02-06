import { useState } from "react";
import "./ReturnBook.css";

const ReturnBook = () => {
  const [returns, setReturns] = useState([
    {
      id: 1,
      studentId: "ST-101",
      studentName: "Rahul Sharma",
      bookName: "Clean Code",
      issueDate: "2026-01-01",
      dueDate: "2026-01-10",
      returnDate: "",
      fine: 0,
      status: "Issued"
    },
    {
      id: 2,
      studentId: "ST-205",
      studentName: "Sneha Kapoor",
      bookName: "Advanced React",
      issueDate: "2026-02-01",
      dueDate: "2026-02-07",
      returnDate: "",
      fine: 0,
      status: "Issued"
    }
  ]);

  const handleReturn = (id, returnDate) => {
    if(!returnDate) return;
    
    const updated = returns.map((item) => {
      if (item.id === id) {
        const due = new Date(item.dueDate);
        const returned = new Date(returnDate);

        let fine = 0;
        if (returned > due) {
          const diff = (returned - due) / (1000 * 60 * 60 * 24);
          fine = Math.ceil(diff) * 10;
        }

        return { ...item, returnDate, fine, status: "Returned" };
      }
      return item;
    });

    setReturns(updated);
  };

  return (
    <div className="return-container-pro">
      {/* Header with Quick Search Placeholder */}
      <div className="return-header-section">
        <div className="text-content">
          <h1>📕 Asset Recovery</h1>
          <p>Process returns, calculate overdue penalties, and update inventory.</p>
        </div>
        <div className="search-pill">
          <input type="text" placeholder="Scan Student ID or Book ID..." />
        </div>
      </div>

      {/* Modern Table Card */}
      <div className="return-glass-card">
        <div className="table-responsive">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Member Details</th>
                <th>Asset Identity</th>
                <th>Dates (Issue/Due)</th>
                <th>Return Date Selection</th>
                <th>Calculated Fine</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {returns.map((item) => (
                <tr key={item.id} className={item.status === "Returned" ? "row-finalized" : ""}>
                  <td>
                    <div className="member-cell">
                      <div className="avatar-small">{item.studentName.charAt(0)}</div>
                      <div className="details">
                        <span className="name">{item.studentName}</span>
                        <span className="uid">{item.studentId}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="book-cell">
                      <span className="b-name">{item.bookName}</span>
                    </div>
                  </td>
                  <td>
                    <div className="date-group">
                      <span className="i-date">IS: {item.issueDate}</span>
                      <span className="d-date">DU: {item.dueDate}</span>
                    </div>
                  </td>
                  <td>
                    {item.status === "Issued" ? (
                      <div className="date-input-wrapper">
                        <input
                          type="date"
                          className="pro-date-picker"
                          onChange={(e) => handleReturn(item.id, e.target.value)}
                        />
                      </div>
                    ) : (
                      <span className="final-date">✅ {item.returnDate}</span>
                    )}
                  </td>
                  <td>
                    {item.fine > 0 ? (
                      <div className="fine-tag-alert">₹{item.fine}</div>
                    ) : (
                      <span className="no-fine">Clean</span>
                    )}
                  </td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
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

export default ReturnBook;