import React, { useState } from 'react';
import { UserCheck, UserX, Search, Calendar, Save } from 'lucide-react';
import "./AttendanceTracker.css";

const AttendanceTracker = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Singh", roll: "LMS001", status: "present" },
    { id: 2, name: "Priya Sharma", roll: "LMS002", status: "absent" },
    { id: 3, name: "Amit Verma", roll: "LMS003", status: "none" },
  ]);

  const toggleStatus = (id, newStatus) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  return (
    <div className="attendance-wrapper">
      <div className="att-header">
        <h1>Attendance Management</h1>
        <div className="header-meta">
          <div className="date-badge"><Calendar size={18}/> {new Date().toLocaleDateString()}</div>
          <button className="save-btn"><Save size={18}/> Save Attendance</button>
        </div>
      </div>

      <div className="attendance-card glass-morph">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search by name or roll number..." />
        </div>

        <table className="att-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Student Name</th>
              <th>Status Action</th>
              <th>Live Indicator</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className={student.status}>
                <td>{student.roll}</td>
                <td><strong>{student.name}</strong></td>
                <td>
                  <div className="status-btns">
                    <button 
                      className={`present-btn ${student.status === 'present' ? 'active' : ''}`}
                      onClick={() => toggleStatus(student.id, 'present')}
                    >
                      <UserCheck size={16}/> Present
                    </button>
                    <button 
                      className={`absent-btn ${student.status === 'absent' ? 'active' : ''}`}
                      onClick={() => toggleStatus(student.id, 'absent')}
                    >
                      <UserX size={16}/> Absent
                    </button>
                  </div>
                </td>
                <td>
                  <span className={`indicator ${student.status}`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTracker;