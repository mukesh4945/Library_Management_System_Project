import React from 'react';
import { FileText, Star, MessageSquare, CheckCircle } from 'lucide-react';
import "./StudentGrades.css";

const StudentGrades = () => {
  // Ye data Trainer ke 'MarkingInterface' se aayega
  const myGrades = [
    {
      id: 1,
      subject: "React Fundamentals",
      score: 85,
      total: 100,
      trainer: "Mukesh Trainer",
      feedback: "Great job on the component structure! Just focus more on State management.",
      status: "Graded",
      date: "07 Feb 2026"
    },
    {
      id: 2,
      subject: "JavaScript Basics",
      score: null,
      total: 100,
      trainer: "Mukesh Trainer",
      feedback: "Pending review",
      status: "Under Review",
      date: "05 Feb 2026"
    }
  ];

  return (
    <div className="grades-container">
      <div className="grades-header">
        <h2>My Assessments & Feedback</h2>
        <p>View your performance and notes from your trainers.</p>
      </div>

      <div className="grades-list">
        {myGrades.map((grade) => (
          <div className="grade-card glass-card" key={grade.id}>
            <div className="card-top">
              <div className="subject-info">
                <FileText className="icon-blue" />
                <div>
                  <h3>{grade.subject}</h3>
                  <span>Trainer: {grade.trainer}</span>
                </div>
              </div>
              <div className={`status-tag ${grade.status.toLowerCase().replace(" ", "-")}`}>
                {grade.status}
              </div>
            </div>

            <div className="score-display-section">
              <div className="score-circle">
                {grade.score ? (
                  <>
                    <h2>{grade.score}</h2>
                    <span>/ {grade.total}</span>
                  </>
                ) : (
                  <h2 className="pending-text">--</h2>
                )}
              </div>
              <div className="feedback-content">
                <div className="feedback-label">
                  <MessageSquare size={16} /> Trainer Feedback
                </div>
                <p>{grade.feedback}</p>
              </div>
            </div>

            <div className="card-footer">
              <span>Date: {grade.date}</span>
              {grade.score >= 80 && (
                <div className="badge">
                  <Star size={14} fill="#ffd700" color="#ffd700" /> Top Performer
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentGrades;