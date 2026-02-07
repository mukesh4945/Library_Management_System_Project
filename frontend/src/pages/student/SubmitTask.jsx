import React, { useState } from 'react';
import { Upload, FileText, Send, CheckCircle } from 'lucide-react';
import "./SubmitTask.css";

const SubmitTask = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first!");
    
    // Logic: File aur Text ko Trainer ke 'Submissions.jsx' panel mein bhejna
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submission-success glass-card">
        <CheckCircle size={60} color="#10b981" />
        <h2>Work Submitted!</h2>
        <p>Your assignment has been sent to the trainer for grading.</p>
        <button onClick={() => setSubmitted(false)} className="re-submit-btn">Edit Submission</button>
      </div>
    );
  }

  return (
    <div className="submit-task-container">
      <div className="submit-header">
        <h2>Submit Your Assignment</h2>
        <p>Upload your project files and add a brief note for your trainer.</p>
      </div>

      <form className="submission-form glass-card" onSubmit={handleSubmit}>
        {/* File Upload Area */}
        <div className="upload-zone">
          <input 
            type="file" 
            id="file-upload" 
            onChange={handleFileChange} 
            hidden 
          />
          <label htmlFor="file-upload" className="upload-label">
            <Upload size={40} color="#6366f1" />
            <span>{file ? file.name : "Click to upload or drag & drop"}</span>
            <p>PDF, ZIP, or JS files (Max 10MB)</p>
          </label>
        </div>

        {/* Text Area for Note */}
        <div className="text-note-area">
          <label><FileText size={18} /> Description / Note</label>
          <textarea 
            placeholder="Write a brief summary of your work or any issues you faced..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <Send size={18} /> Submit Assessment
        </button>
      </form>
    </div>
  );
};

export default SubmitTask;