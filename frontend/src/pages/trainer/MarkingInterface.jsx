import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Save, Star, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'; // CheckCircle & ArrowLeft added
import "./MarkingInterface.css";

const MarkingInterface = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL se student id nikalne ke liye
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // Success State

  const handlePublish = () => {
    if (!score) {
      alert("Please enter a score before publishing.");
      return;
    }

    // Yahan Success dikhao
    setShowSuccess(true);

    // 3 Second baad wapas list par bhej do
    setTimeout(() => {
      navigate('/trainer/assessments');
    }, 3000);
  };

  // Success Overlay View
  if (showSuccess) {
    return (
      <div className="success-overlay">
        <div className="success-card glass-card">
          <div className="success-icon-wrap">
            <CheckCircle size={80} color="#10b981" />
          </div>
          <h2>Grade Published!</h2>
          <p>Marks: <strong>{score}/100</strong> has been sent to the student.</p>
          <button onClick={() => navigate('/trainer/assessments')} className="back-link-btn">
            <ArrowLeft size={18} /> Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="marking-container">
      {/* Top Bar */}
      <div className="marking-header">
        <button onClick={() => navigate(-1)} className="back-btn-pro">
          <ChevronLeft size={20} /> Back
        </button>
        <div className="grading-title">
          <h2>Submission Review</h2>
          <p>Student ID: {id || "Rahul Singh"} | Task: React Fundamentals</p>
        </div>
        <button className="publish-btn" onClick={handlePublish}>
          <Save size={18} /> Publish Grade
        </button>
      </div>

      <div className="marking-grid">
        {/* Left: Code/Work Preview */}
        <div className="work-preview-box glass-card">
          <div className="box-header">student_response.js</div>
          <div className="code-display">
            <pre>
              <code>
                {`// Student Logic
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// Trainer Note: Logic is correct but
// should handle edge cases for null prices.`}
              </code>
            </pre>
          </div>
        </div>

        {/* Right: Grading Panel */}
        <div className="grading-panel glass-card">
          <div className="score-input-section">
            <label>Marks Obtained</label>
            <div className="input-row">
              <input 
                type="number" 
                placeholder="0"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>

          <div className="feedback-section">
            <label>Trainer Feedback</label>
            <textarea 
              placeholder="Write constructive feedback for the student..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <div className="quick-stats-mini">
            <div className="q-item">
              <Star size={16} color="#ffd700" />
              <span>Top Performer Potential</span>
            </div>
          </div>

          <div className="alert-notice">
            <AlertCircle size={18} />
            <p>Result will be visible to the student immediately after publishing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkingInterface;