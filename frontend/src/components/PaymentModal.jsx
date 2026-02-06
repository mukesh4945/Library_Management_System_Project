import { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ amount, onSuccess, onClose }) => {
  const [method, setMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  
  // Card Visual States
  const [cardData, setCardData] = useState({ number: "**** ****", name: "YOUR NAME", expiry: "MM/YY" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handlePay = () => {
    setProcessing(true);
    // Fake Processing logic
    setTimeout(() => {
      setProcessing(false);
      setPaymentDone(true); // Show success animation
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 2500);
  };

  if (paymentDone) {
    return (
      <div className="payment-overlay">
        <div className="payment-modal success-anim">
          <div className="checkmark-wrapper">
            <svg className="checkmark" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h2>Payment Successful!</h2>
          <p>Redirecting to your course...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-overlay">
      <div className="payment-modal">
        <button className="close-x" onClick={onClose}>&times;</button>
        <h2>💳 Checkout</h2>
        <p className="amount">Total: <span>₹{amount}</span></p>

        <div className="payment-tabs">
          {['card', 'upi', 'wallet'].map((tab) => (
            <button 
              key={tab}
              className={method === tab ? "active" : ""} 
              onClick={() => setMethod(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {method === "card" && (
          <div className="card-container">
            {/* Real Visual Card */}
            <div className="virtual-card">
              <div className="chip"></div>
              <div className="card-num">{cardData.number || "**** **** **** ****"}</div>
              <div className="card-bottom">
                <div className="card-holder">
                  <label>Card Holder</label>
                  <div>{cardData.name}</div>
                </div>
                <div className="card-expiry">
                  <label>Expires</label>
                  <div>{cardData.expiry}</div>
                </div>
              </div>
            </div>

            <div className="pay-form">
              <input name="number" placeholder="Card Number" maxLength="16" onChange={handleInputChange} />
              <div className="row">
                <input name="expiry" placeholder="MM/YY" onChange={handleInputChange} />
                <input name="cvv" placeholder="CVV" maxLength="3" type="password" />
              </div>
              <input name="name" placeholder="Full Name" onChange={handleInputChange} />
            </div>
          </div>
        )}

        {method === "upi" && (
          <div className="pay-form upi-section">
             <div className="qr-placeholder">Scan QR or Enter ID</div>
             <input placeholder="example@upi" className="upi-input" />
          </div>
        )}

        // Wallet section ke liye ye part replace karein
{method === "wallet" && (
  <div className="wallet-grid">
    {['Paytm', 'PhonePe', 'GPay', 'Amazon Pay'].map((w) => (
      <div 
        key={w}
        className={`wallet-item ${cardData.wallet === w ? "selected" : ""}`}
        onClick={() => setCardData({ ...cardData, wallet: w })}
      >
        <span className="dot"></span>
        {w}
      </div>
    ))}
  </div>
)}

        <div className="payment-actions">
          <button 
            className={`pay-btn ${processing ? "loading" : ""}`} 
            onClick={handlePay} 
            disabled={processing}
          >
            {processing ? "" : `Pay ₹${amount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;