import { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  // 🔹 Load from localStorage or fallback
  const savedUser = JSON.parse(localStorage.getItem("studentProfile"));

  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(
    savedUser || {
      name: "Mukesh Vishwakarma",
      email: "mukesh@gmail.com",
      phone: "9876543210",
      role: "Student",
      photo: "/image/profile.png"
    }
  );

  const [tempUser, setTempUser] = useState(user);

  // 🔹 Save to localStorage
  const handleSave = () => {
    setUser(tempUser);
    localStorage.setItem("studentProfile", JSON.stringify(tempUser));
    setEditMode(false);
  };

  // 🔹 Image upload preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setTempUser({ ...tempUser, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-container">
      <h1>👤 My Profile</h1>

      <div className="profile-card">
        {/* ===== AVATAR ===== */}
        <div className="profile-avatar">
          <img src={editMode ? tempUser.photo : user.photo} alt="Profile" />

          {editMode && (
            <label className="upload-btn">
              Change Photo
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>

        {/* ===== INFO ===== */}
        <div className="profile-info">
          {!editMode ? (
            <>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
              <p><b>Role:</b> {user.role}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                value={tempUser.name}
                onChange={(e) =>
                  setTempUser({ ...tempUser, name: e.target.value })
                }
              />

              <input
                type="email"
                value={tempUser.email}
                onChange={(e) =>
                  setTempUser({ ...tempUser, email: e.target.value })
                }
              />

              <input
                type="text"
                value={tempUser.phone}
                onChange={(e) =>
                  setTempUser({ ...tempUser, phone: e.target.value })
                }
              />
            </>
          )}
        </div>

        {/* ===== ACTIONS ===== */}
        <div className="profile-actions">
          {!editMode ? (
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          ) : (
            <>
              <button onClick={handleSave}>Save</button>
              <button
                className="secondary"
                onClick={() => {
                  setTempUser(user);
                  setEditMode(false);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
