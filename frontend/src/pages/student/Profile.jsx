import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const savedUser = JSON.parse(localStorage.getItem("studentProfile"));

  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(
    savedUser || {
      name: "Mukesh Vishwakarma",
      email: "mukesh@gmail.com",
      phone: "9876543210",
      role: "Student",
      photo: "/image/profile.png"
    }
  );

  const [tempUser, setTempUser] = useState(user);

  const handleSave = () => {
    setUser(tempUser);
    localStorage.setItem("studentProfile", JSON.stringify(tempUser));
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setTempUser({ ...tempUser, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header-text">
        <h1>👤 Account Settings</h1>
        <p>Manage your personal information and profile visibility.</p>
      </div>

      <div className="profile-card-main">
        {/* --- Left Side: Avatar Section --- */}
        <div className="avatar-section">
          <div className="avatar-glow-ring">
            <img 
              src={editMode ? tempUser.photo : user.photo} 
              alt="Profile" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + user.name; }}
            />
            {editMode && (
              <label className="image-overlay">
                <span>📷 Change</span>
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </label>
            )}
          </div>
          <h2 className="display-name">{user.name}</h2>
          <span className="role-badge">{user.role}</span>
        </div>

        {/* --- Right Side: Details Form --- */}
        <div className="details-section">
          <div className="info-grid">
            <div className="info-group">
              <label>Full Name</label>
              {!editMode ? (
                <p className="read-only-text">{user.name}</p>
              ) : (
                <input
                  type="text"
                  value={tempUser.name}
                  onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                />
              )}
            </div>

            <div className="info-group">
              <label>Email Address</label>
              {!editMode ? (
                <p className="read-only-text">{user.email}</p>
              ) : (
                <input
                  type="email"
                  value={tempUser.email}
                  onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                />
              )}
            </div>

            <div className="info-group">
              <label>Phone Number</label>
              {!editMode ? (
                <p className="read-only-text">{user.phone}</p>
              ) : (
                <input
                  type="text"
                  value={tempUser.phone}
                  onChange={(e) => setTempUser({ ...tempUser, phone: e.target.value })}
                />
              )}
            </div>

            <div className="info-group">
              <label>Library ID (Role)</label>
              <p className="read-only-text permanent">{user.role}</p>
            </div>
          </div>

          {/* --- Buttons Section --- */}
          <div className="form-actions">
            {!editMode ? (
              <button className="edit-btn" onClick={() => setEditMode(true)}>
                ⚙️ Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button className="save-btn" onClick={handleSave}>Confirm Changes</button>
                <button className="cancel-btn" onClick={() => {
                  setTempUser(user);
                  setEditMode(false);
                }}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;