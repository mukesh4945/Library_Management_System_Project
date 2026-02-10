import React, { useState } from 'react';
import { 
  Settings, 
  ShieldAlert, 
  UserPlus, 
  Save, 
  Database, 
  Globe, 
  Server, 
  Mail, 
  Lock, 
  RefreshCw, 
  AlertTriangle,
  Clock,
  Trash2
} from 'lucide-react';
import "./SystemSettings.css";

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    maintenance: false,
    registrations: true,
    emailNotifications: true,
    debugMode: false,
    allowTeacherSignup: false,
    forcePasswordReset: false,
    twoFactorRequired: false,
    autoLogoutMinutes: 30
  });

  const [saveStatus, setSaveStatus] = useState(null); // null | 'saving' | 'success' | 'error'

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 5 && value <= 1440) {
      setSettings(prev => ({ ...prev, autoLogoutMinutes: value }));
    }
  };

  const handleSave = () => {
    setSaveStatus('saving');
    
    // simulate api call
    setTimeout(() => {
      // here you would normally send to backend
      setSaveStatus(Math.random() > 0.1 ? 'success' : 'error');
      
      setTimeout(() => setSaveStatus(null), 2600);
    }, 1200);
  };

  return (
    <div className="ss-container">
      {/* Header */}
      <div className="ss-header">
        <div className="header-left">
          <h2>System Configuration</h2>
          <p>Global platform settings, security controls & maintenance</p>
        </div>

        <div className="header-actions">
          {saveStatus === 'saving' && (
            <div className="save-status saving">
              <RefreshCw size={16} className="spinning" /> Saving...
            </div>
          )}
          
          {saveStatus === 'success' && (
            <div className="save-status success">
              <Save size={16} /> Changes Saved
            </div>
          )}
          
          {saveStatus === 'error' && (
            <div className="save-status error">
              <AlertTriangle size={16} /> Save Failed
            </div>
          )}

          <button 
            className={`ss-save-btn ${saveStatus === 'saving' ? 'disabled' : ''}`}
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
          >
            <Save size={18} /> 
            {saveStatus === 'saving' ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>

      <div className="ss-grid">

        {/* General & Access Controls */}
        <div className="ss-card glass-card">
          <div className="ss-card-title">
            <Settings size={20} />
            <h3>Platform Access</h3>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap danger"><ShieldAlert size={18}/></div>
              <div>
                <strong>Maintenance Mode</strong>
                <p>Platform visible only to SuperAdmins. Everyone else sees maintenance page.</p>
              </div>
            </div>
            <label className="switch danger">
              <input 
                type="checkbox" 
                checked={settings.maintenance} 
                onChange={() => handleToggle('maintenance')} 
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap"><UserPlus size={18}/></div>
              <div>
                <strong>Allow Student Registration</strong>
                <p>New users can create student accounts</p>
              </div>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.registrations} 
                onChange={() => handleToggle('registrations')} 
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap"><UserPlus size={18} color="#8b5cf6"/></div>
              <div>
                <strong>Allow Trainer Signup</strong>
                <p>Teachers/trainers can register themselves</p>
              </div>
            </div>
            <label className="switch purple">
              <input 
                type="checkbox" 
                checked={settings.allowTeacherSignup} 
                onChange={() => handleToggle('allowTeacherSignup')} 
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap"><Mail size={18}/></div>
              <div>
                <strong>Global Email Notifications</strong>
                <p>Send important system emails (new user, payment, etc)</p>
              </div>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.emailNotifications} 
                onChange={() => handleToggle('emailNotifications')} 
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Security & Authentication */}
        <div className="ss-card glass-card">
          <div className="ss-card-title">
            <Lock size={20} />
            <h3>Security Controls</h3>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap danger"><ShieldAlert size={18}/></div>
              <div>
                <strong>Force Password Reset on Next Login</strong>
                <p>All users must change password after next login</p>
              </div>
            </div>
            <label className="switch danger">
              <input 
                type="checkbox" 
                checked={settings.forcePasswordReset} 
                onChange={() => handleToggle('forcePasswordReset')} 
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap"><ShieldAlert size={18}/></div>
              <div>
                <strong>Require 2FA for Admin & Trainer</strong>
                <p>Mandatory two-factor authentication</p>
              </div>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.twoFactorRequired} 
                onChange={() => handleToggle('twoFactorRequired')} 
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <div className="icon-wrap"><Clock size={18}/></div>
              <div>
                <strong>Auto Logout after inactivity</strong>
                <p>Log out users after X minutes of no activity</p>
              </div>
            </div>
            <div className="number-input-wrap">
              <input
                type="number"
                min="5"
                max="1440"
                value={settings.autoLogoutMinutes}
                onChange={handleNumberChange}
                className="number-input"
              />
              <span className="unit">minutes</span>
            </div>
          </div>

          <div className="danger-zone">
            <h4>Danger Zone</h4>
            <button className="danger-btn">
              <Trash2 size={18} /> Delete All Debug Logs
            </button>
          </div>
        </div>

        {/* Server & Status Information */}
        <div className="ss-card glass-card status-card">
          <div className="ss-card-title">
            <Server size={20} />
            <h3>System Status</h3>
          </div>

          <div className="status-grid">
            <div className="status-item">
              <span className="status-label">Server</span>
              <span className="status-value online">Online</span>
            </div>
            <div className="status-item">
              <span className="status-label">Database</span>
              <span className="status-value online">Connected</span>
            </div>
            <div className="status-item">
              <span className="status-label">Last Backup</span>
              <span className="status-value">Today, 03:12 AM</span>
            </div>
            <div className="status-item">
              <span className="status-label">Platform Version</span>
              <span className="status-value">v2.4.1 • build 2026.02</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn primary">
              <Database size={16} /> Run Manual Backup
            </button>
            <button className="action-btn">
              <RefreshCw size={16} /> Check for Updates
            </button>
          </div>

          <div className="version-info">
            <Globe size={16} />
            <span>MongoDB • Node v20 • React v18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;