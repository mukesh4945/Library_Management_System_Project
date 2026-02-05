import "./MyCourses.css";
import { Link } from "react-router-dom";

const MyCourses = () => {
  // 🔹 Dummy enrolled courses (frontend only)
  const enrolledCourses = [
    {
      id: 1,
      title: "HTML Full Course",
      instructor: "Mukesh Sir",
      progress: 35,
      route: "/htmlcourse"
    },
    {
      id: 2,
      title: "React Basics",
      instructor: "Mukesh Sir",
      progress: 0,
      route: "/reactcourse"
    }
  ];

  return (
    <div className="mycourses-container">
      <h1>🎓 My Enrolled Courses</h1>

      {enrolledCourses.length === 0 ? (
        <p className="empty-text">You have not enrolled in any course yet.</p>
      ) : (
        <div className="courses-grid">
          {enrolledCourses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>👨‍🏫 Instructor: {course.instructor}</p>

              {/* Progress */}
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="progress-text">
                {course.progress}% completed
              </span>

              <Link to={course.route}>
                <button className="open-btn">
                  {course.progress === 0
                    ? "Start Learning"
                    : "Continue Learning"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
