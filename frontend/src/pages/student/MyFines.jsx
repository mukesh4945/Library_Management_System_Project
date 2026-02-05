import "./MyFines.css";

const MyFines = () => {
  const fineAmount = 150;

  return (
    <div className="fines-page">
      <div className="fines-header">
        <h2>💰 My Fines</h2>
        <p>Overview of your pending library fines</p>
      </div>

      <div className="fine-card">
        <div className="fine-info">
          <p className="label">Total Pending Fine</p>
          <h1>₹{fineAmount}</h1>
        </div>

        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default MyFines;
