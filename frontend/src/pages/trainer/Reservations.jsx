import { useState } from "react";
import "./Reservations.css";

const Reservations = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      studentId: "ST101",
      studentName: "Rahul Sharma",
      bookName: "Clean Code",
      status: "Pending"
    },
    {
      id: 2,
      studentId: "ST102",
      studentName: "Anjali Verma",
      bookName: "React in Action",
      status: "Approved"
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
    <div className="reservations-page">
      <div className="reservations-header">
        <h2>📌 Book Reservations</h2>
        <p>Approve or reject book reservation requests</p>
      </div>

      <div className="table-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Book</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((res) => (
                <tr key={res.id}>
                  <td>
                    <strong>{res.studentName}</strong>
                    <span className="sub">{res.studentId}</span>
                  </td>

                  <td>{res.bookName}</td>

                  <td>
                    <span
                      className={`status ${res.status.toLowerCase()}`}
                    >
                      {res.status}
                    </span>
                  </td>

                  <td className="action-buttons">
                    {res.status === "Pending" ? (
                      <>
                        <button
                          className="approve"
                          onClick={() =>
                            updateStatus(res.id, "Approved")
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="reject"
                          onClick={() =>
                            updateStatus(res.id, "Rejected")
                          }
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="dash">—</span>
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
