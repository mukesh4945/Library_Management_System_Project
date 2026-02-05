import { useState } from "react";
import "./HtmlCourse.css";

function HtmlCourse() {
  const [quality, setQuality] = useState("720");
  const [likes, setLikes] = useState(120);
  const [dislikes, setDislikes] = useState(4);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // ✅ MULTIPLE VIDEOS DATA
  const videos = [
    {
      id: 1,
      title: "HTML Introduction",
      src: "/videos/htmlCourse.mp4",
    },
    {
      id: 2,
      title: "HTML Tags Explained",
      src: "/videos/html/tags.mp4",
    },
    {
      id: 3,
      title: "Forms & Inputs",
      src: "/videos/html/forms.mp4",
    },
    {
      id: 4,
      title: "Tables & Lists",
      src: "/videos/html/tables.mp4",
    },
  ];

  // 🎯 CURRENT VIDEO
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  // PDF
  const pdfSrc = "/pdfs/htmlCourse.pdf";

  const addComment = () => {
    if (!commentText.trim()) return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    
      <div className="lms-container">

        {/* 🔹 COURSE HEADER */}
        <div className="course-header">
          <h1>HTML Full Course</h1>
          <p>Beginner to Master – Library Management Style Learning</p>
        </div>

        {/* ================= PDF SECTION ================= */}
        <div className="resource-card">
          <h2>📘 Course PDF</h2>

          <iframe src={pdfSrc} title="HTML PDF" className="pdf-viewer" />

          <div className="resource-actions">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="btn read"
            >
              Read in New Tab
            </a>

            <a href={pdfSrc} download className="btn download">
              Download PDF
            </a>
          </div>
        </div>

        {/* ================= VIDEO SECTION ================= */}
        <div className="resource-card">
          <h2>🎥 Course Videos</h2>

          {/* 🎬 VIDEO PLAYER */}
          <video
            controls
            className="video-player"
            key={currentVideo.src}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* VIDEO CONTROLS */}
          <div className="video-controls">
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="btn"
            >
              <option value="240">240p</option>
              <option value="360">360p</option>
              <option value="720">720p HD</option>
            </select>

            <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
            <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>

            <button
              onClick={() =>
                navigator.share
                  ? navigator.share({
                      title: currentVideo.title,
                      url: window.location.href,
                    })
                  : alert("Copy this link:\n" + window.location.href)
              }
            >
              🔗 Share
            </button>

            <a
              href={currentVideo.src}
              download
              className="btn download"
            >
              ⬇ Download Video
            </a>
          </div>

          {/* 🎯 VIDEO PLAYLIST */}
          <div className="video-playlist">
            <h3>📺 Video Playlist</h3>

            {videos.map((video) => (
              <div
                key={video.id}
                className={`playlist-item ${
                  currentVideo.id === video.id ? "active" : ""
                }`}
                onClick={() => setCurrentVideo(video)}
              >
                ▶ {video.title}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="resource-card">
          <h2>📄 Description</h2>
          <p>
            This HTML Full Course covers all concepts from basics to advanced:
            tags, forms, tables, multimedia, SEO, and real-world projects.
          </p>
        </div>

        {/* ================= COMMENTS ================= */}
        <div className="resource-card">
          <h2>💬 Comments</h2>

          <textarea
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />

          <button className="btn read" onClick={addComment}>
            Post Comment
          </button>

          {comments.map((c, i) => (
            <p key={i} className="comment">
              💬 {c}
            </p>
          ))}
        </div>

      </div>
   
  );
}

export default HtmlCourse;
