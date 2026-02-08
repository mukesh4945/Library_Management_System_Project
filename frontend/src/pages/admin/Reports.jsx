import React, { useState } from 'react';
import { 
  TrendingUp, Users, BookOpen, CreditCard, Download, 
  Calendar, FileText, FileSpreadsheet, Filter 
} from 'lucide-react';
import "./Reports.css";

const Reports = () => {
  const [activeReport, setActiveReport] = useState("Finance");
  const [exportFormat, setExportFormat] = useState("PDF");

  const categories = [
    { id: "Enrollment", icon: <Users size={18}/> },
    { id: "Finance", icon: <CreditCard size={18}/> },
    { id: "Attendance", icon: <Calendar size={18}/> },
    { id: "Library", icon: <BookOpen size={18}/> }
  ];
const Reports = () => {
  // 1. Aapka Dummy Data (Jise export karna hai)
  const reportData = [
    { Month: "Jan", Revenue: 40000, Students: 120 },
    { Month: "Feb", Revenue: 55000, Students: 150 },
    { Month: "Mar", Revenue: 85000, Students: 200 },
  ];

  // 2. Export Function
  const handleDownload = () => {
    const headers = Object.keys(reportData[0]).join(",");
    const rows = reportData.map(row => Object.values(row).join(",")).join("\n");
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Coaching_Report_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="reports-wrapper">
      <div className="reports-header">
        <h1>Analytics & Reports</h1>
        {/* 3. Button se connect karein */}
        <button className="download-report-btn" onClick={handleDownload}>
          <Download size={18} /> Download CSV
        </button>
      </div>
      {/* Baaki code... */}
    </div>
  );
};
  return (
    <div className="reports-wrapper">
      <div className="reports-header">
        <div>
          <h1>Analytics & Reports</h1>
          <p>Detailed insight into system's performance, revenue, and automation.</p>
        </div>
        
        <div className="export-controls">
          <select 
            className="format-select" 
            value={exportFormat} 
            onChange={(e) => setExportFormat(e.target.value)}
          >
            <option value="PDF">PDF Document</option>
            <option value="XLSX">Excel Spreadsheet</option>
            <option value="CSV">CSV File</option>
          </select>
          <button className="download-report-btn">
            <Download size={18} /> Export {exportFormat}
          </button>
        </div>
      </div>

      {/* --- Filter Tabs (Week 7 Requirement) --- */}
      <div className="report-tabs">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`report-tab ${activeReport === cat.id ? 'active' : ''}`}
            onClick={() => setActiveReport(cat.id)}
          >
            {cat.icon} {cat.id}
          </button>
        ))}
      </div>

      {/* --- Top Stats --- */}
      <div className="analytics-grid">
        <div className="ana-card">
          <div className="ana-icon purple"><Users /></div>
          <div className="ana-info">
            <span>Active Students</span>
            <h3>1,240</h3>
            <small className="trend up">+12% from last month</small>
          </div>
        </div>
        <div className="ana-card">
          <div className="ana-icon green"><CreditCard /></div>
          <div className="ana-info">
            <span>Net Revenue</span>
            <h3>₹4,50,000</h3>
            <small className="trend up">+8% this week</small>
          </div>
        </div>
      </div>

      <div className="charts-container">
        {/* --- Dynamic Chart Box --- */}
        <div className="chart-box glass-effect">
          <div className="chart-header">
            <h3>{activeReport} Trend Analysis</h3>
            <span className="live-indicator">Live Data</span>
          </div>
          <div className="bar-chart-sim">
            <div className="bar" style={{height: '40%'}} data-label="Jan"></div>
            <div className="bar" style={{height: '60%'}} data-label="Feb"></div>
            <div className="bar" style={{height: '85%'}} data-label="Mar"></div>
            <div className="bar" style={{height: '70%'}} data-label="Apr"></div>
            <div className="bar active" style={{height: '95%'}} data-label="May"></div>
          </div>
        </div>

        {/* --- Automation & Automation Status --- */}
        <div className="chart-box glass-effect">
          <h3>Scheduled Automations</h3>
          <div className="automation-list">
            <div className="auto-item">
              <div className="auto-icon"><FileText size={16}/></div>
              <div className="auto-text">
                <p>Monthly Finance PDF</p>
                <small>Next: 1st March</small>
              </div>
              <span className="status-tag">Auto</span>
            </div>
            <div className="auto-item">
              <div className="auto-icon"><FileSpreadsheet size={16}/></div>
              <div className="auto-text">
                <p>Weekly Attendance Excel</p>
                <small>Next: Monday</small>
              </div>
              <span className="status-tag">Auto</span>
            </div>
          </div>
          
          <div className="workbook-section">
             <button className="outline-btn">Placement Logbook (PDF)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;