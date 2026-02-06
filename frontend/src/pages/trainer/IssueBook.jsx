import { useState } from "react";
import "./IssueBook.css";

const IssueBook = () => {
  const [formData, setFormData] = useState({ studentId: "", bookId: "" });

  return (
    <div className="issue-page-wrapper">
      <div className="issue-glass-container">
        {/* Left Side: Form */}
        <div className="issue-form-section">
          <div className="form-header">
            <span className="badge-new">Smart Dispatch</span>
            <h2>Dispatch Library Asset</h2>
            <p>Authorized personnel only. Ensure student ID is valid.</p>
          </div>

          <form className="issue-modern-form" onSubmit={(e) => e.preventDefault()}>
            <div className="animated-input-group">
              <input 
                type="text" 
                required 
                value={formData.studentId}
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
              />
              <label>Student Identity Number (SID)</label>
              <span className="input-focus-line"></span>
            </div>

            <div className="animated-input-group">
              <input 
                type="text" 
                required 
                value={formData.bookId}
                onChange={(e) => setFormData({...formData, bookId: e.target.value})}
              />
              <label>Universal Book ID / ISBN</label>
              <span className="input-focus-line"></span>
            </div>

            <div className="issue-meta-info">
              <div className="meta-item">
                <span>Issue Date:</span>
                <strong>{new Date().toLocaleDateString()}</strong>
              </div>
              <div className="meta-item">
                <span>Due Period:</span>
                <strong>14 Days Standard</strong>
              </div>
            </div>

            <button className="confirm-issue-btn">
              Confirm Transaction 🚀
            </button>
          </form>
        </div>

        {/* Right Side: Live Preview (The "Cool" Factor) */}
        <div className="issue-preview-section">
          <div className="preview-card">
            <h3>Transaction Preview</h3>
            <div className="preview-status">
              {formData.studentId && formData.bookId ? (
                <div className="preview-content">
                  <div className="preview-row">
                    <span>Issuing To:</span>
                    <p>Rahul Sharma (ST-204)</p>
                  </div>
                  <div className="preview-row">
                    <span>Book Title:</span>
                    <p>Eloquent JavaScript 4th Ed.</p>
                  </div>
                  <div className="status-indicator-green">Ready to Link</div>
                </div>
              ) : (
                <div className="preview-placeholder">
                  <div className="scan-anim"></div>
                  <p>Awaiting identification...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;