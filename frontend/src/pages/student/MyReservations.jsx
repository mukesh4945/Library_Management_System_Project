import "./MyReservations.css";

const MyReservations = () => {
  const reservations = [
    {
      id: "RES-9901",
      book: "React in Action",
      author: "Mark Tielens Thomas",
      date: "05 Jan 2026",
      status: "Pending"
    },
    {
      id: "RES-8842",
      book: "Clean Code",
      author: "Robert C. Martin",
      date: "02 Jan 2026",
      status: "Approved"
    },
    {
      id: "RES-7721",
      book: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      date: "28 Dec 2025",
      status: "Expired"
    }
  ];

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <div className="header-text">
          <h1>📌 My Reservations</h1>
          <p>You have {reservations.length} active requests</p>
        </div>
      </div>

      <div className="reservation-grid">
        {reservations.map((res, index) => (
          <div key={res.id} className="reservation-card" style={{ "--i": index }}>
            <div className="card-top">
              <span className="res-id">{res.id}</span>
              <span className={`status-badge ${res.status.toLowerCase()}`}>
                {res.status}
              </span>
            </div>

            <div className="card-body">
              <h3 className="book-title">{res.book}</h3>
              <p className="book-author">by {res.author}</p>
            </div>

            <div className="card-footer">
              <p className="request-date">
                Requested: <span>{res.date}</span>
              </p>
              {res.status === "Pending" && (
                <button className="cancel-btn">Cancel</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReservations;