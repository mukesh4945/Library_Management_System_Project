import React, { useState } from 'react';
import { 
  Users, ShieldCheck, FileBarChart, Activity, ArrowUpRight, ArrowDownRight,
  AlertTriangle, Server, Database, Settings, Bell, RefreshCw, Search, 
  BarChart3, PieChart, TrendingUp, Lock 
} from 'lucide-react';
import "./SuperAdminDashboard.css";

const SuperAdminDashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const stats = [
    { title: "Total Admins", value: "12", icon: <ShieldCheck />, trend: "+2 this month", isPositive: true, color: "#6366f1" },
    { title: "Total Students", value: "1,240", icon: <Users />, trend: "+15%", isPositive: true, color: "#10b981" },
    { title: "Active Courses", value: "84", icon: <FileBarChart />, trend: "Live", isPositive: true, color: "#f59e0b" },
    { title: "Live Sessions", value: "312", icon: <Activity />, trend: "-5%", isPositive: false, color: "#ef4444" },
  ];
  
  const alerts = [
    { type: "warning", message: "3 payment gateways showing 5%+ failure rate", time: "14 min ago" },
    { type: "error", message: "Database backup failed at 02:00 AM", time: "1 hr ago" },
    { type: "info", message: "New admin account created: rahul@admin.in", time: "3 hrs ago" },
  ];

  const recentActivities = [
    { action: "User Ban", target: "user1234@gmail.com", by: "Admin Priya", time: "10 min ago" },
    { action: "Course Published", target: "Advanced React & Redux 2026", by: "Admin Amit", time: "45 min ago" },
    { action: "Refund Processed", target: "REF-1982", by: "Admin Vikas", time: "2 hrs ago" },
    { action: "System Update", target: "v2.4.1 deployed", by: "Auto", time: "Yesterday" },
  ];

  const systemHealth = [
    { name: "API Server", status: "healthy", load: "42%", icon: <Server /> },
    { name: "Database", status: "healthy", load: "68%", icon: <Database /> },
    { name: "Storage", status: "warning", load: "89%", icon: <Lock /> },
    { name: "CDN", status: "healthy", load: "21%", icon: <BarChart3 /> },
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <div className="sa-dashboard-wrapper sa-page-content">
      {/* Header */}
      <div className="sa-dashboard-header">
        <div className="header-left">
          <h1>Super Admin <span>Control Center</span></h1>
          <p>Monitor • Manage • Secure — Full system visibility</p>
        </div>
        <div className="header-right">
          <div className="current-date">
            {new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
         
        </div>
      </div>

      {/* Quick Stats */}
      <div className="sa-stats-grid">
        {stats.map((stat, i) => (
          <div 
            className="sa-stat-card glass-morph animate-in" 
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="card-top">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <span className={`trend ${stat.isPositive ? 'up' : 'down'}`}>
                {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </span>
            </div>
            <div className="card-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* System Health & Alerts */}
      <div className="sa-two-column">
        {/* System Health */}
        <div className="sa-health-card glass-morph animate-in" style={{ animationDelay: "0.4s" }}>
          <div className="card-header">
            <h3><Activity size={20} /> System Health</h3>
            <span className="status-pill healthy">All Systems Operational</span>
          </div>
          <div className="health-grid">
            {systemHealth.map((item, i) => (
              <div className="health-item" key={i}>
                <div className="health-icon" style={{ color: item.status === 'healthy' ? '#10b981' : '#f59e0b' }}>
                  {item.icon}
                </div>
                <div className="health-info">
                  <span className="name">{item.name}</span>
                  <span className={`status ${item.status}`}>{item.status.toUpperCase()}</span>
                </div>
                <div className="health-load">
                  <span>{item.load}</span>
                  <div className="load-bar">
                    <div 
                      className="load-fill" 
                      style={{ 
                        width: item.load, 
                        background: item.status === 'healthy' ? '#10b981' : '#f59e0b' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="sa-alerts-card glass-morph animate-in" style={{ animationDelay: "0.5s" }}>
          <div className="card-header">
            <h3><AlertTriangle size={20} /> Critical Alerts</h3>
            <span className="alert-count">{alerts.length} Active</span>
          </div>
          <div className="alerts-list">
            {alerts.map((alert, i) => (
              <div className={`alert-item ${alert.type}`} key={i}>
                <div className="alert-icon">
                  {alert.type === 'error' ? <AlertTriangle /> : <Bell />}
                </div>
                <div className="alert-content">
                  <p>{alert.message}</p>
                  <span className="alert-time">{alert.time}</span>
                </div>
              </div>
            ))}
            {alerts.length === 0 && <p className="no-alerts">No critical alerts at the moment.</p>}
          </div>
        </div>
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="sa-two-column bottom-section">
        {/* Recent Activity */}
        <div className="sa-activity-card glass-morph animate-in">
          <div className="card-header">
            <h3><TrendingUp size={20} /> Recent Activity</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activity-list">
            {recentActivities.map((act, i) => (
              <div className="activity-item" key={i}>
                <div className="activity-icon">
                  <Settings size={16} />
                </div>
                <div className="activity-details">
                  <strong>{act.action}</strong>
                  <span className="target">{act.target}</span>
                  <div className="meta">
                    <span>by {act.by}</span>
                    <span>• {act.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Widgets */}
        <div className="sa-quick-actions glass-morph animate-in">
          <h3><PieChart size={20} /> Quick Actions</h3>
          <div className="quick-grid">
            <button className="quick-btn"><Users size={20} /> Manage Users</button>
            <button className="quick-btn"><ShieldCheck size={20} /> Admin Roles</button>
            <button className="quick-btn"><Database size={20} /> Backup Now</button>
            <button className="quick-btn danger"><Lock size={20} /> Security Logs</button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="dashboard-footer">
        <p>Super Admin Dashboard v2.4.1 • Last refreshed: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;