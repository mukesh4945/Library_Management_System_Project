import React from 'react';
import { TrendingUp, Users, BookOpen, CreditCard, Download } from 'lucide-react';
import "./Reports.css";

const Reports = () => {
  return (
    <div className="reports-wrapper">
      <div className="reports-header">
        <div>
          <h1>Analytics & Reports</h1>
          <p>Detailed insight into your system's performance and revenue.</p>
        </div>
        <button className="download-report-btn">
          <Download size={18} /> Download Full PDF
        </button>
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
        {/* --- Revenue Chart (Visual Simulation) --- */}
        <div className="chart-box glass-effect">
          <h3>Monthly Revenue Trend</h3>
          <div className="bar-chart-sim">
            <div className="bar" style={{height: '40%'}} data-label="Jan"></div>
            <div className="bar" style={{height: '60%'}} data-label="Feb"></div>
            <div className="bar" style={{height: '85%'}} data-label="Mar"></div>
            <div className="bar" style={{height: '70%'}} data-label="Apr"></div>
            <div className="bar active" style={{height: '95%'}} data-label="May"></div>
          </div>
        </div>

        {/* --- Library Usage --- */}
        <div className="chart-box glass-effect">
          <h3>Library Resource Distribution</h3>
          <div className="progress-circle-wrap">
            <div className="stat-row">
              <span>Physical Books</span>
              <div className="prog-bar"><div className="fill p-books" style={{width: '65%'}}></div></div>
              <span>65%</span>
            </div>
            <div className="stat-row">
              <span>E-Books / PDFs</span>
              <div className="prog-bar"><div className="fill p-pdfs" style={{width: '35%'}}></div></div>
              <span>35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;