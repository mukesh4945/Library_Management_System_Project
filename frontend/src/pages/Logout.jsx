import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 🔐 Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    // optional: enrolled courses ya session clear
    // localStorage.clear();

    // ⏳ Small delay for UX
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        flexDirection: "column"
      }}
    >
      <h1>👋 Logging Out</h1>
      <p>You have been safely logged out.</p>
    </div>
  );
};

export default Logout;
