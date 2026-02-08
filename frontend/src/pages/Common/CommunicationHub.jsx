import React, { useState } from 'react';
import { 
  Send, Bell, Users, MessageSquare, Search, RefreshCcw, 
  Calendar as CalendarIcon, Layout, Clock as ClockIcon, X 
} from 'lucide-react';
import "./CommunicationHub.css";

const CommunicationHub = () => {
  const [announcements, setAnnouncements] = useState([
    { id: "ANN105", audience: "All Students", subject: "Holiday Notice", message: "Upcoming holiday on February 10th for Republic Day celebrations.", date: "2026-02-07", sender: "Admin" },
    { id: "ANN104", audience: "Fullstack Web Batch", subject: "Project Deadline Extension", message: "The final project submission has been extended to Friday.", date: "2026-02-06", sender: "Instructor" },
    { id: "ANN101", audience: "Fullstack Web Batch", subject: "Exam Schedule Updated", message: "The final assessments for Week 6 have been rescheduled to Monday.", date: "2026-02-01", sender: "Admin" }
  ]);

  const [form, setForm] = useState({ audience: "", subject: "", message: "", type: "Announcement" });
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [modal, setModal] = useState(false);
  const [rotating, setRotating] = useState(false);
  
  // Week 6 New States
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [showPopupPreview, setShowPopupPreview] = useState(false);

  const audiences = ["All Students", "Fullstack Web Batch", "Data Science Batch"];
  const templates = [
    { name: "Fee Reminder", icon: "💰" },
    { name: "Exam Alert", icon: "✍️" },
    { name: "Holiday Notice", icon: "🏖️" }
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const confirmSend = () => {
    const newAnn = {
      id: `ANN${announcements.length + 106}`,
      ...form,
      date: isScheduled ? scheduleDate.split('T')[0] : new Date().toISOString().split('T')[0],
      sender: "Admin",
      isScheduled: isScheduled
    };
    setAnnouncements([newAnn, ...announcements]);
    setForm({ audience: "", subject: "", message: "", type: "Announcement" });
    setIsScheduled(false);
    setModal(false);
  };

  const handleRefresh = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 1000);
  };

  let displayedAnn = announcements.filter(a =>
    a.subject.toLowerCase().includes(search.toLowerCase()) ||
    a.message.toLowerCase().includes(search.toLowerCase()) ||
    a.audience.toLowerCase().includes(search.toLowerCase())
  );
  if (activeTab !== "All") displayedAnn = displayedAnn.filter(a => a.audience === activeTab);

  return (
    <div className="comm-container">
      <header className="comm-header">
        <h1>Communication Hub</h1>
        <p>Broadcast messages, schedule emails, and manage student popups.</p>
      </header>

      <div className="toolbar">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search announcements..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button className="refresh-btn" onClick={handleRefresh}>
          <RefreshCcw size={20} className={rotating ? 'rotating' : ''} /> Refresh
        </button>
      </div>

      <div className="tabs">
        {["All", ...audiences].map(tab => (
          <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div className="comm-grid">
        {/* Left Side: Builder & Form */}
        <div className="builder-section">
          {/* Email Template Builder Preview */}
          <div className="template-builder glass-morph mb-4">
            <h3><Layout size={20}/> Email Template Builder</h3>
            <div className="template-grid">
              {templates.map(t => (
                <div key={t.name} className="template-card" onClick={() => setForm({...form, subject: t.name})}>
                  <span>{t.icon}</span> {t.name}
                </div>
              ))}
            </div>
          </div>

          {/* Main Broadcast Form */}
          <div className="comm-card glass-morph">
            <h3><Bell size={20}/> Create Broadcast</h3>
            <form className="comm-form" onSubmit={(e) => { e.preventDefault(); setModal(true); }}>
              <select name="audience" value={form.audience} onChange={handleChange} className="glass-input" required>
                <option value="">Select Audience</option>
                {audiences.map(aud => <option key={aud} value={aud}>{aud}</option>)}
              </select>
              
              <input type="text" name="subject" placeholder="Notice Subject" value={form.subject} onChange={handleChange} className="glass-input" required />
              
              <textarea name="message" placeholder="Message content..." rows="4" value={form.message} onChange={handleChange} className="glass-input" required></textarea>

              {/* Schedule Feature */}
              <div className="schedule-toggle">
                <label className="checkbox-label">
                  <input type="checkbox" checked={isScheduled} onChange={(e) => setIsScheduled(e.target.checked)} />
                  <span>Schedule for later?</span>
                </label>
                {isScheduled && (
                  <div className="date-input-wrap">
                    <ClockIcon size={16}/>
                    <input type="datetime-local" className="glass-input-sm" onChange={(e) => setScheduleDate(e.target.value)} required />
                  </div>
                )}
              </div>

              <div className="action-buttons">
                <button type="submit" className="send-btn">Send <Send size={18}/></button>
                <button type="button" className="popup-btn" onClick={() => setShowPopupPreview(true)}>Preview Popup</button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Feed */}
        <div className="comm-card glass-morph feed-card">
          <h3><MessageSquare size={20}/> Recent Announcements</h3>
          <div className="feed-list">
            {displayedAnn.map((ann, index) => (
              <div key={ann.id} className="feed-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feed-icon"><Users size={16}/></div>
                <div className="feed-content">
                  <h4>{ann.subject} {ann.isScheduled && <span className="scheduled-badge">Scheduled</span>}</h4>
                  <p>{ann.message}</p>
                  <span>{ann.sender} • {ann.date} • <strong className="aud-txt">{ann.audience}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Week 6: One-Way Announcement Popup Preview */}
      {showPopupPreview && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <Bell color="#fff" fill="#fff" />
              <button onClick={() => setShowPopupPreview(false)}><X/></button>
            </div>
            <div className="popup-body">
              <h2>{form.subject || "Important Announcement"}</h2>
              <p>{form.message || "This is how students will see your popup notification on their dashboard."}</p>
              <button className="confirm-btn" onClick={() => setShowPopupPreview(false)}>Understood</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Ready to Broadcast?</h3>
            <p>Target: <strong>{form.audience}</strong></p>
            {isScheduled && <p className="date-txt">Scheduled for: {scheduleDate}</p>}
            <div className="modal-actions">
              <button className="confirm-btn" onClick={confirmSend}>Confirm & Send</button>
              <button className="cancel-btn" onClick={() => setModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationHub;