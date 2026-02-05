import { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ amount, onSuccess, onClose }) => {
  const [method, setMethod] = useState("card");
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="payment-overlay">
      <div className="payment-modal">
        <h2>💳 Complete Payment</h2>
        <p className="amount">Payable: ₹{amount}</p>

        <div className="payment-tabs">
          <button
            className={method === "card" ? "active" : ""}
            onClick={() => setMethod("card")}
          >
            Card
          </button>
          <button
            className={method === "upi" ? "active" : ""}
            onClick={() => setMethod("upi")}
          >
            UPI
          </button>
          <button
            className={method === "wallet" ? "active" : ""}
            onClick={() => setMethod("wallet")}
          >
            Wallet
          </button>
        </div>

        {method === "card" && (
          <div className="pay-form">
            <input placeholder="Card Number" maxLength="16" />
            <input placeholder="MM/YY" />
            <input placeholder="CVV" maxLength="3" />
          </div>
        )}

        {method === "upi" && (
          <div className="pay-form">
            <input placeholder="example@upi" />
          </div>
        )}

        {method === "wallet" && (
          <div className="wallet-box">
            <p>✔ Paytm</p>
            <p>✔ PhonePe</p>
            <p>✔ Amazon Pay</p>
          </div>
        )}

        <div className="payment-actions">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button onClick={handlePay} disabled={processing}>
            {processing ? "Processing..." : `Pay ₹${amount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
