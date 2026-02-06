import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: true,
    twoStepAuth: false,
    autoApproveReservations: false,
    language: "English",
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="settings-wrapper-pro">
      <div className="settings-header-main">
        <h1>⚙️ System Settings</h1>
        <p>Configure your trainer workspace and security preferences.</p>
      </div>

      <div className="settings-grid-layout">
        
        {/* --- SECTION 1: SYSTEM PREFERENCES --- */}
        <div className="settings-glass-card-pro">
          <div className="card-top">
            <span className="icon-bg">🛠</span>
            <h3>Workspace</h3>
          </div>
          
          <div className="setting-row-item">
            <div className="info">
              <label>Stealth Mode (Dark)</label>
              <p>Reduce eye strain during late-night audits.</p>
            </div>
            <label className="toggle-switch-pro">
              <input 
                type="checkbox" 
                checked={settings.darkMode} 
                onChange={() => toggleSetting('darkMode')} 
              />
              <span className="slider-pro"></span>
            </label>
          </div>

          <div className="setting-row-item">
            <div className="info">
              <label>Interface Language</label>
              <p>Selected language for system logs.</p>
            </div>
            <select className="pro-select">
              <option>English (US)</option>
              <option>Hindi (IN)</option>
              <option>Spanish (ES)</option>
            </select>
          </div>
        </div>

        {/* --- SECTION 2: NOTIFICATIONS --- */}
        <div className="settings-glass-card-pro">
          <div className="card-top">
            <span className="icon-bg">🔔</span>
            <h3>Alerts & Logs</h3>
          </div>
          
          <div className="setting-row-item">
            <div className="info">
              <label>Email Reports</label>
              <p>Get daily summaries of issued/returned books.</p>
            </div>
            <label className="toggle-switch-pro">
              <input 
                type="checkbox" 
                checked={settings.emailNotifications} 
                onChange={() => toggleSetting('emailNotifications')} 
              />
              <span className="slider-pro"></span>
            </label>
          </div>

          <div className="setting-row-item">
            <div className="info">
              <label>Auto-Approve Reservations</label>
              <p>Instantly approve book holds for top-tier students.</p>
            </div>
            <label className="toggle-switch-pro">
              <input 
                type="checkbox" 
                checked={settings.autoApproveReservations} 
                onChange={() => toggleSetting('autoApproveReservations')} 
              />
              <span className="slider-pro"></span>
            </label>
          </div>
        </div>

        {/* --- SECTION 3: SECURITY --- */}
        <div className="settings-glass-card-pro security-card">
          <div className="card-top">
            <span className="icon-bg">🛡</span>
            <h3>Security Architecture</h3>
          </div>
          
          <div className="setting-row-item">
            <div className="info">
              <label>Two-Factor Authentication</label>
              <p>Secure your trainer account with OTP.</p>
            </div>
            <label className="toggle-switch-pro">
              <input 
                type="checkbox" 
                checked={settings.twoStepAuth} 
                onChange={() => toggleSetting('twoStepAuth')} 
              />
              <span className="slider-pro"></span>
            </label>
          </div>

          <button className="reset-pass-btn">Change Access Credentials</button>
        </div>

        {/* --- SECTION 4: DANGER ZONE --- */}
        <div className="settings-glass-card-pro danger-zone">
          <div className="card-top">
            <span className="icon-bg">⚠️</span>
            <h3>Advanced Actions</h3>
          </div>
          <p className="danger-text">Wipe temporary cache or reset your local workspace settings.</p>
          <div className="danger-btns">
            <button className="outline-danger">Clear Logs</button>
            <button className="solid-danger">Reset Workspace</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;