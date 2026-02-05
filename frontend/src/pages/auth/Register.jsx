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
    if (!formData.email && !formData.phone) {
      alert("Please enter Email or Phone Number");
      return;
    }

    if (formData.role === "student") navigate("/student/dashboard");
    else if (formData.role === "admin") navigate("/admin/dashboard");
    else if (formData.role === "trainer") navigate("/trainer/dashboard");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join LMS and start learning today</p>

        <div className="input-group">
          <input type="text" name="name" required onChange={handleChange} />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input type="email" name="email" required onChange={handleChange} />
          <label>Email Address</label>
        </div>

        <div className="input-group">
          <input type="text" name="phone" required onChange={handleChange} />
          <label>Phone Number</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <div className="select-group">
          <select name="role" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="trainer">Trainer</option>
          </select>
        </div>

        <button className="register-btn" onClick={handleRegister}>
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
