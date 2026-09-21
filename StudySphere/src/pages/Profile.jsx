import { useEffect, useState } from "react";
import { getUserData, setUserData } from "../utils/userStorage";

function Profile() {
  const defaultProfile = {
    name: "Jhanvi Gupta",
    email: "jhanvi@gmail.com",
    phone: "",
    college: "",
    year: "3rd Year",
  };

  const [profile, setProfile] = useState(() => {
  return getUserData("profile", defaultProfile);
});

  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  useEffect(() => {
    setUserData("profile", profile);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditedProfile(profile);
    setEditMode(true);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setEditMode(false);
  };

  return (
    <div className="profile-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <p className="dashboard-label">ACCOUNT</p>
          <h1>My Profile</h1>
          <p>Manage your personal information.</p>
        </div>
      </div>


      {/* PROFILE CARD */}
      <section className="profile-card">

        <div className="profile-avatar">
          {profile.name
            ? profile.name.charAt(0).toUpperCase()
            : "U"}
        </div>

        <div className="profile-main-info">
          <h2>{profile.name || "Your Name"}</h2>
          <p>{profile.email || "Your email"}</p>
        </div>

      </section>


      {/* PERSONAL INFORMATION */}
      <section className="profile-section">

        <div className="section-heading">
          <div>
            <h2>Personal Information</h2>
            <p>Keep your profile details up to date.</p>
          </div>
        </div>


        <div className="profile-form">

          <div className="profile-field">
            <label>Name</label>

            {editMode ? (
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            ) : (
              <p>{profile.name || "Not added"}</p>
            )}
          </div>


          <div className="profile-field">
            <label>Email</label>

            {editMode ? (
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            ) : (
              <p>{profile.email || "Not added"}</p>
            )}
          </div>


          <div className="profile-field">
            <label>Phone Number</label>

            {editMode ? (
              <input
                type="tel"
                name="phone"
                value={editedProfile.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            ) : (
              <p>{profile.phone || "Not added"}</p>
            )}
          </div>


          <div className="profile-field">
            <label>College</label>

            {editMode ? (
              <input
                type="text"
                name="college"
                value={editedProfile.college}
                onChange={handleChange}
                placeholder="Enter your college"
              />
            ) : (
              <p>{profile.college || "Not added"}</p>
            )}
          </div>


          <div className="profile-field">
            <label>Year</label>

            {editMode ? (
              <select
                name="year"
                value={editedProfile.year}
                onChange={handleChange}
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>Other</option>
              </select>
            ) : (
              <p>{profile.year || "Not added"}</p>
            )}
          </div>

        </div>


        {/* BUTTONS */}
        <div className="profile-actions">

          {!editMode ? (
            <button
              className="profile-edit-button"
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                className="profile-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                className="profile-save-button"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </>
          )}

        </div>

      </section>

    </div>
  );
}

export default Profile;