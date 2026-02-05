import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PaymentModal from "../components/PaymentModal";
import "./EnrollCourse.css";

const EnrollCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  /* ================= COURSE ================= */
  const course = {
    id: courseId,
    title: "HTML Full Course",
    instructor: "Mukesh Sir",
    duration: "10 Hours",
    level: "Beginner",
    price: 1999,
    discount: 500
  };

  const finalPrice = course.price - course.discount;

  /* ================= STATES ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: ""
  });

  const [agree, setAgree] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);

  /* ================= CHECK ENROLLED ================= */
  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    if (enrolled.find((c) => c.id === course.id)) {
      setAlreadyEnrolled(true);
    }
  }, [course.id]);

  /* ================= VALIDATION ================= */
  const handlePayClick = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required details");
      return;
    }

    if (!agree) {
      alert("Please accept Terms & Conditions");
      return;
    }

    setShowPayment(true);
  };

  /* ================= ALREADY ENROLLED ================= */
  if (alreadyEnrolled) {
    return (
      <div className="enroll-container">
        <h2>✅ Already Enrolled</h2>
        <p>You have already enrolled in this course.</p>
        <button onClick={() => navigate("/student/my-courses")}>
          Go to My Courses
        </button>
      </div>
    );
  }

  return (
    <div className="enroll-container">
      <h1>📘 Course Enrollment</h1>

      {/* ================= COURSE SUMMARY ================= */}
      <div className="course-summary">
        <h3>{course.title}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Level: {course.level}</p>
      </div>

      {!success ? (
        <>
          {/* ================= STUDENT FORM ================= */}
          <div className="enroll-form">
            <h3>Student Information</h3>

            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="Qualification (optional)"
              value={form.qualification}
              onChange={(e) =>
                setForm({ ...form, qualification: e.target.value })
              }
            />
          </div>

          {/* ================= PRICE ================= */}
          <div className="price-box">
            <p>Course Price: ₹{course.price}</p>
            <p>Discount: − ₹{course.discount}</p>
            <h3>Total Payable: ₹{finalPrice}</h3>
          </div>

          {/* ================= TERMS ================= */}
          <label className="terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            I agree to the Terms & Conditions
          </label>

          {/* ================= PAY BUTTON ================= */}
          <button onClick={handlePayClick}>
            Pay ₹{finalPrice}
          </button>
        </>
      ) : (
        <div className="success-box">
          <h2>🎉 Enrollment Successful</h2>
          <p>Payment completed successfully.</p>
          <p>Redirecting to My Courses...</p>
        </div>
      )}

      {/* ================= PAYMENT MODAL ================= */}
      {showPayment && (
        <PaymentModal
          amount={finalPrice}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            setSuccess(true);

            const enrolled =
              JSON.parse(localStorage.getItem("enrolledCourses")) || [];
            enrolled.push({
              ...course,
              progress: 0,
              student: form
            });

            localStorage.setItem(
              "enrolledCourses",
              JSON.stringify(enrolled)
            );

            setTimeout(
              () => navigate("/student/my-courses"),
              1500
            );
          }}
        />
      )}
    </div>
  );
};

export default EnrollCourse;
