import { useState } from "react";
import "./EditTrainerProfile.css";

const EditTrainerProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "Mukesh Sir",
    email: "mukesh.trainer@lms.com",
    phone: "+91 98765 43210",
    specialization: "Full Stack Development",
    bio: "Senior Technical Trainer with 10+ years of experience in MERN stack.",
    avatar: "/image/profile.png"
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile Synchronized Successfully! ✨");
    }, 1500);
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-glass">
        
        {/* --- LEFT SIDE: AVATAR & QUICK INFO --- */}
        <div className="profile-aside">
          <div className="avatar-edit-wrapper">
            <img src={profile.avatar} alt="Trainer" className="main-avatar" />
            <label htmlFor="upload-photo" className="upload-badge">
              <span className="camera-icon">📸</span>
            </label>
            <input type="file" id="upload-photo" hidden />
          </div>
          <div className="aside-text">
            <h3>{profile.fullName}</h3>
            <p>{profile.specialization}</p>
          </div>
          <div className="verification-status">
            <span className="v-icon">✔</span> Verified Educator
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="profile-main-form">
          <div className="form-header-pro">
            <h2>Edit Professional Profile</h2>
            <p>Update your personal information and public bio.</p>
          </div>

          <form onSubmit={handleSave} className="pro-grid-form">
            <div className="input-field-group">
              <label>Full Identity</label>
              <input 
                type="text" 
                name="fullName" 
                value={profile.fullName} 
                onChange={handleChange} 
              />
            </div>

            <div className="input-field-group">
              <label>Official Email</label>
              <input 
                type="email" 
                name="email" 
                value={profile.email} 
                onChange={handleChange} 
              />
            </div>

            <div className="input-field-group">
              <label>Contact Number</label>
              <input 
                type="text" 
                name="phone" 
                value={profile.phone} 
                onChange={handleChange} 
              />
            </div>

            <div className="input-field-group">
              <label>Academic Specialization</label>
              <input 
                type="text" 
                name="specialization" 
                value={profile.specialization} 
                onChange={handleChange} 
              />
            </div>

            <div className="input-field-group full-width">
              <label>Professional Bio</label>
              <textarea 
                name="bio" 
                rows="4" 
                value={profile.bio} 
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">Discard</button>
              <button type="submit" className={`save-pro-btn ${isSaving ? 'loading' : ''}`}>
                {isSaving ? "Syncing..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default EditTrainerProfile;