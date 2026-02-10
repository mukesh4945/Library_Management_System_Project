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

  // 🔹 saare registered users uthao
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // 🔹 matching user dhundo
  const foundUser = users.find(
    (u) =>
      (u.email === loginId || u.phone === loginId) &&
      u.password === password
  );

  if (!foundUser) {
    alert("Invalid credentials");
    return;
  }

  // 🔥 ab login successful hai
  localStorage.setItem("user", JSON.stringify(foundUser));


  const role = foundUser.role;

  if (role === "STUDENT") navigate("/student/dashboard");
  else if (role === "ADMIN") navigate("/admin/dashboard");
  else if (role === "TRAINER") navigate("/trainer/dashboard");
  else if (role === "SUPER_ADMIN") navigate("/superadmin");
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
