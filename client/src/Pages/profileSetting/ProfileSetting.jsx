import "./profileSetting.css";

import { BiImageAdd } from "react-icons/bi";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function ProfileSetting() {
  const [file, setFile] = useState(null);
  const username = useRef();
  const email = useRef();
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: username.current.value,
      email: email.current.value,
      phone,
      bio,
      country,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.img = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <ProfileSidebar />
        <div className="profileSetting">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">Hello, {user.username}</span>
             
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <div className="settingsPP">
                <label htmlFor="fileInput" className="labelInputFile">
                  <span>Image: </span>
                  <BiImageAdd className="changeImageIcon" />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                </div>
              <label>Username</label>
              <input
                type="text"
                defaultValue={user.username}
                ref={username}
              />
              <label>Email</label>
              <input
                type="email"
                defaultValue={user.email}
                ref={email}
              />
              <label>Phone: </label>
              <input
                type="text"
                defaultValue={user.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Country</label>
              <input
                type="text"
                defaultValue={user.country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label>Bio:</label>
              <input
                type="text"
                defaultValue={user.bio}
                onChange={(e) => setBio(e.target.value)}
              />
      
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>
              {success && (
                <span
                  style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                >
                  Profile has been updated...
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
