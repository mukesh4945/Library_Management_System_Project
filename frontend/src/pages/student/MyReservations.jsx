import "./MyReservations.css";

const MyReservations = () => {
  const reservations = [
    {
      id: 1,
      book: "React in Action",
      date: "05 Jan 2026",
      status: "Pending"
    },
    {
      id: 2,
      book: "Clean Code",
      date: "02 Jan 2026",
      status: "Approved"
    }
  ];

  return (
    <div className="my-reservations-page">
      <div className="reservations-header">
        <h2>📌 My Reservations</h2>
        <p>Track your book reservation requests</p>
      </div>

      <div className="reservation-grid">
        {reservations.map((res) => (
          <div key={res.id} className="reservation-card">
            <div className="card-top">
              <h3>{res.book}</h3>
              <span
                className={`status ${res.status.toLowerCase()}`}
              >
                {res.status}
              </span>
            </div>

            <p className="date">
              Requested on <strong>{res.date}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReservations;
