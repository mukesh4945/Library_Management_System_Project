import React, { useState } from 'react';
import { UserPlus, BookOpen, Calendar, CheckCircle2, QrCode } from 'lucide-react';
import "./IssueBook.css";

const IssueBook = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    bookId: '',
    returnDate: ''
  });

  const handleIssue = (e) => {
    e.preventDefault();
    alert(`Book ${formData.bookId} issued to ${formData.studentId}`);
  };

  return (
    <div className="issue-container-main">
      <div className="issue-top-text">
        <h2>Dispatch Library Asset</h2>
        <p>Register a new book issuance to a student's profile.</p>
      </div>

      <div className="issue-wrapper-grid">
        {/* Left Form */}
        <div className="form-card-glass">
          <form onSubmit={handleIssue}>
            <div className="custom-input-box">
              <label><UserPlus size={18} /> Student ID</label>
              <input 
                type="text" 
                placeholder="e.g. STU102"
                value={formData.studentId}
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
              />
            </div>

            <div className="custom-input-box">
              <label><BookOpen size={18} /> Book ID / ISBN</label>
              <input 
                type="text" 
                placeholder="Scan or Enter ID"
                value={formData.bookId}
                onChange={(e) => setFormData({...formData, bookId: e.target.value})}
              />
            </div>

            <div className="custom-input-box">
              <label><Calendar size={18} /> Return Date</label>
              <input 
                type="date" 
                value={formData.returnDate}
                onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
              />
            </div>

            <button type="submit" className="issue-confirm-btn">
              Confirm & Issue Book
            </button>
          </form>
        </div>

        {/* Right Info Panel */}
        <div className="info-card-glass">
          <h3>Quick Guidelines</h3>
          <div className="guide-item">
            <CheckCircle2 size={20} className="text-success" />
            <span>Verify Student ID against Identity Card.</span>
          </div>
          <div className="guide-item">
            <CheckCircle2 size={20} className="text-success" />
            <span>Ensure the Book is not already reserved.</span>
          </div>
          <div className="guide-item">
            <CheckCircle2 size={20} className="text-success" />
            <span>Default return period is 14 days.</span>
          </div>

          <div className="barcode-visual">
             <QrCode size={40} className="qr-icon" />
             <div className="scan-line"></div>
             <p>Ready to scan barcode...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;