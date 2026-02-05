import { useState } from "react";
import "./ReturnBook.css";

const ReturnBook = () => {
  const [returns, setReturns] = useState([
    {
      id: 1,
      studentId: "ST101",
      studentName: "Rahul Sharma",
      bookName: "Clean Code",
      issueDate: "2026-01-01",
      dueDate: "2026-01-10",
      returnDate: "",
      fine: 0,
      status: "Issued"
    }
  ]);

  const handleReturn = (id, returnDate) => {
    const updated = returns.map((item) => {
      if (item.id === id) {
        const due = new Date(item.dueDate);
        const returned = new Date(returnDate);

        let fine = 0;
        if (returned > due) {
          const diff =
            (returned - due) / (1000 * 60 * 60 * 24);
          fine = Math.ceil(diff) * 10;
        }

        return {
          ...item,
          returnDate,
          fine,
          status: "Returned"
        };
      }
      return item;
    });

    setReturns(updated);
  };

  return (
    <div className="return-page">
      <div className="return-header">
        <h2>📕 Return Book</h2>
        <p>Manage book returns and fines</p>
      </div>

      <div className="table-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Book</th>
                <th>Issue</th>
                <th>Due</th>
                <th>Return</th>
                <th>Fine</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {returns.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.studentName}</strong>
                    <span className="sub">{item.studentId}</span>
                  </td>

                  <td>{item.bookName}</td>
                  <td>{item.issueDate}</td>
                  <td>{item.dueDate}</td>

                  <td>
                    {item.status === "Issued" ? (
                      <input
                        type="date"
                        onChange={(e) =>
                          handleReturn(item.id, e.target.value)
                        }
                      />
                    ) : (
                      item.returnDate
                    )}
                  </td>

                  <td>
                    {item.fine > 0 ? (
                      <span className="fine">₹{item.fine}</span>
                    ) : (
                      "—"
                    )}
                  </td>

                  <td>
                    <span
                      className={`status ${item.status.toLowerCase()}`}
                    >
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
