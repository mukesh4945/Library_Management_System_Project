import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loginId || !password) {
      alert("Please enter Email/Phone and Password");
      return;
    }

    // 🔐 TEMP ROLE (frontend demo)
    const role = "student";

    if (role === "student") navigate("/student/dashboard");
    else if (role === "admin") navigate("/admin/dashboard");
    else if (role === "trainer") navigate("/trainer/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="title">LMS Portal</h2>
        <p className="subtitle">Sign in to continue learning</p>

        <div className="input-group">
          <input
            type="text"
            required
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          <label>Email or Phone</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="extra-links">
          <span>Forgot Password?</span>
          <span className="highlight">Reset Here</span>
        </div>
      </div>
    </div>
  );
}

export default Login;