import React from 'react';
import { BookOpen, CheckCircle, Clock, BarChart, PlayCircle, GraduationCap } from 'lucide-react';
import "./StudentDashboard.css";

function StudentDashboard() {
  const courses = [
    { name: "MERN Stack", progress: 70, color: "#6366f1" },
    { name: "DSA in Java", progress: 55, color: "#10b981" },
    { name: "Angular Basics", progress: 40, color: "#f59e0b" },
  ];

  return (
    <div className="student-dashboard sa-page-content">
      
      {/* HEADER */}
      <header className="dashboard-header">
        <div className="header-info">
          <h1>Welcome Back, <span>Student</span> 👋</h1>
          <p>You have completed 75% of your weekly goal. Keep it up!</p>
        </div>
        <div className="header-icon">
          <GraduationCap size={40} color="#6366f1" />
        </div>
      </header>

      {/* STATS SECTION */}
      <section className="stats-grid">
        <div className="stat-card glass-morph">
          <div className="stat-icon-bg" style={{background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1'}}>
            <BookOpen size={24} />
          </div>
          <div className="stat-data">
            <h3>12</h3>
            <p>Enrolled Courses</p>
          </div>
        </div>

        <div className="stat-card glass-morph">
          <div className="stat-icon-bg" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>
            <CheckCircle size={24} />
          </div>
          <div className="stat-data">
            <h3>8</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="stat-card glass-morph">
          <div className="stat-icon-bg" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
            <Clock size={24} />
          </div>
          <div className="stat-data">
            <h3>4</h3>
            <p>Ongoing</p>
          </div>
        </div>

        <div className="stat-card glass-morph">
          <div className="stat-icon-bg" style={{background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6'}}>
            <BarChart size={24} />
          </div>
          <div className="stat-data">
            <h3>78%</h3>
            <p>Overall Progress</p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="dashboard-grid">

        {/* PROGRESS CARD */}
        <div className="card progress-card glass-morph">
          <div className="card-header">
            <h2>Learning Progress</h2>
            <BarChart size={20} color="#94a3b8" />
          </div>
          
          {courses.map((course, index) => (
            <div className="progress-item" key={index}>
              <div className="progress-info">
                <span>{course.name}</span>
                <span>{course.progress}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT COURSES CARD */}
        <div className="card course-card glass-morph">
          <div className="card-header">
            <h2>Recent Courses</h2>
            <PlayCircle size={20} color="#94a3b8" />
          </div>

          {["React Mastery", "Node.js Backend", "DSA with Java"].map((course, index) => (
            <div className="course-item" key={index}>
              <div className="course-info">
                <h4>{course}</h4>
                <p>Module 4 • Lesson 12</p>
              </div>
              <button className="continue-btn">Continue</button>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default StudentDashboard;