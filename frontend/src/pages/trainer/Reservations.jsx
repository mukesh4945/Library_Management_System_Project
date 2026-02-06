import { useState } from "react";
import "./Reservations.css";

const Reservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      studentId: "ST101",
      studentName: "Rahul Sharma",
      bookName: "Clean Code",
      status: "Pending",
      requestDate: "2026-02-05"
    },
    {
      id: 2,
      studentId: "ST102",
      studentName: "Anjali Verma",
      bookName: "React in Action",
      status: "Approved",
      requestDate: "2026-02-06"
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: newStatus } : res
      )
    );
  };

  return (
    <div className="res-page-container">
      {/* --- Advanced Header --- */}
      <div className="res-header">
        <div className="title-box">
          <h1>📌 Reservation Queue</h1>
          <p>Review and manage student book-hold requests.</p>
        </div>
        <div className="res-stats-summary">
          <div className="mini-stat">
            <span className="count-label">Waiting</span>
            <span className="count-val">{reservations.filter(r => r.status === "Pending").length}</span>
          </div>
        </div>
      </div>

      {/* --- Table Card --- */}
      <div className="res-glass-table-card">
        <div className="table-header-row">
          <h3>Request History</h3>
          <div className="table-actions">
            <button className="filter-btn">All Requests</button>
          </div>
        </div>

        <div className="res-table-wrapper">
          <table className="modern-res-table">
            <thead>
              <tr>
                <th>Student Identity</th>
                <th>Requested Asset</th>
                <th>Request Date</th>
                <th>Priority Status</th>
                <th>Control Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res.id} className={`res-row ${res.status.toLowerCase()}`}>
                  <td>
                    <div className="res-student-info">
                      <div className="initial-circle">{res.studentName.charAt(0)}</div>
                      <div className="text">
                        <strong>{res.studentName}</strong>
                        <span>{res.studentId}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="res-book-info">
                      <span className="book-tag">📕</span>
                      <span>{res.bookName}</span>
                    </div>
                  </td>
                  <td className="date-cell">{res.requestDate}</td>
                  <td>
                    <div className={`res-status-pill ${res.status.toLowerCase()}`}>
                      <span className="dot"></span>
                      {res.status}
                    </div>
                  </td>
                  <td className="res-actions">
                    {res.status === "Pending" ? (
                      <div className="btn-group">
                        <button 
                          className="action-btn-approve" 
                          onClick={() => updateStatus(res.id, "Approved")}
                        >
                          ✔ Confirm
                        </button>
                        <button 
                          className="action-btn-reject" 
                          onClick={() => updateStatus(res.id, "Rejected")}
                        >
                          ✖ Dismiss
                        </button>
                      </div>
                    ) : (
                      <span className="locked-action">Finalized</span>
                    )}
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

export default Reservations;