import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    password: "",
  });

  const [system, setSystem] = useState({
    darkMode: false,
    notifications: true,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSystemChange = (e) => {
    setSystem({ ...system, [e.target.name]: e.target.checked });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully ✅");
  };

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your profile and system preferences</p>
      </div>

      <div className="settings-grid">
        {/* PROFILE SETTINGS */}
        <form className="settings-card" onSubmit={handleSave}>
          <h2>👤 Profile Settings</h2>

          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </div>

          <div className="field">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={profile.password}
              onChange={handleProfileChange}
            />
          </div>

          <button type="submit" className="save-btn">
            Save Profile
          </button>
        </form>

        {/* SYSTEM SETTINGS */}
        <div className="settings-card">
          <h2>🛠 System Settings</h2>

          <div className="toggle-row">
            <span>Dark Mode</span>
            <label className="switch">
              <input
                type="checkbox"
                name="darkMode"
                checked={system.darkMode}
                onChange={handleSystemChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-row">
            <span>Email Notifications</span>
            <label className="switch">
              <input
                type="checkbox"
                name="notifications"
                checked={system.notifications}
                onChange={handleSystemChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <button className="save-btn" onClick={handleSave}>
            Save System Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
