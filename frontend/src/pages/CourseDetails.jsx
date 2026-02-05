import { useParams } from "react-router-dom";
import "./CourseDetails.css";

import { Link } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  

  const courses = [
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "css",
      title: "CSS full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/css.png",
      videoUrl: "/videos/htmlCourse.mp4",

      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/javascript.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "react",
      title: "React full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/react.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "node",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/node.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "mongo",
      title: "MongoDB full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/mongo.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "dbms",
      title: "DBMS full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/dbms.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "sql",
      title: "SQL full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/sql.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "python",
      title: "Python full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/python.jpg",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "cpp",
      title: "C++ full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/c++.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "clang",
      title: "C-Lang full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/c.jpg",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "csharp",
      title: "C# full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/csha.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "typescript",
      title: "TypeScript full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/type.jpg",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "dsa",
      title: "DSA full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/dsa.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
    {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
     {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            "What is JavaScript? (16 min)",
            "Setting Up Your Environment (19 min)",
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
     {
      id: "html",
      title: "HTML full Course",
      subtitle: "Learn the Basics of JavaScript",
      description:
        "JavaScript is a versatile programming language that powers the web. In this course, you will learn fundamentals including syntax, variables, data types and DOM.",
      price: "$39.99",
      oldPrice: "$49.99",
      discount: "20% off",
      duration: "1 hour, 5 minutes",
      lessons: "4 lessons",
      rating: 4,
      students: 9,
      image: "/image/coursesimage/html.png",
      syllabus: [
        {
          section: "Getting Started with JavaScript",
          time: "35 minutes",
          lectures: [
            {
             title: "What is JavaScript?",
             video: "/videos/js/intro.mp4",
            },
            
          ],
        },
        {
          section: "Variables and Data Types",
          time: "30 minutes",
          lectures: [
            "Understanding Variables (20 min)",
            "Data Types in JavaScript (10 min)",
          ],
        },
      ],
    },
  ];

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <h2 style={{ padding: "40px" }}>Course not found</h2>;
  }

  return (
    <div className="course-page">
      {/* LEFT CONTENT */}
      <div className="course-left">
        <h1>{course.title}</h1>
        <p className="subtitle">{course.subtitle}</p>

        <p className="description">{course.description}</p>

        <div className="meta">
          ⭐ {course.rating} ({course.rating} ratings) · {course.students} students
        </div>

        <h3>Course Structure</h3>

        {course.syllabus.map((sec, i) => (
          <div className="syllabus-box" key={i}>
            <div className="syllabus-header">
              <strong>{sec.section}</strong>
              <span>{sec.lectures.length} lectures · {sec.time}</span>
            </div>

            <ul>
              {sec.lectures.map((lec, index) => (
                <li key={index}>
                  ▶ {lec} <Link to="/htmlcourse"><span className="preview">Preview</span></Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="course-right">
        <div className="price-card">
          <img src={course.image} alt={course.title} />

          <p className="offer">⏰ 5 days left at this price!</p>

          <h2>{course.price}</h2>
          <p className="old-price">
            {course.oldPrice} <span>{course.discount}</span>
          </p>

          <div className="course-info">
            ⭐ {course.rating} | ⏱ {course.duration} | 📘 {course.lessons}
          </div>

         <Link to="/enrollcourse">
  <button className="enroll-btn">Enroll Now</button>
</Link>
          <h4>What's in the course?</h4>
          <ul className="benefits">
            <li>✔ Lifetime access with free updates</li>
            <li>✔ Step-by-step hands-on projects</li>
            <li>✔ Downloadable resources</li>
            <li>✔ Quizzes & certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
