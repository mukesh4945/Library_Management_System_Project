import "./MyFines.css";

const MyFines = () => {
  const totalFine = 150;
  
  const fineHistory = [
    { id: 1, book: "Clean Code", date: "15 Jan 2026", amount: 50, reason: "Late Return", status: "Unpaid" },
    { id: 2, book: "React Design Patterns", date: "20 Jan 2026", amount: 100, reason: "Overdue", status: "Unpaid" },
    { id: 3, book: "Eloquent JavaScript", date: "05 Dec 2025", amount: 20, reason: "Late Return", status: "Paid" },
  ];

  return (
    <div className="fines-container">
      <div className="fines-header-section">
        <h1>💰 My Fines & Payments</h1>
        <p>Clear your dues to continue borrowing books smoothly.</p>
      </div>

      <div className="fines-layout">
        {/* --- Left: Total Fine Summary --- */}
        <div className="total-fine-card">
          <div className="fine-glow-circle">
            <span className="currency">₹</span>
            <span className="amount">{totalFine}</span>
          </div>
          <p className="fine-label">Total Outstanding Balance</p>
          <button className="pay-now-btn">Pay Now via UPI/Card</button>
          <p className="secure-text">🔒 100% Secure Payments</p>
        </div>

        {/* --- Right: Fine Breakup / History --- */}
        <div className="fine-history-card">
          <h3>Recent Fine History</h3>
          <div className="history-list">
            {fineHistory.map((item) => (
              <div key={item.id} className="history-item">
                <div className="item-details">
                  <span className="item-book">{item.book}</span>
                  <span className="item-reason">{item.reason} • {item.date}</span>
                </div>
                <div className="item-amount-status">
                  <span className="item-price">₹{item.amount}</span>
                  <span className={`status-tag ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFines;