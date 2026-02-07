import React, { useState } from 'react';
import { Search, RotateCcw, AlertTriangle, CheckCircle, Calculator } from 'lucide-react';
import "./ReturnBook.css";

const ReturnBook = () => {
  const [searchId, setSearchId] = useState("");
  const [fine, setFine] = useState(0);
  const [isDamaged, setIsDamaged] = useState(false);

  // Fake logic for fine calculation
  const handleCalculateFine = () => {
    // Agar book 5 din late hai aur per day 10rs fine hai
    let totalFine = 50 + (isDamaged ? 100 : 0); 
    setFine(totalFine);
  };

  return (
    <div className="return-container">
      <div className="return-header">
        <h2>Return Asset Management</h2>
        <p>Process book returns and calculate penalties for overdue or damaged items.</p>
      </div>

      <div className="return-grid">
        {/* Left Side: Search & Details */}
        <div className="return-card glass-morph">
          <div className="search-section-pro">
            <label>Scan Book or Enter ID</label>
            <div className="search-bar-pro">
              <input 
                type="text" 
                placeholder="e.g. BK-9052" 
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <button className="search-btn-mini"><Search size={18} /></button>
            </div>
          </div>

          <div className="book-details-preview">
             <div className="preview-row"><span>Student:</span> <strong>Rahul Singh</strong></div>
             <div className="preview-row"><span>Book Title:</span> <strong>Mastering React</strong></div>
             <div className="preview-row"><span>Due Date:</span> <strong className="text-warning">01 Feb 2026</strong></div>
          </div>
        </div>

        {/* Right Side: Fine & Action */}
        <div className="return-card glass-morph">
          <h3><Calculator size={20} /> Assessment & Fine</h3>
          
          <div className="damage-check">
            <label className="checkbox-container">
              <input type="checkbox" checked={isDamaged} onChange={() => setIsDamaged(!isDamaged)} />
              <span className="checkmark"></span>
              Book is Damaged? (+₹100)
            </label>
          </div>

          <div className="fine-display-box">
             <span>Calculated Fine:</span>
             <h2>₹{fine}</h2>
             <button onClick={handleCalculateFine} className="recalc-btn">Calculate Now</button>
          </div>

          <button className="complete-return-btn">
            <RotateCcw size={18} /> Confirm Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnBook;