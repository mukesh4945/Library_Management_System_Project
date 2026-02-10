import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleRegister = () => {
  if (!formData.email) {
    alert("Email is required");
    return;
  }

  const roleMap = {
    student: "STUDENT",
    admin: "ADMIN",
    trainer: "TRAINER",
    superadmin: "SUPER_ADMIN",
  };

  const finalRole = roleMap[formData.role];

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(
    (u) => u.email === formData.email
  );

  if (exists) {
    alert("Account already exists. Please login.");
    navigate("/login");
    return;
  }

  const newUser = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    role: finalRole,
  };

users.push(newUser);

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("user", JSON.stringify(newUser)); // 🔥 SAME KEY



  if (finalRole === "STUDENT") navigate("/student/dashboard");
  else if (finalRole === "ADMIN") navigate("/admin/dashboard");
  else if (finalRole === "TRAINER") navigate("/trainer/dashboard");
  else if (finalRole === "SUPER_ADMIN") navigate("/superadmin");
};



  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join LMS and start learning today</p>

        <div className="input-group">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email Address</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <div className="select-group">
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="trainer">Trainer</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>

       <button
  type="button"   // ✅ MOST IMPORTANT
  className="register-btn"
  onClick={handleRegister}
>
  Register
</button>

        <p className="footer-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
