import { NavLink } from "react-router-dom";
import "./TrainerSidebar.css";

const TrainerSidebar = () => {
  return (
    <aside className="trainer-sidebar">
      <div className="trainer-profile">
        <img src="/image/profile.png" alt="Trainer" />
        <h3>Mukesh Sir</h3>
        <span>Trainer</span>
      </div>

      <nav>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="issue">Issue Book</NavLink>
        <NavLink to="return">Return Book</NavLink>
        <NavLink to="reservations">Reservations</NavLink>
      </nav>
    </aside>
  );
};

export default TrainerSidebar;
