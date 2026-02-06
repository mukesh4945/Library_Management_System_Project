import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Mukesh Admin",
    email: "admin@lms-pro.com",
    password: "",
    bio: "Chief System Administrator",
  });

  const [system, setSystem] = useState({
    darkMode: true,
    notifications: true,
    twoFactor: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSystemChange = (e) => {
    setSystem({ ...system, [e.target.name]: e.target.checked });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Yahan hum ek toast notification trigger kar sakte hain
    alert("Configurations synchronized successfully! 🚀");
  };

  return (
    <div className="settings-container-advance">
      <header className="settings-hero">
        <div className="hero-text">
          <h1>⚙️ Control Center</h1>
          <p>Fine-tune your administrative experience and security protocols.</p>
        </div>
      </header>

      <div className="settings-main-layout">
        {/* --- LEFT COLUMN: PROFILE --- */}
        <section className="settings-glass-card profile-section">
          <div className="card-header">
            <div className="icon-circle">👤</div>
            <h2>Administrative Profile</h2>
          </div>

          <div className="avatar-upload-area">
            <div className="avatar-preview">M</div>
            <button className="change-photo-link">Change Avatar</button>
          </div>

          <form className="settings-form" onSubmit={handleSave}>
            <div className="input-group-advance">
              <label>Full Identity</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Enter full name"
              />
            </div>

            <div className="input-group-advance">
              <label>Security Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </div>

            <div className="input-group-advance">
              <label>Reset Access Password</label>
              <input
                type="password"
                name="password"
                placeholder="Leave blank to keep current"
                value={profile.password}
                onChange={handleProfileChange}
              />
            </div>

            <button type="submit" className="prime-save-btn">
              Update Identity
            </button>
          </form>
        </section>

        {/* --- RIGHT COLUMN: PREFERENCES --- */}
        <div className="settings-right-col">
          <section className="settings-glass-card">
            <div className="card-header">
              <div className="icon-circle">🛠</div>
              <h2>Preferences</h2>
            </div>

            <div className="preference-list">
              <div className="toggle-wrapper">
                <div className="toggle-info">
                  <span className="toggle-label">Stealth Mode (Dark)</span>
                  <span className="toggle-desc">Optimize for low-light environments.</span>
                </div>
                <label className="ios-switch">
                  <input
                    type="checkbox"
                    name="darkMode"
                    checked={system.darkMode}
                    onChange={handleSystemChange}
                  />
                  <span className="ios-slider"></span>
                </label>
              </div>

              <div className="toggle-wrapper">
                <div className="toggle-info">
                  <span className="toggle-label">Push Alerts</span>
                  <span className="toggle-desc">Receive real-time system logs.</span>
                </div>
                <label className="ios-switch">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={system.notifications}
                    onChange={handleSystemChange}
                  />
                  <span className="ios-slider"></span>
                </label>
              </div>
            </div>
          </section>

          <section className="settings-glass-card security-highlight">
            <div className="card-header">
              <div className="icon-circle">🛡</div>
              <h2>System Integrity</h2>
            </div>
            <p className="security-note">Two-factor authentication is currently <strong>Active</strong>.</p>
            <button className="outline-btn">Audit Security Logs</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Settings;