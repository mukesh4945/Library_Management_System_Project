import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // CSS Import kiya

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 🔐 Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    // ⏳ Smooth Transition Delay
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="logout-wrapper">
      <div className="logout-card">
        <div className="loader"></div>
        <br />
        <h1>👋 Logging Out</h1>
        <p>Securing your session and redirecting you...</p>
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
          Thank you for using LMS Platform
        </span>
      </div>
    </div>
  );
};

export default Logout;