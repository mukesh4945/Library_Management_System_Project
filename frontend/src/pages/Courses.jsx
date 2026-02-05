import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

function Courses() {
  const [search, setSearch] = useState("");

  const coursesData = [
    {
      id: "html",
      title: "HTML full Course",
      description: "Learn HTML from scratch.",
      price: "Free",
      level: "Beginner To Master",
      image: "/image/coursesimage/html.png",
    },
    {
      id: "css",
      title: "CSS full Course",
      description: "Learn CSS with real projects.",
      price: "Free",
      level: "Beginner To Master",
      image: "/image/coursesimage/css.png",
    },
    {
      id: "javascript",
      title: "JavaScript full Course",
      description: "Become strong in JavaScript concepts.",
      price: "Paid",
      level: "Beginner To Master",
      image: "/image/coursesimage/javascript.png",
    },
    {
      id: "react",
      title: "React full Course",
      description: "Build modern UI using React.",
      price: "Paid",
      level: "Beginner To Master",
      image: "/image/coursesimage/react.png",
    },
    {
      id: "node",
      title: "Node.js full Course",
      description: "Backend development with Node.js.",
      price: "Free",
      level: "Beginner To Master",
      image: "/image/coursesimage/node.png",
    },
    {
      id: "mongo",
      title: "MongoDB full Course",
      description: "Learn MongoDB from basics.",
      price: "Free",
      level: "Beginner To Master",
      image: "/image/coursesimage/mongo.png",
    },
    {
      id: "dbms",
      title: "DBMS full Course",
      description: "Become strong in JavaScript concepts.",
      instructor: "Jane Smith",
      duration: "15 Hours",
      progress: 60,
      price: "Free",
      level: "Beginner To Master",
       image: "image/coursesimage/dbms.png",
    },
    {
  id: "sql",
  title: "SQL full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/sql.png",
},
{
  id: "python",
  title: "Python full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/python.jpg",
},
{
  id: "cpp",
  title: "C++ full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/c++.png",
},
{
  id: "clang",
  title: "C-Lang full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/c.jpg",
},
{
  id: "csharp",
  title: "C# full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/csha.png",
},
{
  id: "typescript",
  title: "TypeScript full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/type.jpg",
},
{
  id: "dsa",
  title: "DSA full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/dsa.png",
},
{
  id: "angular",
  title: "Angular full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/angular.jpg",
},
{
  id: "php",
  title: "PHP full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/php.jpg",
},
{
  id: "bootstrap",
  title: "BOOTSTRAP full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/bootstrap.png",
},
{
  id: "xml",
  title: "XML full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/xml.jpg",
},
{
  id: "django",
  title: "DJANGO full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/django.jpg",
},
{
  id: "numpy",
  title: "NUMPY full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/numpy.png",
},
{
  id: "pandas",
  title: "PANDAS full Course",
  description: "Become strong in JavaScript concepts.",
  instructor: "Jane Smith",
  duration: "15 Hours",
  progress: 60,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/pandas.png",
},
{
  id: "postgresql",
  title: "POSTGRESQL full Course",
  description: "Backend development with Node.js.",
  instructor: "Alex Brown",
  duration: "10 Hours",
  progress: 25,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/postsql.png",
},
{
  id: "git",
  title: "GIT full Course",
  description: "Learn database with MongoDB.",
  instructor: "Chris Lee",
  duration: "8 Hours",
  progress: 80,
  price: "Free",
  level: "Beginner To Master",
  image: "image/coursesimage/git.jpg",
},

  ];

  // 🔍 Search filter
  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      <h2 className="courses-title">All Courses</h2>

      {/* Search */}
      <div className="courses-search">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses */}
      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              level={course.level}
              image={course.image}
            />
          ))
        ) : (
          <p className="no-courses">No courses found</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
