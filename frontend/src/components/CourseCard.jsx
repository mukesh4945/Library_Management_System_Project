import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <div className="course-card">
      <div
        className="course-image"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <span className="level-badge">{props.level}</span>
      </div>

      <div className="course-content">
        <h3 className="course-title">{props.title}</h3>
        <p className="course-description">{props.description}</p>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${props.progress || 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {props.progress || 100}% Completed
          </span>
        </div>

        <div className="course-footer">
          <span className="price">{props.price}</span>

          <Link to={`/courses/${props.id}`} className="view-btnn">
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
